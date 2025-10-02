import React, { useState } from 'react';
import millasAKilometros from './millasAKilometros'

function Conversor() {
  const [millas, setMillas] = useState("")
  const [kilometros, setKilometros] = useState("")

  function actualizarMillas(event) {
    setMillas(event.target.value)
  }

  function convertir() {
    setKilometros(millasAKilometros(Number(millas)))
  }

  // ¿se podría haber hecho que esto funcione sin un botón de convertir?
  // ---> spoiler: sí, se podría, el botón de convertir es sólo una excusa didáctca

  // ¿se podría setear las millas en otro lado?


  return (
    <div style={{ maxWidth: '300px', margin: 'auto', padding: '1rem', fontFamily: 'sans-serif' }}>
      <h2>Conversor de Millas a Kilómetros</h2>
      <div style={{ marginBottom: '1rem' }}>
        <label for="millas">Millas:</label>
        <input
          type="number"
          name="millas"
          placeholder='ingrese su valor'
          onChange={actualizarMillas}
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
      <button type='button'  style={{ width: '100%', padding: '0.5rem' }} onClick={convertir} >
        Convertir
      </button>
    </div>
  );
}

export default Conversor;
