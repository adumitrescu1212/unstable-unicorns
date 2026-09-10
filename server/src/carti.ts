import { Carte } from './types.js';

// ============================================
// TOATE CĂRȚILE DIN JOC
// ============================================

export const TOATE_CARTILE: Carte[] = [
  // ==========================================
  // 1. PUI DE UNICORN (13 tipuri, 13 bucăți)
  // ==========================================
  { id: 'pui_narval', nume: 'Pui De Narval', categorie: 'pui_unicorn', efect: { tip: 'special' }, descriere: 'Dacă această carte este sacrificată, distrusă sau returnată în mâna jucătorului, ea se va întoarce în Pepinieră.', numarInPachet: 1, efectComplet: 'auto_return_pepiniera' },
  { id: 'pui_negru', nume: 'Pui De Unicorn (Negru)', categorie: 'pui_unicorn', efect: { tip: 'special' }, descriere: 'Dacă această carte este sacrificată, distrusă sau returnată în mâna jucătorului, ea se va întoarce în Pepinieră.', numarInPachet: 1, efectComplet: 'auto_return_pepiniera' },
  { id: 'pui_albastru', nume: 'Pui De Unicorn (Albastru)', categorie: 'pui_unicorn', efect: { tip: 'special' }, descriere: 'Dacă această carte este sacrificată, distrusă sau returnată în mâna jucătorului, ea se va întoarce în Pepinieră.', numarInPachet: 1, efectComplet: 'auto_return_pepiniera' },
  { id: 'pui_maro', nume: 'Pui De Unicorn (Maro)', categorie: 'pui_unicorn', efect: { tip: 'special' }, descriere: 'Dacă această carte este sacrificată, distrusă sau returnată în mâna jucătorului, ea se va întoarce în Pepinieră.', numarInPachet: 1, efectComplet: 'auto_return_pepiniera' },
  { id: 'pui_moarte', nume: 'Pui De Unicorn (Moarte)', categorie: 'pui_unicorn', efect: { tip: 'special' }, descriere: 'Dacă această carte este sacrificată, distrusă sau returnată în mâna jucătorului, ea se va întoarce în Pepinieră.', numarInPachet: 1, efectComplet: 'auto_return_pepiniera' },
  { id: 'pui_verde', nume: 'Pui De Unicorn (Verde)', categorie: 'pui_unicorn', efect: { tip: 'special' }, descriere: 'Dacă această carte este sacrificată, distrusă sau returnată în mâna jucătorului, ea se va întoarce în Pepinieră.', numarInPachet: 1, efectComplet: 'auto_return_pepiniera' },
  { id: 'pui_portocaliu', nume: 'Pui De Unicorn (Portocaliu)', categorie: 'pui_unicorn', efect: { tip: 'special' }, descriere: 'Dacă această carte este sacrificată, distrusă sau returnată în mâna jucătorului, ea se va întoarce în Pepinieră.', numarInPachet: 1, efectComplet: 'auto_return_pepiniera' },
  { id: 'pui_roz', nume: 'Pui De Unicorn (Roz)', categorie: 'pui_unicorn', efect: { tip: 'special' }, descriere: 'Dacă această carte este sacrificată, distrusă sau returnată în mâna jucătorului, ea se va întoarce în Pepinieră.', numarInPachet: 1, efectComplet: 'auto_return_pepiniera' },
  { id: 'pui_violet', nume: 'Pui De Unicorn (Violet)', categorie: 'pui_unicorn', efect: { tip: 'special' }, descriere: 'Dacă această carte este sacrificată, distrusă sau returnată în mâna jucătorului, ea se va întoarce în Pepinieră.', numarInPachet: 1, efectComplet: 'auto_return_pepiniera' },
  { id: 'pui_curcubeu', nume: 'Pui De Unicorn (Curcubeu)', categorie: 'pui_unicorn', efect: { tip: 'special' }, descriere: 'Dacă această carte este sacrificată, distrusă sau returnată în mâna jucătorului, ea se va întoarce în Pepinieră.', numarInPachet: 1, efectComplet: 'auto_return_pepiniera' },
  { id: 'pui_rosu', nume: 'Pui De Unicorn (Roșu)', categorie: 'pui_unicorn', efect: { tip: 'special' }, descriere: 'Dacă această carte este sacrificată, distrusă sau returnată în mâna jucătorului, ea se va întoarce în Pepinieră.', numarInPachet: 1, efectComplet: 'auto_return_pepiniera' },
  { id: 'pui_galben', nume: 'Pui De Unicorn (Galben)', categorie: 'pui_unicorn', efect: { tip: 'special' }, descriere: 'Dacă această carte este sacrificată, distrusă sau returnată în mâna jucătorului, ea se va întoarce în Pepinieră.', numarInPachet: 1, efectComplet: 'auto_return_pepiniera' },
  { id: 'pui_alb', nume: 'Pui De Unicorn (Alb)', categorie: 'pui_unicorn', efect: { tip: 'special' }, descriere: 'Dacă această carte este sacrificată, distrusă sau returnată în mâna jucătorului, ea se va întoarce în Pepinieră.', numarInPachet: 1, efectComplet: 'auto_return_pepiniera' },

  // ==========================================
  // 2. UNICORN OBIȘNUIT (8 tipuri, 22 bucăți)
  // ==========================================
  { id: 'obisnuit_albastru', nume: 'Unicorn Obișnuit (Albastru)', categorie: 'unicorn_obisnuit', efect: { tip: 'niciunul' }, descriere: 'Fără efect.', numarInPachet: 3 },
  { id: 'obisnuit_verde', nume: 'Unicorn Obișnuit (Verde)', categorie: 'unicorn_obisnuit', efect: { tip: 'niciunul' }, descriere: 'Fără efect.', numarInPachet: 3 },
  { id: 'obisnuit_indigo', nume: 'Unicorn Obișnuit (Indigo)', categorie: 'unicorn_obisnuit', efect: { tip: 'niciunul' }, descriere: 'Fără efect.', numarInPachet: 3 },
  { id: 'obisnuit_portocaliu', nume: 'Unicorn Obișnuit (Portocaliu)', categorie: 'unicorn_obisnuit', efect: { tip: 'niciunul' }, descriere: 'Fără efect.', numarInPachet: 3 },
  { id: 'obisnuit_violet', nume: 'Unicorn Obișnuit (Violet)', categorie: 'unicorn_obisnuit', efect: { tip: 'niciunul' }, descriere: 'Fără efect.', numarInPachet: 3 },
  { id: 'obisnuit_rosu', nume: 'Unicorn Obișnuit (Roșu)', categorie: 'unicorn_obisnuit', efect: { tip: 'niciunul' }, descriere: 'Fără efect.', numarInPachet: 3 },
  { id: 'obisnuit_galben', nume: 'Unicorn Obișnuit (Galben)', categorie: 'unicorn_obisnuit', efect: { tip: 'niciunul' }, descriere: 'Fără efect.', numarInPachet: 3 },
  { id: 'obisnuit_narval', nume: 'Narval Obișnuit', categorie: 'unicorn_obisnuit', efect: { tip: 'niciunul' }, descriere: 'Fără efect.', numarInPachet: 1 },

  // ==========================================
  // 3. UNICORN EPIC (30 cărți, 30 bucăți)
  // ==========================================
  { id: 'narval_sexos', nume: 'Narvalul Sexos', categorie: 'unicorn_epic', efect: { tip: 'fura' }, descriere: 'Când această carte intră în grajdul tău, poți fura o carte Amplificare.', numarInPachet: 1, efectComplet: 'fura_amplificare' },
  { id: 'unicorn_enervant', nume: 'Unicornul Enervant', categorie: 'unicorn_epic', efect: { tip: 'special' }, descriere: 'Când intră în grajd, poți forța un alt jucător să decarteze o carte. Dacă este sacrificat sau distrus, revine în mâna ta.', numarInPachet: 1, efectComplet: 'forteaza_decartare_si_return' },
  { id: 'americornul', nume: 'Americornul', categorie: 'unicorn_epic', efect: { tip: 'fura' }, descriere: 'Când intră în grajd, poți trage aleatoriu o carte din mâna altui jucător.', numarInPachet: 1, efectComplet: 'fura_aleator_din_mana' },
  { id: 'magic_inaripat', nume: 'Unicornul Magic Înaripat', categorie: 'unicorn_epic', efect: { tip: 'recupereaza' }, descriere: 'Când intră, poți lua o carte Magie din teancul de decartare. Dacă este sacrificat sau distrus, revine în mâna ta.', numarInPachet: 1, efectComplet: 'recupereaza_magie_si_return' },
  { id: 'kamikaze', nume: 'Unicornul Kamikaze', categorie: 'unicorn_epic', efect: { tip: 'special' }, descriere: 'Dacă un Unicorn din grajdul tău urmează să fie distrus, poți sacrifica acest Unicorn în locul lui.', numarInPachet: 1, efectComplet: 'inlocuieste_distrugere' },
  { id: 'drujbar', nume: 'Unicornul Drujbar', categorie: 'unicorn_epic', efect: { tip: 'distruge' }, descriere: 'Când intră, poți distruge o carte Amplificare sau sacrifica o carte Limitare.', numarInPachet: 1, efectComplet: 'distruge_amplificare_sau_limitare' },
  { id: 'narval_slefuit', nume: 'Narvalul Șlefuit', categorie: 'unicorn_epic', efect: { tip: 'special' }, descriere: 'Când intră, cauți în teanc o carte Amplificare, o iei în mână și amesteci teancul.', numarInPachet: 1, efectComplet: 'cauta_amplificare_in_teanc' },
  { id: 'ingericorn_decazut', nume: 'Îngericornul Decăzut', categorie: 'unicorn_epic', efect: { tip: 'recupereaza' }, descriere: 'Când intră, poți sacrifica un Unicorn și aduce un Unicorn din teancul de decartare în grajd.', numarInPachet: 1, efectComplet: 'sacrifica_si_readuce_unicorn' },
  { id: 'strike_destructiv', nume: 'Strike Unicornul Destructiv', categorie: 'unicorn_epic', efect: { tip: 'sacrifica' }, descriere: 'Când intră, fiecare jucător, inclusiv tu, trebuie să sacrifice un Unicorn.', numarInPachet: 1, efectComplet: 'toti_sacrifica_unicorn' },
  { id: 'ditamai', nume: 'Ditamai Unicornul', categorie: 'unicorn_epic', efect: { tip: 'special' }, descriere: 'Contează ca 2 Unicorn. Nu poți juca cărți Nihoho.', numarInPachet: 1, efectComplet: 'conteaza_dublu_blocheaza_nihoho' },
  { id: 'super_tare', nume: 'Unicornul Super-tare', categorie: 'unicorn_epic', efect: { tip: 'trage' }, descriere: 'Când intră, tragi o carte. Dacă este sacrificat sau distrus, revine în mâna ta.', numarInPachet: 1, efectComplet: 'trage_si_return', cantitate: 1 },
  { id: 'llamacornul', nume: 'Llamacornul', categorie: 'unicorn_epic', efect: { tip: 'decarteaza' }, descriere: 'Când intră, fiecare jucător, inclusiv tu, trebuie să decarteze o carte.', numarInPachet: 1, efectComplet: 'toti_decarteaza', cantitate: 1 },
  { id: 'pisicorn_magic', nume: 'Pisicornul Magic', categorie: 'unicorn_epic', efect: { tip: 'special' }, descriere: 'Nu poate fi distrus cu cărți Magie.', numarInPachet: 1, efectComplet: 'imun_la_magie' },
  { id: 'maiestatea_sa', nume: 'Maiestatea Sa C-un-corn', categorie: 'unicorn_epic', efect: { tip: 'recupereaza' }, descriere: 'Când intră, poți lua un Unicorn din teancul de decartare în mâna ta. Dacă este sacrificat sau distrus, revine în mâna ta.', numarInPachet: 1, efectComplet: 'recupereaza_unicorn_si_return' },
  { id: 'mama_gasca', nume: 'Mama Gâscă C-un-corn', categorie: 'unicorn_epic', efect: { tip: 'special' }, descriere: 'Când intră, poți lua un Pui de Unicorn din Pepinieră și să-l pui în grajd.', numarInPachet: 1, efectComplet: 'aduce_pui_din_pepiniera' },
  { id: 'sirenicornul', nume: 'Sirenicornul', categorie: 'unicorn_epic', efect: { tip: 'intoarce_in_mana' }, descriere: 'Când intră, alegi o carte din grajdul altui jucător și o întorci în mâna lui.', numarInPachet: 1, efectComplet: 'intoarce_unicorn_in_mana' },
  { id: 'narval_torpila', nume: 'Narvalul Torpilă', categorie: 'unicorn_epic', efect: { tip: 'sacrifica' }, descriere: 'Când intră, sacrifică toate cărțile Limitare din grajdul tău.', numarInPachet: 1, efectComplet: 'sacrifica_toate_limitari' },
  { id: 'necromant', nume: 'Unicornul Necromant', categorie: 'unicorn_epic', efect: { tip: 'recupereaza' }, descriere: 'Când intră, poți decarta 2 cărți Unicorn și apoi aduce un Unicorn din decartare în grajd.', numarInPachet: 1, efectComplet: 'decarteaza_2_readuce_unicorn' },
  { id: 'unicornita_diva', nume: 'Unicornița Divă', categorie: 'unicorn_epic', efect: { tip: 'special' }, descriere: 'Cărțile Unicorn Obișnuit nu pot intra în grajdul altor jucători decât al tău.', numarInPachet: 1, efectComplet: 'blocheaza_obisnuit_la_altii' },
  { id: 'curcubicornul', nume: 'Curcubicornul', categorie: 'unicorn_epic', efect: { tip: 'special' }, descriere: 'Când intră, poți pune un Unicorn Obișnuit din mâna ta direct în grajd.', numarInPachet: 1, efectComplet: 'joaca_obisnuit_din_mana' },
  { id: 'rinocornul', nume: 'Rinocornul', categorie: 'unicorn_epic', efect: { tip: 'distruge' }, descriere: 'La începutul turei, poți distruge un Unicorn. Dacă o faci, tura ta se termină imediat.', numarInPachet: 1, efectComplet: 'distruge_la_inceput_tura' },
  { id: 'unicornita_seducatoare', nume: 'Unicornița Seducătoare', categorie: 'unicorn_epic', efect: { tip: 'fura' }, descriere: 'Când intră, poți decarta o carte, apoi fura un Unicorn de la alt jucător.', numarInPachet: 1, efectComplet: 'decarteaza_si_fura_unicorn' },
  { id: 'narval_meschin', nume: 'Narvalul Meschin', categorie: 'unicorn_epic', efect: { tip: 'special' }, descriere: 'Când intră, cauți în teanc o carte Limitare, o iei în mână și amesteci teancul.', numarInPachet: 1, efectComplet: 'cauta_limitare_in_teanc' },
  { id: 'rechin_corn', nume: 'Rechinul C-un-corn', categorie: 'unicorn_epic', efect: { tip: 'distruge' }, descriere: 'Când intră, îl poți sacrifica pentru a distruge un Unicorn.', numarInPachet: 1, efectComplet: 'sacrifica_pe_sine_distruge_unicorn' },
  { id: 'cutitar', nume: 'Unicornul Cuțitar', categorie: 'unicorn_epic', efect: { tip: 'distruge' }, descriere: 'Dacă este sacrificat sau distrus, poți distruge un Unicorn.', numarInPachet: 1, efectComplet: 'la_moarte_distruge_unicorn' },
  { id: 'supersonic', nume: 'Unicornul Supersonic', categorie: 'unicorn_epic', efect: { tip: 'recupereaza' }, descriere: 'Când intră, poți lua o carte Nihoho din decartare. Dacă este sacrificat sau distrus, revine în mâna ta.', numarInPachet: 1, efectComplet: 'recupereaza_nihoho_si_return' },
  { id: 'narval_cel_mare', nume: 'Narval Cel Mare', categorie: 'unicorn_epic', efect: { tip: 'special' }, descriere: 'Când intră, cauți în teanc o carte care are „Narval” în titlu, o iei în mână și amesteci teancul.', numarInPachet: 1, efectComplet: 'cauta_narval_in_teanc' },
  { id: 'cu_stiulete', nume: 'Unicornul Cu Știulete', categorie: 'unicorn_epic', efect: { tip: 'trage' }, descriere: 'Când intră, tragi 2 cărți și decartezi una.', numarInPachet: 1, efectComplet: 'trage_2_decarteaza_1', cantitate: 2 },
  { id: 'mama_omida', nume: 'Unicornul Mama Omidă', categorie: 'unicorn_epic', efect: { tip: 'special' }, descriere: 'Când intră, te uiți la primele 3 cărți din teanc, păstrezi una și pui celelalte două înapoi în ordinea dorită.', numarInPachet: 1, efectComplet: 'priveste_3_pastreaza_1' },
  { id: 'phoenixcornul', nume: 'Phoenixcornul', categorie: 'unicorn_epic', efect: { tip: 'special' }, descriere: 'Dacă urmează să fie sacrificat sau distrus, poți decarta o carte din mână în locul lui.', numarInPachet: 1, efectComplet: 'inlocuieste_moartea_cu_decartare' },

  // ==========================================
  // 4. MAGIE (25 cărți, 25 bucăți)
  // ==========================================
  { id: 'karata_copita', nume: 'Karată Cu Copita', categorie: 'magie', efect: { tip: 'intoarce_in_mana' }, descriere: 'Returnează o carte din grajdul altui jucător în mâna lui; apoi acel jucător trebuie să decarteze o carte.', numarInPachet: 3, efectComplet: 'intoarce_si_forteaza_decartare' },
  { id: 'furt_marsav', nume: 'Furt Mârșav', categorie: 'magie', efect: { tip: 'fura' }, descriere: 'Te uiți la mâna altui jucător, alegi o carte și o iei în mâna ta.', numarInPachet: 1, efectComplet: 'fura_din_mana' },
  { id: 'loz_in_corn', nume: 'Loz În Corn', categorie: 'magie', efect: { tip: 'trage' }, descriere: 'Tragi 2, decartezi 3, apoi mai joci încă o tură.', numarInPachet: 2, efectComplet: 'trage_2_decarteaza_3_joaca_iar', cantitate: 2 },
  { id: 'tornada_sclipitoare', nume: 'Tornadă Sclipitoare', categorie: 'magie', efect: { tip: 'intoarce_in_mana' }, descriere: 'Fiecare jucător, inclusiv tu, returnează câte o carte din grajd în propria mână.', numarInPachet: 2, efectComplet: 'toti_intorc_unicorn_in_mana' },
  { id: 'bisnita_avantajoasa', nume: 'Bișniță Avantajoasă', categorie: 'magie', efect: { tip: 'trage' }, descriere: 'Tragi 3 cărți, apoi decartezi una.', numarInPachet: 1, efectComplet: 'trage_3_decarteaza_1', cantitate: 3 },
  { id: 'sarutul_vietii', nume: 'Sărutul Vieții', categorie: 'magie', efect: { tip: 'recupereaza' }, descriere: 'Aduci un Unicorn din decartare în grajdul tău.', numarInPachet: 1, efectComplet: 'readuce_unicorn_din_decartare' },
  { id: 'vartej_mistic', nume: 'Vârtej Mistic', categorie: 'magie', efect: { tip: 'amesteca' }, descriere: 'Fiecare jucător, inclusiv tu, decartează o carte; apoi decartarea se amestecă în teanc.', numarInPachet: 1, efectComplet: 'toti_decarteaza_amesteca_decartarile' },
  { id: 'reconfigurarea_tintei', nume: 'Reconfigurarea Țintei', categorie: 'magie', efect: { tip: 'special' }, descriere: 'Muți o carte Amplificare sau Limitare din grajdul unui jucător în grajdul altui jucător.', numarInPachet: 2, efectComplet: 'muta_amplificare_sau_limitare' },
  { id: 'buton_resetare', nume: 'Butonul De Resetare', categorie: 'magie', efect: { tip: 'sacrifica' }, descriere: 'Toți jucătorii sacrifică toate cărțile Amplificare și Limitare din grajd; apoi decartarea se amestecă în teanc.', numarInPachet: 1, efectComplet: 'toti_sacrifica_amplificari_limitari_amesteca' },
  { id: 'agita_bine', nume: 'Agită-l Bine', categorie: 'magie', efect: { tip: 'amesteca' }, descriere: 'Amesteci această carte, mâna ta și decartarea în teanc, apoi tragi 5 cărți.', numarInPachet: 1, efectComplet: 'amesteca_mana_si_decartare_trage_5' },
  { id: 'punct_ochit', nume: 'Punct Ochit', categorie: 'magie', efect: { tip: 'distruge' }, descriere: 'Distrugi o carte Amplificare sau sacrifici o carte Limitare.', numarInPachet: 1, efectComplet: 'distruge_amplificare_sau_sacrifica_limitare' },
  { id: 'promotie_1_2', nume: 'Promoție 1+2', categorie: 'magie', efect: { tip: 'distruge' }, descriere: 'Sacrifici o carte din grajd, apoi distrugi 2 cărți.', numarInPachet: 2, efectComplet: 'sacrifica_1_distruge_2' },
  { id: 'pact_satanicornul', nume: 'Pact Cu Satanicornul', categorie: 'magie', efect: { tip: 'schimba_mana' }, descriere: 'Faci schimb de mână cu un alt jucător.', numarInPachet: 2, efectComplet: 'schimba_mana_cu_jucator' },
  { id: 'otrava_unicornica', nume: 'Otravă Unicornică', categorie: 'magie', efect: { tip: 'distruge' }, descriere: 'Distrugi un Unicorn.', numarInPachet: 3, efectComplet: 'distruge_unicorn' },
  { id: 'troc_unicorni', nume: 'Troc Cu Unicorni', categorie: 'magie', efect: { tip: 'fura' }, descriere: 'Muți un Unicorn din grajdul tău în grajdul altui jucător, apoi furi un Unicorn din grajdul lui.', numarInPachet: 2, efectComplet: 'da_unicorn_si_fura_altul' },

  // ==========================================
  // 5. INSTANT (2 tipuri, 15 bucăți)
  // ==========================================
  { id: 'nihoho', nume: 'Nihoho', categorie: 'instant', efect: { tip: 'anuleaza' }, descriere: 'Anulează o carte pe care alt jucător încearcă să o joace și o trimite în teancul de decartare.', numarInPachet: 14, efectComplet: 'anuleaza_carte' },
  { id: 'nihoho_nemtesc', nume: 'Nihoho Nemțesc', categorie: 'instant', efect: { tip: 'anuleaza' }, descriere: 'La fel ca Nihoho, dar nu poate fi anulat de un alt Nihoho.', numarInPachet: 1, efectComplet: 'anuleaza_carte_imun' },

  // ==========================================
  // 6. AMPLIFICARE (8 cărți, 14 bucăți)
  // ==========================================
  { id: 'supradoza_cafea', nume: 'Supradoză De Cafea', categorie: 'amplificare', efect: { tip: 'special' }, descriere: 'La începutul turei, poți sacrifica o carte pentru a trage 2 cărți.', numarInPachet: 1, efectComplet: 'la_inceput_sacrifica_trage_2' },
  { id: 'rabla_unicorni', nume: '„Rabla” La Unicorni', categorie: 'amplificare', efect: { tip: 'special' }, descriere: 'La începutul turei, poți decarta o carte pentru a trage o carte.', numarInPachet: 3, efectComplet: 'la_inceput_decarteaza_trage_1' },
  { id: 'sarituri_coarda', nume: 'Săritură La Coardă Dublă', categorie: 'amplificare', efect: { tip: 'joaca_extra' }, descriere: 'Dacă se află în grajd la începutul turei, poți juca 2 cărți în faza de acțiune.', numarInPachet: 1, efectComplet: 'permite_2_carti_pe_tura' },
  { id: 'bomba_sclipici', nume: 'Bombă Cu Sclipici', categorie: 'amplificare', efect: { tip: 'special' }, descriere: 'La începutul turei, poți sacrifica o carte, apoi distruge o carte.', numarInPachet: 2, efectComplet: 'la_inceput_sacrifica_distruge' },
  { id: 'aura_unicornica', nume: 'Aură Unicornică', categorie: 'amplificare', efect: { tip: 'special' }, descriere: 'Cărțile tale Unicorn nu pot fi distruse.', numarInPachet: 1, efectComplet: 'imun_la_distrugere' },
  { id: 'lasoul_curcubeului', nume: 'Lasoul Curcubeului', categorie: 'amplificare', efect: { tip: 'fura' }, descriere: 'La începutul turei, poți decarta 3 cărți pentru a fura un Unicorn.', numarInPachet: 1, efectComplet: 'la_inceput_decarteaza_3_fura' },
  { id: 'armament_opulent', nume: 'Armament Opulent', categorie: 'amplificare', efect: { tip: 'distruge' }, descriere: 'La începutul turei, poți decarta 2 cărți pentru a distruge un Unicorn.', numarInPachet: 3, efectComplet: 'la_inceput_decarteaza_2_distruge' },
  { id: 'marfa', nume: 'Marfă!', categorie: 'amplificare', efect: { tip: 'special' }, descriere: 'Cărțile pe care le joci nu pot fi anulate cu Nihoho.', numarInPachet: 2, efectComplet: 'imun_la_nihoho' },

  // ==========================================
  // 7. LIMITARE (8 cărți, 8 bucăți)
  // ==========================================
  { id: 'sarma_ghimpata', nume: 'Sârmă Ghimpată', categorie: 'limitare', efect: { tip: 'special' }, descriere: 'De fiecare dată când un Unicorn intră sau iese din grajdul tău, trebuie să decartezi o carte.', numarInPachet: 1, efectComplet: 'decarteaza_la_intrare_iesire_unicorn' },
  { id: 'lumina_orbtoare', nume: 'Lumină Orbitoare', categorie: 'limitare', efect: { tip: 'special' }, descriere: 'Toți Unicornii tăi sunt considerați Unicorn Obișnuit fără efecte speciale.', numarInPachet: 1, efectComplet: 'anuleaza_efecte_unicorni' },
  { id: 'grajdul_lui_peste', nume: "Grajdul' Lui Pește", categorie: 'limitare', efect: { tip: 'special' }, descriere: 'Nu poți juca cărți Amplificare.', numarInPachet: 1, efectComplet: 'interzice_amplificari' },
  { id: 'camera_ascunsa', nume: 'Cameră Ascunsă', categorie: 'limitare', efect: { tip: 'special' }, descriere: 'Trebuie să ții cărțile din mână la vedere pentru toți jucătorii.', numarInPachet: 1, efectComplet: 'mana_la_vedere' },
  { id: 'vrajeala_panda', nume: 'Vrăjeală Cu Panda', categorie: 'limitare', efect: { tip: 'special' }, descriere: 'Toți Unicornii tăi sunt considerați Panda, iar cărțile care afectează Unicornii nu îi afectează.', numarInPachet: 1, efectComplet: 'transforma_in_panda' },
  { id: 'ritualuri_neortodoxe', nume: 'Ritualuri Neortodoxe', categorie: 'limitare', efect: { tip: 'sacrifica' }, descriere: 'La începutul turei trebuie să sacrifici un Unicorn, apoi tragi o carte.', numarInPachet: 1, efectComplet: 'la_inceput_sacrifica_trage' },
  { id: 'ho_niho_no', nume: 'Ho! Niho-No', categorie: 'limitare', efect: { tip: 'special' }, descriere: 'Nu poți juca nicio carte Nihoho.', numarInPachet: 1, efectComplet: 'interzice_nihoho' },
  { id: 'grajdzoniera', nume: 'Grajdzonieră', categorie: 'limitare', efect: { tip: 'special' }, descriere: 'Dacă ai mai mult de 5 Unicorn în grajd, trebuie să sacrifici un Unicorn.', numarInPachet: 1, efectComplet: 'limiteaza_la_5_unicorni' },
];

// ============================================
// FUNCȚII AJUTĂTOARE
// ============================================

// Returnează o copie a tuturor cărților (pentru a nu modifica originalul)
export function getToateCartile(): Carte[] {
  return TOATE_CARTILE.map(c => ({ ...c }));
}