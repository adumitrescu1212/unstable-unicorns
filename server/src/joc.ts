import { Carte, Jucator, StareJoc } from "./types.js";
import { TOATE_CARTILE } from "./carti.js";

// ============================================
// MOTORUL JOCULUI
// ============================================
// Aici sunt toate funcțiile care fac lucrurile
// să se întâmple: amestecat, împărțit, tras,
// jucat, verificat câștigător.

// --------------------------------------------
// 1. CREAREA PACHETULUI
// --------------------------------------------
// Luăm toate cărțile din TOATE_CARTILE și le
// multiplicăm după numarInPachet. De exemplu,
// "Unicorn Obișnuit (Albastru)" cu numarInPachet
// 3 va apărea de 3 ori în pachet.

export function creeazaPachet(): Carte[] {
  const pachet: Carte[] = [];

  for (const carte of TOATE_CARTILE) {
    for (let i = 0; i < carte.numarInPachet; i++) {
      // Facem o copie ca să nu modificăm originalul
      pachet.push({
        ...carte,
        id: `${carte.id}_${i}`, // ID unic pentru fiecare exemplar
      });
    }
  }

  return pachet;
}

// --------------------------------------------
// 2. AMESTECAREA CĂRȚILOR
// --------------------------------------------
// Algoritmul Fisher-Yates - amestecă perfect
// orice listă. Fiecare ordine e la fel de probabilă.

export function amesteca<T>(lista: T[]): T[] {
  const copie = [...lista];
  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copie[i], copie[j]] = [copie[j], copie[i]];
  }
  return copie;
}

// --------------------------------------------
// 3. ÎMPĂRȚIREA CĂRȚILOR LA ÎNCEPUT
// --------------------------------------------
// Fiecare jucător primește:
// - 5 cărți în mână
// - 1 Pui de Unicorn în grajd

export function imparteCarti(
  pachet: Carte[],
  pepiniera: Carte[],
  numarJucatori: number,
): { maini: Carte[][]; pachetRamas: Carte[]; pepinieraRamasa: Carte[] } {
  const maini: Carte[][] = [];
  const pachetRamas = [...pachet];
  const pepinieraRamasa = [...pepiniera];

  for (let i = 0; i < numarJucatori; i++) {
    const mana: Carte[] = [];
    for (let j = 0; j < 5; j++) {
      const carte = pachetRamas.pop();
      if (carte) mana.push(carte);
    }
    maini.push(mana);
  }

  return { maini, pachetRamas, pepinieraRamasa };
}

// --------------------------------------------
// 4. PORNIREA JOCULUI
// --------------------------------------------
// Creează pachetul, îl amestecă, împarte cărți,
// și pune câte un Pui de Unicorn în grajdul
// fiecărui jucător.

export function pornesteJoc(
  numeJucatori: string[],
  idJucatori: string[],
): StareJoc {
  // 1. Creează pachetul complet
  const pachetComplet = creeazaPachet();

  // 2. Separă Puii de Unicorn (pentru Pepinieră) de restul
  const puiUnicorni = pachetComplet.filter(
    (c) => c.categorie === "pui_unicorn",
  );
  const restCărți = pachetComplet.filter((c) => c.categorie !== "pui_unicorn");

  // 3. Amestecă ambele
  const pepiniera = amesteca(puiUnicorni);
  const pachetAmestecat = amesteca(restCărți);

  // 4. Împarte cărțile
  const { maini, pachetRamas } = imparteCarti(
    pachetAmestecat,
    pepiniera,
    numeJucatori.length,
  );

  // 5. Construiește jucătorii
  const jucatori: Jucator[] = numeJucatori.map((nume, index) => {
    // Scoate un Pui de Unicorn din Pepinieră pentru grajd
    const puiPentruGrajd = pepiniera.pop();

    return {
      id: idJucatori[index],
      nume,
      mana: maini[index],
      grajd: puiPentruGrajd ? [puiPentruGrajd] : [],
      amplificari: [],
      limitari: [],
    };
  });

  // 6. Returnează starea inițială a jocului
  return {
    jucatori,
    indexJucatorCurent: 0,
    pachet: pachetRamas,
    gramadaAruncate: [],
    pepiniera: pepiniera,
    numarTura: 1,
  };
}

// --------------------------------------------
// 5. TRAGEREA UNEI CĂRȚI
// --------------------------------------------
// Ia cartea de sus din pachet și o pune în
// mâna jucătorului. Returnează noua stare.

export function trageCarte(stare: StareJoc, indexJucator: number): StareJoc {
  const stareNoua = structuredClone(stare);
  const pachet = stareNoua.pachet;

  if (pachet.length === 0) {
    // Pachetul e gol - amestecăm grămada de aruncate înapoi
    return amestecaAruncateInPachet(stareNoua);
  }

  const carteTrasa = pachet.pop()!;
  stareNoua.jucatori[indexJucator].mana.push(carteTrasa);

  return stareNoua;
}

// --------------------------------------------
// 6. CÂND PACHETUL E GOL
// --------------------------------------------
// Amestecă grămada de aruncate și o pune înapoi
// în pachet.

export function amestecaAruncateInPachet(stare: StareJoc): StareJoc {
  const aruncate = stare.gramadaAruncate;
  if (aruncate.length === 0) return stare;

  stare.pachet = amesteca(aruncate);
  stare.gramadaAruncate = [];
  return stare;
}

// --------------------------------------------
// 7. JUCAREA UNEI CĂRȚI
// --------------------------------------------
// Scoate cartea din mâna jucătorului și o mută
// în zona corectă, în funcție de categorie:
// - Unicorn → grajd
// - Amplificare → amplificari
// - Limitare → limitari (ale altui jucător)
// - Magie → grămada de aruncate (efectul se aplică apoi)
// - Instant → grămada de aruncate (efectul se aplică apoi)

export function joacaCarte(
  stare: StareJoc,
  indexJucator: number,
  idCarte: string,
  indexTinta?: number, // pentru Limitare (pe ce jucător se pune)
): StareJoc {
  const stareNoua = structuredClone(stare);
  const jucator = stareNoua.jucatori[indexJucator];

  // Găsește cartea în mână
  const indexCarte = jucator.mana.findIndex((c) => c.id === idCarte);
  if (indexCarte === -1) {
    throw new Error("Cartea nu este în mâna jucătorului");
  }

  const carte = jucator.mana[indexCarte];
  jucator.mana.splice(indexCarte, 1);

  // Mută cartea în zona corectă, în funcție de categorie
  switch (carte.categorie) {
    case "pui_unicorn":
    case "unicorn_obisnuit":
    case "unicorn_epic":
      jucator.grajd.push(carte);
      break;

    case "amplificare":
      jucator.amplificari.push(carte);
      break;

    case "limitare": {
      const tinta =
        indexTinta !== undefined
          ? indexTinta
          : (indexJucator + 1) % stareNoua.jucatori.length;
      stareNoua.jucatori[tinta].limitari.push(carte);
      break;
    }

    case "magie":
    case "instant":
      stareNoua.gramadaAruncate.push(carte);
      break;
  }

  return stareNoua;
}

// --------------------------------------------
// 8. VERIFICAREA CÂȘTIGĂTORULUI
// --------------------------------------------
// Un jucător câștigă dacă are 7 Unicorni în grajd.
// (La 6-8 jucători se joacă cu 6, dar noi avem 2.)

export function verificaCastigator(stare: StareJoc): Jucator | null {
  const UNICORNI_PENTRU_CASTIG = 7;

  for (const jucator of stare.jucatori) {
    // Numără Unicornii (inclusiv Ditamai Unicornul care contează dublu)
    let numarUnicorni = 0;
    for (const carte of jucator.grajd) {
      if (carte.efectComplet === "conteaza_dublu_blocheaza_nihoho") {
        numarUnicorni += 2; // Ditamai Unicornul contează dublu
      } else {
        numarUnicorni += 1;
      }
    }

    if (numarUnicorni >= UNICORNI_PENTRU_CASTIG) {
      return jucator;
    }
  }

  return null;
}

// --------------------------------------------
// 9. TERMINAREA TUREI
// --------------------------------------------
// Trece la următorul jucător și incrementează
// numărul turei.

export function terminaTura(stare: StareJoc): StareJoc {
  const stareNoua = structuredClone(stare);
  stareNoua.indexJucatorCurent =
    (stareNoua.indexJucatorCurent + 1) % stareNoua.jucatori.length;

  // Dacă am ajuns iar la primul jucător, crește numărul turei
  if (stareNoua.indexJucatorCurent === 0) {
    stareNoua.numarTura += 1;
  }

  return stareNoua;
}

// --------------------------------------------
// 10. ARUNCAREA UNEI CĂRȚI
// --------------------------------------------
// Jucătorul alege o carte din mână și o pune la
// grămada de aruncate.

export function aruncaCarte(
  stare: StareJoc,
  indexJucator: number,
  idCarte: string,
): StareJoc {
  const stareNoua = structuredClone(stare);
  const jucator = stareNoua.jucatori[indexJucator];

  const indexCarte = jucator.mana.findIndex((c) => c.id === idCarte);
  if (indexCarte === -1) {
    throw new Error("Cartea nu este în mâna jucătorului");
  }

  const [carteAruncata] = jucator.mana.splice(indexCarte, 1);
  stareNoua.gramadaAruncate.push(carteAruncata);

  return stareNoua;
}

// --------------------------------------------
// 11. FUNCȚIE DE TEST
// --------------------------------------------
// Testează că motorul funcționează corect.
// O rulăm o singură dată ca să vedem că totul e ok.

export function testMotor(): void {
  console.log("🧪 Testăm motorul jocului...");

  const stare = pornesteJoc(["Andreea", "Iubitul"], ["id1", "id2"]);

  console.log("✅ Joc pornit!");
  console.log("   Jucători:", stare.jucatori.length);
  console.log("   Cărți în pachet:", stare.pachet.length);
  console.log("   Cărți în Pepinieră:", stare.pepiniera.length);
  console.log("   Mână Andreea:", stare.jucatori[0].mana.length, "cărți");
  console.log("   Grajd Andreea:", stare.jucatori[0].grajd.length, "carte");
  console.log("   Grajd Iubit:", stare.jucatori[1].grajd.length, "carte");
  console.log(
    "   Prima carte din mâna Andreei:",
    stare.jucatori[0].mana[0]?.nume,
  );
  console.log("   Unicorn din grajd:", stare.jucatori[0].grajd[0]?.nume);
  console.log("🎉 Motorul funcționează!");
}
