# Le Thermidor — Site Web

## Project Overview
Site web du restaurant Le Thermidor, bistrot parisien historique (100+ ans), 2 rue Croix des Petits Champs, 75001 Paris.

## Architecture
- **Frontend**: HTML/CSS/JS statique (pas de framework), 2 pages
  - `index.html` — Page restaurant (histoire, carte/menu, horaires, infos, Google Maps)
  - `receptions.html` — Page réceptions & groupes (prestations, réservation 5 étapes)
- **Backend**: Node.js/Express (`server/index.js`)
  - `POST /api/bookings` — Crée une réservation + envoie WhatsApp au patron
  - `GET /api/bookings` — Retourne les créneaux pris (pour le calendrier)
  - Données persistées dans `server/data/bookings.json`
- **i18n**: Système FR/EN avec drapeaux SVG, traductions dans `js/i18n.js`

## File Structure
```
├── index.html              # Page restaurant
├── receptions.html         # Page réceptions & groupes
├── css/style.css           # Styles partagés (variables CSS, responsive)
├── js/
│   ├── main.js             # JS commun (preloader, nav, lightbox, reveal)
│   ├── booking.js          # Système de réservation (calendrier, formulaire)
│   └── i18n.js             # Traductions FR/EN + switcher
├── images/                 # Photos du restaurant (PNG)
├── server/
│   ├── index.js            # API Express (bookings + WhatsApp via Evolution API)
│   ├── package.json
│   └── data/               # Réservations persistées (bookings.json)
├── Dockerfile              # Container Node.js (sert static + API)
└── docker-compose.yml      # Service standalone avec Traefik labels
```

## Deployment
- **Serveur**: `autom8-prod-1` (91.99.190.52) via Docker
- **URL**: `thermidor.alex-worksmart.com` (Cloudflare DNS proxied)
- **Reverse proxy**: Traefik v3.3 (HTTPS auto via Let's Encrypt DNS-01 Cloudflare)
- **Réseau Docker**: `web` (externe, partagé avec le stack principal)
- **Env vars**: depuis `/srv/stack/.env` (EVO_DOMAIN, EVO_API_KEY)

### Deploy commands
```bash
cd /srv/stack/thermidor
git pull
docker compose --env-file /srv/stack/.env up -d --build
```

### View logs
```bash
docker logs thermidor --tail 100
```

## WhatsApp Integration
- **Evolution API** instance: `Alex`
- **Numéro patron**: `33671331193` (06 71 33 11 93)
- À chaque réservation: message WhatsApp formaté avec date, créneau, convives, contact
- Le patron rappelle le client pour confirmer

## Design System
- **Palette**: Gold (#C5A255), Teal (#1B6B5A), Cream (#FAF6F0), Noir (#1A1A1A)
- **Typo**: Cormorant Garamond (titres), Jost (corps), Playfair Display
- **Style**: Luxe/élégant, parisien historique

## Key Details
- Horaires: 10h-23h en continu, 7j/7
- Réceptions: groupes de 8 à 20 convives, privatisation complète
- Menu par défaut affiché sur catégorie "Formule" (Formule Thermidor 20,90€)
- Fiche Google: https://share.google/4ybhb2Iohi5RaU6Od
- Lien avis: https://g.page/r/CS7BfjIA7jtLEBM/review
