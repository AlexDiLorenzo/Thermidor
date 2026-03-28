// ===== INTERNATIONALIZATION =====
const translations = {
  // === NAV ===
  "nav.histoire": { fr: "Notre Histoire", en: "Our Story" },
  "nav.galerie": { fr: "Galerie", en: "Gallery" },
  "nav.carte": { fr: "La Carte", en: "Menu" },
  "nav.infos": { fr: "Infos", en: "Info" },
  "nav.receptions": { fr: "Réceptions & Groupes", en: "Events & Groups" },
  "nav.appeler": { fr: "Appeler", en: "Call us" },
  "nav.restaurant": { fr: "Le Restaurant", en: "The Restaurant" },
  "nav.lieu": { fr: "Le Lieu", en: "The Venue" },
  "nav.prestations": { fr: "Prestations", en: "Services" },
  "nav.reserver": { fr: "Réserver", en: "Book" },
  "nav.reserver-en-ligne": { fr: "Réserver en ligne", en: "Book online" },

  // === INDEX — HERO ===
  "hero.badge": { fr: "Bistrot historique — Paris 1er arrondissement", en: "Historic bistrot — Paris 1st arrondissement" },
  "hero.title": { fr: 'Le Thermidor<br><em>depuis plus de 100 ans</em>', en: 'Le Thermidor<br><em>for over 100 years</em>' },
  "hero.sub": { fr: 'Au cœur de Paris, à deux pas du Louvre, savourez une cuisine<br>française traditionnelle et généreuse dans un cadre d\'époque préservé.', en: 'In the heart of Paris, steps from the Louvre, enjoy generous<br>traditional French cuisine in a beautifully preserved historic setting.' },
  "hero.cta1": { fr: "Découvrir la carte", en: "Discover the menu" },
  "hero.cta2": { fr: "Réceptions & Groupes", en: "Events & Groups" },

  // === INDEX — HISTOIRE ===
  "histoire.label": { fr: "Notre histoire", en: "Our story" },
  "histoire.title": { fr: 'Une institution<br><em>parisienne</em>', en: 'A Parisian<br><em>institution</em>' },
  "histoire.p1": { fr: "Bienvenue au Thermidor, une institution parisienne depuis plus de 100 ans. Niché au cœur de Paris, à deux pas du Musée du Louvre, notre bistrot vous plonge dans l'ambiance authentique des halles d'autrefois.", en: "Welcome to Le Thermidor, a Parisian institution for over 100 years. Nestled in the heart of Paris, steps from the Louvre Museum, our bistrot immerses you in the authentic atmosphere of the old Halles district." },
  "histoire.p2": { fr: "Venez savourer une cuisine française traditionnelle et généreuse : l'incontournable bœuf bourguignon mijoté, nos fondues conviviales et les grands classiques de notre terroir. Que ce soit pour un déjeuner historique ou un dîner chaleureux, vivez l'expérience d'un Paris éternel dans un cadre d'époque préservé.", en: "Come and savour generous traditional French cuisine: our legendary slow-cooked bœuf bourguignon, our convivial fondues and the great classics of our terroir. Whether for a historic lunch or a warm dinner, experience an eternal Paris in a beautifully preserved period setting." },
  "histoire.h1": { fr: "Ans d'histoire", en: "Years of history" },
  "histoire.h2": { fr: "Arrondissement", en: "Arrondissement" },
  "histoire.h3": { fr: "Du Louvre à pied", en: "Walk to the Louvre" },
  "histoire.h4": { fr: "Ouvert tous les jours", en: "Open every day" },

  // === GALERIE ===
  "galerie.label": { fr: "Galerie", en: "Gallery" },
  "galerie.title": { fr: 'Un décor qui <em>raconte Paris</em>', en: 'A setting that <em>tells the story of Paris</em>' },
  "galerie.sub": { fr: "Plafonds miroirs, lustres en cristal, fresques monumentales et mosaïques au sol — chaque détail invite au voyage dans le temps.", en: "Mirrored ceilings, crystal chandeliers, monumental frescoes and mosaic floors — every detail invites you on a journey through time." },
  "galerie.g1": { fr: "Les fresques historiques", en: "Historic frescoes" },
  "galerie.g2": { fr: "L'entrée", en: "The entrance" },
  "galerie.g3": { fr: "L'ambiance", en: "The ambiance" },
  "galerie.g4": { fr: "Lustres & fresques", en: "Chandeliers & frescoes" },
  "galerie.g5": { fr: "Mosaïques & détails", en: "Mosaics & details" },

  // === CARTE / MENU ===
  "carte.label": { fr: "La Carte", en: "The Menu" },
  "carte.title": { fr: 'Les classiques du <em>terroir français</em>', en: 'Classics of the <em>French terroir</em>' },
  "carte.sub": { fr: "Une cuisine traditionnelle et généreuse. Découvrez nos spécialités, de la formule du jour aux fondues conviviales.", en: "Traditional and generous cuisine. Discover our specialities, from the daily set menu to our convivial fondues." },
  "carte.all": { fr: "Tous", en: "All" },
  "carte.formule": { fr: "Formule", en: "Set Menu" },
  "carte.entrees": { fr: "Entrées", en: "Starters" },
  "carte.plats": { fr: "Plats", en: "Mains" },
  "carte.snacking": { fr: "Snacking", en: "Snacks" },
  "carte.salades": { fr: "Salades", en: "Salads" },
  "carte.burgers": { fr: "Burgers", en: "Burgers" },
  "carte.pastas": { fr: "Pastas", en: "Pasta" },
  "carte.fondues": { fr: "Fondues", en: "Fondues" },
  "carte.desserts": { fr: "Desserts", en: "Desserts" },
  "carte.footer": { fr: "Supplément garniture (frites, ratatouille, riz, salade) : 5,90 € · La carte peut varier selon les saisons.", en: "Side supplement (fries, ratatouille, rice, salad): €5.90 · Menu may vary by season." },

  // Menu items — Formule
  "menu.formule.name": { fr: "Formule Thermidor", en: "Thermidor Set Menu" },
  "menu.formule.desc": { fr: 'Plat au choix (poulet rôti, spaghetti bolognaise ou steak-frites) + dessert au choix (panna cotta fraise, crème caramel ou crêpe nutella)<br><small style="color:var(--gold-dark)">Sauce poivre +1,50 € · +1 € après 18h · Week-end et jours fériés +1 €</small>', en: 'Choice of main (roast chicken, spaghetti bolognese or steak-frites) + choice of dessert (strawberry panna cotta, crème caramel or Nutella crêpe)<br><small style="color:var(--gold-dark)">Pepper sauce +€1.50 · +€1 after 6pm · Weekends & holidays +€1</small>' },

  // Entrées
  "menu.soupe.name": { fr: "Soupe à l'oignon gratinée", en: "French onion soup" },
  "menu.soupe.desc": { fr: "Le classique parisien, gratiné au fromage", en: "The Parisian classic, gratinated with cheese" },
  "menu.escargots.name": { fr: "Escargots x6", en: "Snails x6" },
  "menu.escargots.desc": { fr: "Beurre persillé à l'ail", en: "Garlic parsley butter" },

  // Plats
  "menu.bourguignon.name": { fr: "Bœuf Bourguignon traditionnel", en: "Traditional Bœuf Bourguignon" },
  "menu.bourguignon.desc": { fr: "Le grand classique, mijoté longuement", en: "The great classic, slow-cooked to perfection" },
  "menu.canard.name": { fr: "Confit de canard", en: "Duck confit" },
  "menu.canard.desc": { fr: "Frites, salade", en: "French fries, salad" },
  "menu.entrecote.name": { fr: "Entrecôte de bœuf 300g", en: "Rib steak 300g" },
  "menu.entrecote.desc": { fr: "Sauce au poivre, frites, salade", en: "Pepper sauce, fries, salad" },
  "menu.boucher.name": { fr: "Pièce du boucher", en: "Butcher's cut" },
  "menu.boucher.desc": { fr: "Sauce au poivre, frites, salade", en: "Pepper sauce, fries, salad" },
  "menu.poulet.name": { fr: "Poulet rôti", en: "Roast chicken" },
  "menu.poulet.desc": { fr: "Frites, salade", en: "French fries, salad" },
  "menu.saumon.name": { fr: "Pavé de saumon", en: "Salmon fillet" },
  "menu.saumon.desc": { fr: "Ratatouille, riz basmati", en: "Ratatouille, basmati rice" },
  "menu.hache.name": { fr: "Steak haché œuf à cheval", en: "Minced steak with fried egg" },
  "menu.hache.desc": { fr: "Frites, salade", en: "French fries, salad" },
  "menu.vegan.name": { fr: "Cocotte Vegan", en: "Vegan casserole" },
  "menu.vegan.desc": { fr: "Riz, courgette, ratatouille, parmesan, huile d'olive", en: "Rice, courgette, ratatouille, parmesan, olive oil" },

  // Snacking
  "menu.croque-m.name": { fr: "Croque Monsieur", en: "Croque Monsieur" },
  "menu.croque-m.desc": { fr: "Pain au levain, frites, salade", en: "Sourdough bread, fries, salad" },
  "menu.croque-mme.name": { fr: "Croque Madame", en: "Croque Madame" },
  "menu.croque-mme.desc": { fr: "Œuf, frites, salade", en: "Fried egg, fries, salad" },
  "menu.omelette.name": { fr: "Omelette Thermidor", en: "Thermidor Omelette" },
  "menu.omelette.desc": { fr: "Pommes de terre, tomate, emmental râpé", en: "Potatoes, tomato, grated emmental" },
  "menu.avocado.name": { fr: "Avocado Toast", en: "Avocado Toast" },
  "menu.avocado.desc": { fr: "Saumon fumé, œuf au plat, frites, fromage blanc, salade", en: "Smoked salmon, fried egg, fries, cream cheese, salad" },
  "menu.buns-it.name": { fr: "Bun's italien", en: "Italian Bun" },
  "menu.buns-it.desc": { fr: "Serrano, pesto, tomate, parmesan", en: "Serrano ham, pesto, tomato, parmesan" },
  "menu.buns-saum.name": { fr: "Bun's saumon fumé", en: "Smoked Salmon Bun" },
  "menu.buns-saum.desc": { fr: "Crème fromage blanc, aneth, avocat", en: "Cream cheese, dill, avocado" },

  // Salades
  "menu.poke-v.name": { fr: "Poke Bowl Vegan", en: "Vegan Poke Bowl" },
  "menu.poke-v.desc": { fr: "Riz sushi, ananas, avocat, chou rouge, carottes, sésame, sauce soja", en: "Sushi rice, pineapple, avocado, red cabbage, carrots, sesame, soy sauce" },
  "menu.poke-s.name": { fr: "Poke Bowl Saumon Fumé", en: "Smoked Salmon Poke Bowl" },
  "menu.poke-s.desc": { fr: "Riz sushi, ananas, avocat, saumon fumé, sésame", en: "Sushi rice, pineapple, avocado, smoked salmon, sesame" },
  "menu.caesar.name": { fr: "Salade Caesar", en: "Caesar Salad" },
  "menu.caesar.desc": { fr: "Salade croquante, tomate, poulet, parmesan, sauce caesar", en: "Crispy lettuce, tomato, chicken, parmesan, caesar dressing" },

  // Burgers
  "menu.cheese.name": { fr: "Cheese Burger", en: "Cheese Burger" },
  "menu.cheese.desc": { fr: "Viande hachée, salade, tomate, oignon, frites", en: "Beef patty, lettuce, tomato, onion, fries" },
  "menu.bacon.name": { fr: "Bacon Burger", en: "Bacon Burger" },
  "menu.bacon.desc": { fr: "Viande hachée, bacon, salade, tomate, oignon, frites", en: "Beef patty, bacon, lettuce, tomato, onion, fries" },
  "menu.chicken-b.name": { fr: "Chicken Burger", en: "Chicken Burger" },
  "menu.chicken-b.desc": { fr: "Poulet, salade, tomate, oignon, frites", en: "Chicken, lettuce, tomato, onion, fries" },
  "menu.veggie.name": { fr: "Veggie Burger", en: "Veggie Burger" },
  "menu.veggie.desc": { fr: "Galette végétale, salade, tomate, oignon, frites", en: "Veggie patty, lettuce, tomato, onion, fries" },

  // Pastas
  "menu.bolo.name": { fr: "Linguine à la bolognaise", en: "Linguine Bolognese" },
  "menu.bolo.desc": { fr: "Sauce bolognaise maison", en: "Homemade bolognese sauce" },
  "menu.ling-veg.name": { fr: "Linguine végétarienne", en: "Vegetarian Linguine" },
  "menu.ling-veg.desc": { fr: "Ratatouille, tomate, parmesan, pesto", en: "Ratatouille, tomato, parmesan, pesto" },
  "menu.ling-saum.name": { fr: "Linguine au saumon fumé", en: "Smoked Salmon Linguine" },
  "menu.ling-saum.desc": { fr: "Beurre blanc, parmesan", en: "White butter sauce, parmesan" },

  // Fondues
  "menu.fondue-n.name": { fr: "Fondue Nature aux 3 fromages", en: "3-Cheese Fondue" },
  "menu.fondue-n.desc": { fr: "Emmental, Comté, Beaufort — pommes de terre", en: "Emmental, Comté, Beaufort — potatoes" },
  "menu.fondue-s.name": { fr: "Fondue Savoyarde Charcuterie", en: "Savoyard Fondue with Charcuterie" },
  "menu.fondue-s.desc": { fr: "Serrano, jambon blanc, saucisson sec, saucisson fumé", en: "Serrano, ham, dry sausage, smoked sausage" },

  // Desserts
  "menu.baba.name": { fr: "Baba au rhum", en: "Rum Baba" },
  "menu.baba.desc": { fr: "Crème fouettée", en: "Whipped cream" },
  "menu.creme.name": { fr: "Crème brûlée", en: "Crème brûlée" },
  "menu.creme.desc": { fr: "À la vanille", en: "Vanilla" },
  "menu.fondant.name": { fr: "Fondant au chocolat", en: "Chocolate fondant" },
  "menu.fondant.desc": { fr: "Cœur coulant", en: "Molten centre" },
  "menu.tatin.name": { fr: "Tarte Tatin", en: "Tarte Tatin" },
  "menu.tatin.desc": { fr: "Pommes caramélisées", en: "Caramelised apples" },
  "menu.cafe-g.name": { fr: "Café « Bio » Gourmand", en: "Gourmet Organic Coffee" },
  "menu.cafe-g.desc": { fr: "Café et assortiment de mignardises", en: "Coffee with assorted petit fours" },
  "menu.tarte-j.name": { fr: "Tarte du jour", en: "Tart of the day" },
  "menu.tarte-j.desc": { fr: "Selon arrivage", en: "Seasonal" },

  // === QUOTE ===
  "quote.text": { fr: "« L'art de recevoir à la française, dans un écrin où chaque détail évoque la grandeur de Paris. »", en: "\"The art of French hospitality, in a setting where every detail evokes the grandeur of Paris.\"" },
  "quote.cite": { fr: 'Le Thermidor — Depuis le cœur du 1<sup>er</sup> arrondissement', en: 'Le Thermidor — From the heart of the 1<sup>st</sup> arrondissement' },

  // === HORAIRES ===
  "horaires.label": { fr: "Nos horaires", en: "Opening hours" },
  "horaires.title": { fr: 'Ouvert <em>tous les jours</em>', en: 'Open <em>every day</em>' },
  "horaires.card-title": { fr: "Service en continu", en: "Continuous service" },
  "horaires.days": { fr: "7 jours sur 7, du lundi au dimanche", en: "7 days a week, Monday to Sunday" },

  // === INFOS ===
  "infos.label": { fr: "Informations pratiques", en: "Practical information" },
  "infos.title": { fr: 'Nous <em>trouver</em>', en: 'Find <em>us</em>' },
  "infos.acces": { fr: "Accès & Localisation", en: "Access & Location" },
  "infos.adresse-label": { fr: "Adresse", en: "Address" },
  "infos.metro-label": { fr: "Métro", en: "Metro" },
  "infos.tel-label": { fr: "Téléphone", en: "Phone" },
  "infos.horaires-label": { fr: "Horaires", en: "Hours" },
  "infos.horaires-value": { fr: "10h — 23h, 7j/7", en: "10am — 11pm, 7/7" },
  "infos.note": { fr: "À 3 minutes à pied du Louvre, des Tuileries et du Palais Royal. Parfait pour un déjeuner entre deux visites ou un dîner dans un cadre historique.", en: "3 minutes walk from the Louvre, Tuileries and Palais Royal. Perfect for lunch between visits or dinner in a historic setting." },
  "infos.google-fiche": { fr: "Voir notre fiche Google", en: "See our Google listing" },
  "infos.google-avis": { fr: "Laisser un avis", en: "Leave a review" },
  "infos.receptions-title": { fr: "Réceptions & Groupes", en: "Events & Groups" },
  "infos.capacite-label": { fr: "Capacité groupe", en: "Group capacity" },
  "infos.capacite-value": { fr: "8 — 20 personnes", en: "8 — 20 guests" },
  "infos.privatisation-label": { fr: "Privatisation", en: "Privatisation" },
  "infos.privatisation-value": { fr: "Complète du créneau", en: "Full time slot" },
  "infos.events-label": { fr: "Événements", en: "Events" },
  "infos.events-value": { fr: "Groupes, séminaires, privés", en: "Groups, seminars, private" },
  "infos.receptions-note": { fr: 'Vous souhaitez organiser un événement de groupe ? <a href="receptions.html" style="color:var(--gold);font-weight:500">Consultez notre page dédiée et réservez en ligne →</a>', en: 'Want to organise a group event? <a href="receptions.html" style="color:var(--gold);font-weight:500">Visit our dedicated page and book online →</a>' },

  // === CTA ===
  "cta.label": { fr: "Réservations & Contact", en: "Reservations & Contact" },
  "cta.title": { fr: 'À votre <em>service</em>', en: 'At your <em>service</em>' },
  "cta.sub": { fr: "Pour réserver une table ou organiser un événement de groupe, contactez-nous directement.", en: "To book a table or organise a group event, contact us directly." },
  "cta.call": { fr: "Appeler le restaurant", en: "Call the restaurant" },
  "cta.group": { fr: "Réserver pour un groupe", en: "Book for a group" },

  // === FOOTER ===
  "footer.restaurant": { fr: "Restaurant", en: "Restaurant" },
  "footer.receptions": { fr: "Réceptions & Groupes", en: "Events & Groups" },
  "footer.google": { fr: "Fiche Google", en: "Google listing" },
  "footer.avis": { fr: "Donner un avis", en: "Leave a review" },

  // ======== RECEPTIONS PAGE ========
  "rec.hero.badge": { fr: "Au cœur de Paris — À deux pas du Louvre", en: "In the heart of Paris — Steps from the Louvre" },
  "rec.hero.title": { fr: 'Réceptions &<br><em>Événements de Groupe</em>', en: 'Receptions &<br><em>Group Events</em>' },
  "rec.hero.sub": { fr: "Un écrin parisien d'exception pour vos groupes touristiques,<br>séminaires et événements privés jusqu'à 20 convives.", en: "An exceptional Parisian setting for your tourist groups,<br>seminars and private events for up to 20 guests." },
  "rec.hero.cta1": { fr: "Réserver en ligne", en: "Book online" },
  "rec.hero.cta2": { fr: "Découvrir le lieu", en: "Discover the venue" },

  // Lieu
  "rec.lieu.label": { fr: "Un lieu d'exception", en: "An exceptional venue" },
  "rec.lieu.title": { fr: "L'élégance parisienne<br><em>au service de vos groupes</em>", en: "Parisian elegance<br><em>at the service of your groups</em>" },
  "rec.lieu.p1": { fr: "Niché à quelques pas du Palais du Louvre, Le Thermidor Réceptions vous ouvre les portes d'une salle intimiste au charme authentiquement parisien. Plafonds miroirs aux reflets dorés, lustres en cristal, banquettes en velours émeraude et fresques murales historiques composent un décor saisissant.", en: "Nestled steps from the Louvre Palace, Le Thermidor Réceptions opens the doors of an intimate room with authentic Parisian charm. Golden mirrored ceilings, crystal chandeliers, emerald velvet banquettes and historic wall frescoes create a striking décor." },
  "rec.lieu.p2": { fr: "Notre espace privatisable accueille vos groupes touristiques, déjeuners d'affaires, dîners de gala et événements sur mesure dans une atmosphère où l'art de vivre à la française prend tout son sens.", en: "Our private space welcomes your tourist groups, business lunches, gala dinners and bespoke events in an atmosphere where the French art de vivre comes alive." },
  "rec.lieu.h1": { fr: "Convives max.", en: "Max. guests" },
  "rec.lieu.h2": { fr: "Arrondissement", en: "Arrondissement" },
  "rec.lieu.h3": { fr: "Du Louvre à pied", en: "Walk to the Louvre" },
  "rec.lieu.h4": { fr: "Disponibilité", en: "Availability" },

  // Galerie receptions
  "rec.galerie.sub": { fr: "Plafonds miroirs, lustres en cristal, fresques monumentales et mosaïques au sol — chaque détail invite au voyage.", en: "Mirrored ceilings, crystal chandeliers, monumental frescoes and mosaic floors — every detail invites you on a journey." },
  "rec.galerie.g1": { fr: "Le salon principal", en: "The main room" },
  "rec.galerie.g2": { fr: "L'entrée", en: "The entrance" },
  "rec.galerie.g3": { fr: "Réception privée", en: "Private reception" },
  "rec.galerie.g4": { fr: "Dîner de groupe", en: "Group dinner" },
  "rec.galerie.g5": { fr: "Lustres & fresques", en: "Chandeliers & frescoes" },

  // Prestations
  "rec.presta.label": { fr: "Nos prestations", en: "Our services" },
  "rec.presta.title": { fr: 'Des formules adaptées<br><em>à chaque événement</em>', en: 'Tailored packages<br><em>for every event</em>' },
  "rec.presta.sub": { fr: "Du déjeuner de groupe rapide entre deux visites au dîner de gala, nous composons avec vous la formule idéale.", en: "From a quick group lunch between visits to a gala dinner, we work with you to create the ideal package." },
  "rec.presta.c1.title": { fr: "Groupes Touristiques", en: "Tourist Groups" },
  "rec.presta.c1.desc": { fr: "Accueil de groupes de 8 à 20 personnes, menus adaptés aux plannings serrés des tours. Service rapide et efficace sans sacrifier la qualité.", en: "Groups of 8 to 20 guests, menus adapted to tight tour schedules. Fast and efficient service without sacrificing quality." },
  "rec.presta.c2.title": { fr: "Séminaires & Corporate", en: "Seminars & Corporate" },
  "rec.presta.c2.desc": { fr: "Déjeuners et dîners d'entreprise dans un cadre inspirant. Possibilité d'aménagements spécifiques et de menus sur mesure.", en: "Business lunches and dinners in an inspiring setting. Custom arrangements and bespoke menus available." },
  "rec.presta.c3.title": { fr: "Événements Privés", en: "Private Events" },
  "rec.presta.c3.desc": { fr: "Anniversaires, fiançailles, célébrations familiales… Privatisation complète de la salle avec décoration personnalisée et menu de fête.", en: "Birthdays, engagements, family celebrations… Full venue privatisation with personalised décor and celebration menu." },

  // Reservation
  "rec.resa.label": { fr: "Réservation en ligne", en: "Online booking" },
  "rec.resa.title": { fr: 'Privatisez <em>votre créneau</em>', en: 'Book <em>your time slot</em>' },
  "rec.resa.sub": { fr: "Choisissez votre date, votre créneau et le nombre de convives. Nous confirmons votre réservation sous 24h.", en: "Choose your date, time slot and number of guests. We confirm your booking within 24h." },
  "rec.resa.step1": { fr: "Date", en: "Date" },
  "rec.resa.step2": { fr: "Créneau", en: "Slot" },
  "rec.resa.step3": { fr: "Détails", en: "Details" },
  "rec.resa.step4": { fr: "Contact", en: "Contact" },
  "rec.resa.step5": { fr: "Confirmation", en: "Confirm" },
  "rec.resa.btn-step1": { fr: "Choisir le créneau →", en: "Choose time slot →" },
  "rec.resa.slot-title": { fr: "Choisissez votre créneau", en: "Choose your time slot" },
  "rec.resa.lunch": { fr: "Déjeuner", en: "Lunch" },
  "rec.resa.dinner": { fr: "Dîner", en: "Dinner" },
  "rec.resa.btn-step2": { fr: "Nombre de convives →", en: "Number of guests →" },
  "rec.resa.details-title": { fr: "Détails de votre événement", en: "Event details" },
  "rec.resa.guests-label": { fr: "Nombre de convives", en: "Number of guests" },
  "rec.resa.guests-range": { fr: "de 8 à 20 personnes", en: "8 to 20 guests" },
  "rec.resa.arrival": { fr: "Heure d'arrivée souhaitée", en: "Preferred arrival time" },
  "rec.resa.arrival-placeholder": { fr: "Sélectionnez une heure", en: "Select a time" },
  "rec.resa.comment": { fr: "Commentaire (optionnel)", en: "Comment (optional)" },
  "rec.resa.comment-placeholder": { fr: "Précisions sur votre événement, besoins spécifiques, allergies alimentaires...", en: "Event details, special requirements, food allergies..." },
  "rec.resa.btn-step3": { fr: "Vos coordonnées →", en: "Your details →" },
  "rec.resa.contact-title": { fr: "Vos coordonnées", en: "Your details" },
  "rec.resa.prenom": { fr: "Prénom", en: "First name" },
  "rec.resa.nom": { fr: "Nom", en: "Last name" },
  "rec.resa.email": { fr: "Adresse e-mail", en: "Email address" },
  "rec.resa.telephone": { fr: "Téléphone", en: "Phone" },
  "rec.resa.societe": { fr: "Société / Agence (optionnel)", en: "Company / Agency (optional)" },
  "rec.resa.btn-step4": { fr: "Voir le récapitulatif →", en: "View summary →" },
  "rec.resa.summary-title": { fr: "Récapitulatif de votre réservation", en: "Booking summary" },
  "rec.resa.summary-sub": { fr: "Vérifiez les informations ci-dessous avant de confirmer.", en: "Please check the information below before confirming." },
  "rec.resa.btn-modify": { fr: "← Modifier", en: "← Edit" },
  "rec.resa.btn-confirm": { fr: "Confirmer la réservation", en: "Confirm booking" },
  "rec.resa.btn-back": { fr: "← Retour", en: "← Back" },
  "rec.resa.success-title": { fr: "Demande envoyée !", en: "Request sent!" },
  "rec.resa.success-text": { fr: "Votre demande a bien été transmise au patron du restaurant. Il vous rappellera très rapidement pour confirmer votre réservation. Le créneau est provisoirement bloqué en attendant sa confirmation.", en: "Your request has been sent to the restaurant owner. He will call you back very soon to confirm your booking. The time slot is provisionally held pending his confirmation." },

  // Infos receptions
  "rec.infos.label": { fr: "Informations pratiques", en: "Practical information" },
  "rec.infos.title": { fr: 'Tout ce qu\'il faut <em>savoir</em>', en: 'Everything you <em>need to know</em>' },
  "rec.infos.acces": { fr: "Accès & Localisation", en: "Access & Location" },
  "rec.infos.adresse": { fr: "Adresse", en: "Address" },
  "rec.infos.metro": { fr: "Métro", en: "Metro" },
  "rec.infos.bus": { fr: "Bus touristiques", en: "Tourist buses" },
  "rec.infos.bus-value": { fr: "Dépose à proximité possible", en: "Drop-off nearby available" },
  "rec.infos.note": { fr: "Emplacement idéal pour les groupes visitant le Louvre, les Tuileries, le Palais Royal ou l'Opéra. Parfait pour un déjeuner entre deux visites.", en: "Ideal location for groups visiting the Louvre, Tuileries, Palais Royal or Opéra. Perfect for lunch between visits." },
  "rec.infos.capacite": { fr: "Capacité & Réservation", en: "Capacity & Booking" },
  "rec.infos.cap-label": { fr: "Capacité assise", en: "Seated capacity" },
  "rec.infos.cap-value": { fr: "8 — 20 personnes", en: "8 — 20 guests" },
  "rec.infos.priv-label": { fr: "Privatisation", en: "Privatisation" },
  "rec.infos.priv-value": { fr: "Totale du créneau", en: "Full time slot" },
  "rec.infos.dispo-label": { fr: "Disponibilité", en: "Availability" },
  "rec.infos.dispo-value": { fr: "Déjeuner & Dîner, 7j/7", en: "Lunch & Dinner, 7/7" },
  "rec.infos.delai-label": { fr: "Délai de réservation", en: "Booking notice" },
  "rec.infos.delai-value": { fr: "24h minimum", en: "24h minimum" },
  "rec.infos.resa-note": { fr: "Réservation en ligne instantanée. Confirmation sous 24h. Tarifs dégressifs pour les agences avec réservations régulières.", en: "Instant online booking. Confirmation within 24h. Volume discounts for agencies with regular bookings." },

  // CTA receptions
  "rec.cta.label": { fr: "Une question ?", en: "Have a question?" },
  "rec.cta.title": { fr: 'Contactez-nous<br><em>directement</em>', en: 'Contact us<br><em>directly</em>' },
  "rec.cta.sub": { fr: "Pour toute demande spécifique ou question, n'hésitez pas à nous écrire ou nous appeler.", en: "For any specific request or question, don't hesitate to write or call us." },
  "rec.cta.email": { fr: "Nous écrire", en: "Email us" },
  "rec.cta.call": { fr: "Nous appeler", en: "Call us" },
};

// ===== LANGUAGE SWITCHER =====
let currentLang = localStorage.getItem('thermidor_lang') || 'fr';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('thermidor_lang', lang);
  applyTranslations();
  updateFlags();
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const t = translations[key];
    if (!t) return;
    const text = t[currentLang] || t.fr;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = text;
    } else if (el.tagName === 'OPTION' && el.value === '') {
      el.textContent = text;
    } else {
      el.innerHTML = text;
    }
  });
  document.documentElement.lang = currentLang;
}

function updateFlags() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  updateFlags();
});
