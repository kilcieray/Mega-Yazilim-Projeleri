import React, { useState } from 'react';
export default function App() {
  const [temperature, setTemperature] = useState("");
  const [result, setResult] = useState("");

  const handleKelvinConversion = () => {
    let kelvin = parseFloat(temperature) + 273.15;
    setResult(`Sonuç : ${kelvin.toFixed(2)} K`);
  };

  const handleFahrenheitConversion = () => {
    let fahrenheit = (parseFloat(temperature) * 9/5) + 32;
    setResult(`Sonuç : ${fahrenheit.toFixed(2)} °F`);
  };

  return (
    <>
      <h1>Sıcaklık Dönüştürücü</h1>
      <p>Celcius :</p>
      <input type="text" placeholder='Celcius değerini giriniz' onChange={e => setTemperature(e.target.value)}/>
      <button onClick={handleKelvinConversion}>Kelvin'e Çevir</button>
      <button onClick={handleFahrenheitConversion}>Fahrenheit'e Çevir</button>
      <h4 style={{color:"green"}}>{result}</h4>
    </>
  )
}
