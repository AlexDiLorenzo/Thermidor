// ===== BOOKING STATE =====
const BOOKING_API = ''; // Will be set to your server URL
const ADMIN_EMAIL = 'contact@dynam8.fr';
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let bookings = {};
let selectedDate = null;
let selectedSlot = null;
let guestCount = 8;

// ===== CALENDAR =====
const monthNames = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

function renderCalendar() {
  const title = document.getElementById('calendarTitle');
  const grid = document.getElementById('calendarGrid');
  title.textContent = monthNames[currentMonth] + ' ' + currentYear;
  grid.innerHTML = '';

  const firstDay = new Date(currentYear, currentMonth, 1);
  let startDay = firstDay.getDay() - 1;
  if (startDay < 0) startDay = 6;
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const today = new Date();
  today.setHours(0,0,0,0);
  const minDate = new Date(today);
  minDate.setDate(minDate.getDate() + 1);

  for (let i = 0; i < startDay; i++) {
    const cell = document.createElement('div');
    cell.className = 'calendar-day empty';
    grid.appendChild(cell);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const cell = document.createElement('div');
    const date = new Date(currentYear, currentMonth, d);
    const dateStr = formatDate(date);
    cell.className = 'calendar-day';
    cell.textContent = d;

    if (date < minDate) {
      cell.classList.add('disabled');
    } else {
      const dayBooking = bookings[dateStr];
      if (dayBooking) {
        cell.classList.add('has-booking');
        if (dayBooking.lunch && dayBooking.dinner) {
          cell.classList.add('full');
        } else {
          cell.classList.add('partial');
        }
      }
      cell.onclick = () => selectDate(dateStr, cell);
    }

    if (date.toDateString() === today.toDateString()) {
      cell.classList.add('today');
    }
    if (selectedDate === dateStr) {
      cell.classList.add('selected');
    }

    grid.appendChild(cell);
  }
}

function changeMonth(dir) {
  currentMonth += dir;
  if (currentMonth > 11) { currentMonth = 0; currentYear++; }
  if (currentMonth < 0) { currentMonth = 11; currentYear--; }
  renderCalendar();
}

function formatDate(date) {
  return date.getFullYear() + '-' + String(date.getMonth()+1).padStart(2,'0') + '-' + String(date.getDate()).padStart(2,'0');
}

function formatDateFr(dateStr) {
  const parts = dateStr.split('-');
  const date = new Date(parts[0], parts[1]-1, parts[2]);
  const days = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
  return days[date.getDay()] + ' ' + date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear();
}

function selectDate(dateStr, cell) {
  selectedDate = dateStr;
  document.querySelectorAll('.calendar-day').forEach(c => c.classList.remove('selected'));
  cell.classList.add('selected');
  document.getElementById('btnStep1').disabled = false;
}

// ===== SLOT SELECTION =====
function selectSlot(slot) {
  const dayBooking = bookings[selectedDate];
  if (dayBooking && dayBooking[slot]) return;

  selectedSlot = slot;
  document.querySelectorAll('.slot-card').forEach(c => c.classList.remove('selected'));
  document.getElementById(slot === 'lunch' ? 'slotLunch' : 'slotDinner').classList.add('selected');
  document.getElementById('btnStep2').disabled = false;
  updateArrivalTimes();
}

function updateArrivalTimes() {
  const select = document.getElementById('arrivalTime');
  select.innerHTML = '<option value="">Sélectionnez une heure</option>';
  if (selectedSlot === 'lunch') {
    for (let h = 11; h <= 14; h++) {
      for (let m = 0; m < 60; m += 15) {
        if (h === 14 && m > 0) break;
        const time = String(h).padStart(2,'0') + ':' + String(m).padStart(2,'0');
        select.innerHTML += '<option value="'+time+'">'+time+'</option>';
      }
    }
  } else {
    for (let h = 18; h <= 21; h++) {
      for (let m = 0; m < 60; m += 15) {
        if (h === 21 && m > 30) break;
        const time = String(h).padStart(2,'0') + ':' + String(m).padStart(2,'0');
        select.innerHTML += '<option value="'+time+'">'+time+'</option>';
      }
    }
  }
}

// ===== GUESTS =====
function changeGuests(dir) {
  guestCount = Math.min(20, Math.max(8, guestCount + dir));
  document.getElementById('guestNum').textContent = guestCount;
}

// ===== STEP NAVIGATION =====
function goToStep(step) {
  if (step === 2) {
    const dayBooking = bookings[selectedDate] || {};
    const lunchCard = document.getElementById('slotLunch');
    const dinnerCard = document.getElementById('slotDinner');
    lunchCard.classList.remove('unavailable','selected');
    dinnerCard.classList.remove('unavailable','selected');
    if (dayBooking.lunch) lunchCard.classList.add('unavailable');
    if (dayBooking.dinner) dinnerCard.classList.add('unavailable');
    document.getElementById('selectedDateDisplay').textContent = formatDateFr(selectedDate);
    selectedSlot = null;
    document.getElementById('btnStep2').disabled = true;
  }
  if (step === 3) {
    updateArrivalTimes();
  }
  if (step === 4) {
    if (!document.getElementById('arrivalTime').value) {
      document.getElementById('arrivalTime').focus();
      return;
    }
  }
  if (step === 5) {
    const fn = document.getElementById('firstName').value.trim();
    const ln = document.getElementById('lastName').value.trim();
    const em = document.getElementById('email').value.trim();
    const ph = document.getElementById('phone').value.trim();
    if (!fn || !ln || !em || !ph) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    buildSummary();
  }

  document.querySelectorAll('.booking-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('step' + step).classList.add('active');

  document.querySelectorAll('.booking-step').forEach(s => {
    const sNum = parseInt(s.dataset.step);
    s.classList.remove('active','completed');
    if (sNum === step) s.classList.add('active');
    if (sNum < step) s.classList.add('completed');
  });

  document.getElementById('reservation').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function buildSummary() {
  const card = document.getElementById('summaryCard');
  card.innerHTML = `
    <div class="summary-row"><span class="label">Date</span><span class="value">${formatDateFr(selectedDate)}</span></div>
    <div class="summary-row"><span class="label">Créneau</span><span class="value">${selectedSlot === 'lunch' ? 'Déjeuner' : 'Dîner'}</span></div>
    <div class="summary-row"><span class="label">Heure d'arrivée</span><span class="value">${document.getElementById('arrivalTime').value}</span></div>
    <div class="summary-row"><span class="label">Convives</span><span class="value">${guestCount} personnes</span></div>
    <div class="summary-row"><span class="label">Contact</span><span class="value">${document.getElementById('firstName').value} ${document.getElementById('lastName').value}</span></div>
    <div class="summary-row"><span class="label">E-mail</span><span class="value">${document.getElementById('email').value}</span></div>
    <div class="summary-row"><span class="label">Téléphone</span><span class="value">${document.getElementById('phone').value}</span></div>
    ${document.getElementById('company').value ? '<div class="summary-row"><span class="label">Société</span><span class="value">'+document.getElementById('company').value+'</span></div>' : ''}
    ${document.getElementById('comment').value ? '<div class="summary-row"><span class="label">Commentaire</span><span class="value">'+document.getElementById('comment').value+'</span></div>' : ''}
  `;
}

// ===== SUBMIT BOOKING =====
async function submitBooking() {
  const bookingData = {
    date: selectedDate,
    slot: selectedSlot,
    arrival_time: document.getElementById('arrivalTime').value,
    guests: guestCount,
    first_name: document.getElementById('firstName').value.trim(),
    last_name: document.getElementById('lastName').value.trim(),
    email: document.getElementById('email').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    company: document.getElementById('company').value.trim(),
    comment: document.getElementById('comment').value.trim(),
    timestamp: new Date().toISOString()
  };

  // Send to backend API (handles Evolution API notification)
  if (BOOKING_API) {
    try {
      const resp = await fetch(BOOKING_API + '/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });
      if (!resp.ok) throw new Error('Erreur serveur');
    } catch (err) {
      console.error('API error:', err);
    }
  }

  // Formspree fallback
  try {
    await fetch('https://formspree.io/f/mreadbzn', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        _subject: `Nouvelle réservation - ${formatDateFr(selectedDate)} - ${selectedSlot === 'lunch' ? 'Déjeuner' : 'Dîner'}`,
        date: formatDateFr(selectedDate),
        creneau: selectedSlot === 'lunch' ? 'Déjeuner' : 'Dîner',
        heure_arrivee: bookingData.arrival_time,
        convives: bookingData.guests,
        nom: bookingData.first_name + ' ' + bookingData.last_name,
        email: bookingData.email,
        telephone: bookingData.phone,
        societe: bookingData.company || '-',
        commentaire: bookingData.comment || '-'
      })
    });
  } catch(e) {
    console.log('Formspree fallback error:', e);
  }

  // Save locally
  if (!bookings[selectedDate]) bookings[selectedDate] = {};
  bookings[selectedDate][selectedSlot] = 'pending';
  localStorage.setItem('thermidor_bookings', JSON.stringify(bookings));

  // Show success
  document.getElementById('summaryView').style.display = 'none';
  document.getElementById('successView').style.display = 'block';
  document.querySelectorAll('.booking-step').forEach(s => s.classList.add('completed'));
}

// ===== INIT =====
function initBooking() {
  const saved = localStorage.getItem('thermidor_bookings');
  if (saved) {
    try { bookings = JSON.parse(saved); } catch(e) {}
  }
  renderCalendar();
}

initBooking();
