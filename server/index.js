const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Evolution API config
const EVO_URL = process.env.EVO_URL || '';
const EVO_API_KEY = process.env.EVO_API_KEY || '';
const EVO_INSTANCE = process.env.EVO_INSTANCE || 'Alex';
const OWNER_PHONE = process.env.OWNER_PHONE || '33671331193';

// Data file
const DATA_FILE = path.join(__dirname, 'data', 'bookings.json');

// Ensure data directory exists
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'), { recursive: true });
}
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, '[]', 'utf8');
}

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, '..', 'public')));

// === API ROUTES ===

// Get all bookings (for calendar availability)
app.get('/api/bookings', (req, res) => {
  const bookings = loadBookings();
  // Return only date/slot/status (no personal data to frontend)
  const availability = {};
  bookings.forEach(b => {
    if (!availability[b.date]) availability[b.date] = {};
    availability[b.date][b.slot] = b.status || 'pending';
  });
  res.json(availability);
});

// Create a new booking
app.post('/api/bookings', async (req, res) => {
  const { date, slot, arrival_time, guests, first_name, last_name, email, phone, company, comment } = req.body;

  if (!date || !slot || !first_name || !last_name || !email || !phone) {
    return res.status(400).json({ error: 'Champs obligatoires manquants' });
  }

  const bookings = loadBookings();

  // Check if slot is already taken
  const existing = bookings.find(b => b.date === date && b.slot === slot && b.status !== 'cancelled');
  if (existing) {
    return res.status(409).json({ error: 'Ce créneau est déjà réservé' });
  }

  const booking = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    date,
    slot,
    arrival_time,
    guests,
    first_name,
    last_name,
    email,
    phone,
    company: company || '',
    comment: comment || '',
    status: 'pending',
    created_at: new Date().toISOString()
  };

  bookings.push(booking);
  saveBookings(bookings);

  // Send WhatsApp notification to owner
  await sendWhatsAppNotification(booking);

  res.status(201).json({
    success: true,
    message: 'Votre demande a été envoyée. Le patron vous rappellera très rapidement pour confirmer.',
    booking_id: booking.id
  });
});

// === WHATSAPP NOTIFICATION ===
async function sendWhatsAppNotification(booking) {
  if (!EVO_URL || !EVO_API_KEY) {
    console.log('Evolution API not configured, skipping WhatsApp notification');
    return;
  }

  const slotLabel = booking.slot === 'lunch' ? 'Déjeuner' : 'Dîner';
  const dateParts = booking.date.split('-');
  const dateObj = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  const dateFormatted = `${days[dateObj.getDay()]} ${dateObj.getDate()} ${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`;

  const message = `🔔 *Nouvelle demande de réservation*

📅 *Date :* ${dateFormatted}
🕐 *Créneau :* ${slotLabel}
⏰ *Arrivée :* ${booking.arrival_time || 'Non précisée'}
👥 *Convives :* ${booking.guests} personnes

👤 *Contact :* ${booking.first_name} ${booking.last_name}
📧 *Email :* ${booking.email}
📱 *Tél :* ${booking.phone}
${booking.company ? `🏢 *Société :* ${booking.company}\n` : ''}${booking.comment ? `💬 *Commentaire :* ${booking.comment}\n` : ''}
➡️ _Rappelez le client pour confirmer la réservation._`;

  try {
    const response = await fetch(`${EVO_URL}/message/sendText/${EVO_INSTANCE}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': EVO_API_KEY
      },
      body: JSON.stringify({
        number: OWNER_PHONE,
        text: message
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('WhatsApp send failed:', response.status, err);
    } else {
      console.log('WhatsApp notification sent for booking', booking.id);
    }
  } catch (err) {
    console.error('WhatsApp notification error:', err.message);
  }
}

// === DATA HELPERS ===
function loadBookings() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  } catch {
    return [];
  }
}

function saveBookings(bookings) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(bookings, null, 2), 'utf8');
}

// SPA fallback — serve index.html for non-API routes
app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Thermidor API running on port ${PORT}`);
  console.log(`Evolution API: ${EVO_URL ? 'configured' : 'NOT configured'}`);
});
