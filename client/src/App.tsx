import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface Carte {
  id: string;
  nume: string;
  categorie: string;
  descriere: string;
  efectComplet?: string;
}

interface Jucator {
  id: string;
  nume: string;
  mana: Carte[];
  grajd: Carte[];
  amplificari: Carte[];
  limitari: Carte[];
}

interface StareJoc {
  jucatori: Jucator[];
  indexJucatorCurent: number;
  pachet: Carte[];
  gramadaAruncate: Carte[];
  pepiniera: Carte[];
  numarTura: number;
}

export default function App() {
  const socketRef = useRef<Socket | null>(null);
  const [conectat, setConectat] = useState(false);
  const [nume, setNume] = useState('');
  const [lobby, setLobby] = useState<string[]>([]);
  const [stare, setStare] = useState<StareJoc | null>(null);
  const [idMeu, setIdMeu] = useState('');
  const [mesaj, setMesaj] = useState('');
  const [cardSelectat, setCardSelectat] = useState<string | null>(null);
  const [castigator, setCastigator] = useState<string | null>(null);

  useEffect(() => {
    const socket = io();
    socketRef.current = socket;

    socket.on('connect', () => {
      setConectat(true);
      setIdMeu(socket.id || '');
    });
    socket.on('disconnect', () => setConectat(false));
    socket.on('lobby', (numeJucatori: string[]) => setLobby(numeJucatori));
    socket.on('stare', (s: StareJoc) => setStare(s));
    socket.on('eroare', (msg: string) => { setMesaj(msg); setTimeout(() => setMesaj(''), 3000); });
    socket.on('castigator', (nume: string) => setCastigator(nume));

    return () => { socket.disconnect(); };
  }, []);

  const intraInJoc = () => {
    if (!nume.trim() || !socketRef.current) return;
    socketRef.current.emit('alatura', nume.trim());
  };

  const trage = () => {
    socketRef.current?.emit('trage');
    setCardSelectat(null);
  };

  const joaca = () => {
    if (!cardSelectat) return;
    socketRef.current?.emit('joaca', { idCarte: cardSelectat });
    setCardSelectat(null);
  };

  const terminaTura = () => {
    socketRef.current?.emit('termina_tura');
    setCardSelectat(null);
  };

  const eu = stare?.jucatori.find(j => j.id === idMeu);
  const adversar = stare?.jucatori.find(j => j.id !== idMeu);
  const eRandulMeu = stare && eu && stare.jucatori[stare.indexJucatorCurent].id === idMeu;

  return (
    <div className="app">
      <h1>🦄 Unstable Unicorns</h1>
      <p className="status">Server: {conectat ? '✅ Conectat' : '❌ Deconectat'}</p>

      {!eu && (
        <div className="lobby">
          <input
            type="text"
            placeholder="Numele tău..."
            value={nume}
            onChange={(e) => setNume(e.target.value)}
            maxLength={20}
          />
          <button onClick={intraInJoc} disabled={!nume.trim() || !conectat}>
            Intră în joc
          </button>
          {lobby.length > 0 && (
            <div className="lobby-info">
              <p>Jucători conectați: {lobby.length}/2</p>
              <ul>{lobby.map((n, i) => <li key={i}>{n}</li>)}</ul>
              {lobby.length < 2 && <p>⏳ Așteptăm al doilea jucător...</p>}
            </div>
          )}
        </div>
      )}

      {eu && stare && (
        <>
          <div className="zona-adversar">
            <strong>👤 {adversar?.nume || '?'}</strong>
            <div className="info">🃏 Mână: {adversar?.mana.length || 0} cărți</div>
            <div className="info">🦄 Grajd: {adversar?.grajd.length || 0} unicorni</div>
            <div className="mini-grajd">
              {adversar?.grajd.map((c, i) => <div key={i} className="mini-card">🦄</div>)}
            </div>
          </div>

          <div className="zona-joc">
            <div className="tura-info">
              Tura {stare.numarTura} — {eRandulMeu ? '🎯 E rândul TĂU!' : `⏳ Așteaptă (${stare.jucatori[stare.indexJucatorCurent]?.nume})`}
            </div>
            <div className="info-mica">Pachet: {stare.pachet.length} | Aruncate: {stare.gramadaAruncate.length}</div>
            {stare.gramadaAruncate.length > 0 && (
              <div className="info-mica">Ultima aruncată: {stare.gramadaAruncate[stare.gramadaAruncate.length - 1].nume}</div>
            )}
          </div>

          <div className="zona-grajd">
            <strong>🏠 Grajdul tău ({eu.grajd.length}/7)</strong>
            <div className="mini-grajd">
              {eu.grajd.map((c, i) => (
                <div key={i} className="mini-card" title={c.nume}>{c.nume.substring(0, 12)}</div>
              ))}
            </div>
            {eu.amplificari.length > 0 && (
              <div className="info-mica">⚡ Amplificări: {eu.amplificari.map(c => c.nume).join(', ')}</div>
            )}
            {eu.limitari.length > 0 && (
              <div className="info-mica">⚠️ Limitări: {eu.limitari.map(c => c.nume).join(', ')}</div>
            )}
          </div>

          <div className="zona-mana">
            <strong>✋ Mâna ta ({eu.mana.length})</strong>
            <div className="mana">
              {eu.mana.map((c) => (
                <div
                  key={c.id}
                  className={`card ${c.categorie} ${cardSelectat === c.id ? 'selected' : ''}`}
                  onClick={() => setCardSelectat(cardSelectat === c.id ? null : c.id)}
                >
                  <div className="card-nume">{c.nume}</div>
                  <div className="card-desc">{c.descriere.substring(0, 60)}{c.descriere.length > 60 ? '...' : ''}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="actiuni">
            <button onClick={trage} disabled={!eRandulMeu}>📥 Trage</button>
            <button onClick={joaca} disabled={!eRandulMeu || !cardSelectat}>▶️ Joacă</button>
            <button onClick={terminaTura} disabled={!eRandulMeu}>⏭️ Termină</button>
          </div>

          {mesaj && <div className="mesaj-eroare">{mesaj}</div>}
          {castigator && <div className="castigator">🏆 {castigator} a câștigat!</div>}
        </>
      )}
    </div>
  );
}