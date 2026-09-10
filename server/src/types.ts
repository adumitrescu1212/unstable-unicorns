// ============================================
// TIPURILE DE DATE PENTRU UNSTABLE UNICORNS
// ============================================

// --------------------------------------------
// 1. CATEGORIILE DE CĂRȚI
// --------------------------------------------
export type CategorieCarte =
  | "pui_unicorn" // Pui de Unicorn (Baby)
  | "unicorn_obisnuit" // Unicorn Obișnuit (Basic)
  | "unicorn_epic" // Unicorn Epic (Magical)
  | "magie" // Magie
  | "amplificare" // Amplificare (Upgrade)
  | "limitare" // Limitare (Downgrade)
  | "instant"; // Instant (Nihoho etc.)

// --------------------------------------------
// 2. TIPURI DE EFECTE
// --------------------------------------------
export type TipEfect =
  | "niciunul" // Fără efect special
  | "trage" // Trage cărți
  | "decarteaza" // Aruncă cărți din mână
  | "distruge" // Distruge un Unicorn/carte
  | "sacrifica" // Sacrifică un Unicorn
  | "fura" // Fură un Unicorn
  | "intoarce_in_mana" // Trimite înapoi în mână
  | "joaca_extra" // Poți juca mai multe cărți
  | "anuleaza" // Nihoho - anulează o carte
  | "schimba_mana" // Schimbă mâna cu alt jucător
  | "amesteca" // Amestecă pachetul
  | "recupereaza" // Iei o carte din grămada de aruncate
  | "special"; // Efect complex (se tratează separat)

export interface EfectCarte {
  tip: TipEfect;
  cantitate?: number; // ex: "trage 2 cărți" -> cantitate = 2
}

// --------------------------------------------
// 3. CARTEA
// --------------------------------------------
export interface Carte {
  id: string; // identificator unic (ex: 'pui_narval')
  nume: string; // numele afișat
  categorie: CategorieCarte;
  efect: EfectCarte;
  descriere: string; // textul de pe carte, în română
  numarInPachet: number; // câte exemplare sunt în pachet
  efectComplet?: string; // textul complet al efectului pentru cărți complexe
  cantitate?: number;
}

// --------------------------------------------
// 4. JUCĂTORUL
// --------------------------------------------
export interface Jucator {
  id: string;
  nume: string;
  mana: Carte[];
  grajd: Carte[];
  amplificari: Carte[];
  limitari: Carte[];
}

// --------------------------------------------
// 5. STAREA JOCULUI
// --------------------------------------------
export interface StareJoc {
  jucatori: Jucator[];
  indexJucatorCurent: number;
  pachet: Carte[];
  gramadaAruncate: Carte[];
  pepiniera: Carte[]; // grămada de Pui de Unicorn disponibili
  numarTura: number;
}
