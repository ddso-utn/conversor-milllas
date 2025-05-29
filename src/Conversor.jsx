import React, { useState } from 'react';

function Conversor() {
  const [millas, setMillas] = useState('0');
  const [kilometros, setKilometros] = useState('');

  const convertir = (value) => {
    setMillas(value)
    const valorMillas = Number.parseFloat(millas);
    if (!Number.isNaN(valorMillas)) {
      const valorKilometros = valorMillas * 1.60934;
      setKilometros(valorKilometros.toFixed(2));
    } else {
      setKilometros('');
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', padding: '1rem', fontFamily: 'sans-serif' }}>
      <h2>Conversor de Millas a Kilómetros</h2>
      <div style={{ marginBottom: '1rem' }}>
        <label for="millas">Millas:</label>
        <input
          type="number"
          name="millas"
          value={millas}
          onChange={(e) => convertir(e.target.value)}
          style={{ width: '100%', padding: '0.5rem' }}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label for="kilometros">Kilómetros:</label>
        <input
          type="number"
          name="kilometros"
          value={kilometros}
          readOnly
          style={{ width: '100%', padding: '0.5rem', backgroundColor: '#f0f0f0' }}
        />
      </div>
      <button type='button' onClick={convertir} style={{ width: '100%', padding: '0.5rem' }}>
        Convertir
      </button>
    </div>
  );
}

export default Conversor;
