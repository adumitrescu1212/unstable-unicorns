Create a README.md file in the root of the project with this exact content:

# 🦄 Unstable Unicorns — Online

O versiune online a jocului de cărți **Unstable Unicorns**, tradusă în limba română și optimizată pentru a fi jucată pe telefon. Creată pentru a juca 1-la-1 cu persoana iubită. 💕

## ✨ Ce este?

Am implementat de la zero jocul de societate Unstable Unicorns ca aplicație web multiplayer în timp real. Fiecare jucător se conectează de pe telefonul lui, iar serverul ține evidența stării jocului și validează fiecare mutare.

## 🎯 Obiectivul jocului

Fii primul care adună **7 Unicorni** în grajdul său!

## 🎮 Cum se joacă

1. Deschide link-ul jocului pe telefon.
2. Introdu numele tău și apasă "Intră în joc".
3. Al doilea jucător face același lucru — jocul pornește automat.
4. Pe rând:
   - Trage o carte din pachet.
   - Joacă o carte (Unicorn, Magie, Amplificare, Limitare) sau mai trage una.
   - Termină tura și lasă-l pe celălalt.

## 🃏 Cărți implementate

- **13** Pui de Unicorn (Baby Unicorns)
- **22** Unicorni Obișnuiți (Basic Unicorns)
- **30** Unicorni Epic (Magical Unicorns)
- **25** Cărți Magie
- **15** Cărți Instant (Nihoho)
- **14** Cărți Amplificare
- **8** Cărți Limitare

**Total: 127 de cărți** 🎉

## 🛠️ Tehnologii folosite

- **Frontend**: React + TypeScript + Vite
- **Backend**: Node.js + Express + Socket.IO
- **Comunicare**: WebSocket (timp real)
- **Limbaj**: TypeScript

## 📱 Optimizat pentru mobil

Interfața este gândită "mobile-first": butoane mari pentru degete, cărți colorate după categorie, scroll orizontal pentru mână, și layout vertical care încape pe orice ecran de telefon.

## 🚀 Rulare locală

```bash
# Server
cd server
npm install
npm run dev

# Client
cd client
npm install
npm run dev
