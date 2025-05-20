'use client'
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

export const InteresCompuesto = () => {
  const [initialDeposit, setInitialDeposit] = useState(0);
  const [interestRate, setInterestRate] = useState(7);
  const [years, setYears] = useState(10);
  const [frequency, setFrequency] = useState(1); // 1 = Anualmente
  const [additionalContributions, setAdditionalContributions] = useState(0);

  const data = [];
  let balance = initialDeposit;
  let totalAdditional = 0;
  let totalInterest = 0;

  for (let year = 1; year <= years; year++) {
    for (let i = 0; i < frequency; i++) {
      balance += additionalContributions;
      totalAdditional += additionalContributions;
      const interest = balance * (interestRate / 100 / frequency);
      balance += interest;
      totalInterest += interest;
    }
    data.push({
      name: `Año ${year}`,
      "Depósito inicial": initialDeposit,
      "Depósitos adicionales acumulados": totalAdditional,
      "Interés acumulado": parseFloat(totalInterest.toFixed(2))
    });
  }

  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: '600' }}>Calculadora de interés compuesto</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginTop: '24px' }}>
        <div style={{ flex: 1, minWidth: '280px' }}>
          <div style={{ marginBottom: '16px' }}>
            <label>Depósito inicial</label>
            <input type="number" value={initialDeposit} onChange={e => setInitialDeposit(parseFloat(e.target.value) || 0)} style={{ width: '100%' }} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label>Tasa de interés anual (%)</label>
            <input type="number" value={interestRate} onChange={e => setInterestRate(parseFloat(e.target.value) || 0)} style={{ width: '100%' }} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label>Años a invertir</label>
            <input type="number" value={years} onChange={e => setYears(parseInt(e.target.value) || 0)} style={{ width: '100%' }} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label>Frecuencia anual de interés</label>
            <select onChange={e => setFrequency(parseInt(e.target.value))} value={frequency} style={{ width: '100%' }}>
              <option value="1">Anualmente</option>
              <option value="4">Trimestralmente</option>
              <option value="12">Mensualmente</option>
            </select>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label>Aportaciones adicionales</label>
            <input type="number" value={additionalContributions} onChange={e => setAdditionalContributions(parseFloat(e.target.value) || 0)} style={{ width: '100%' }} />
          </div>
        </div>
        <div style={{ flex: 2, minWidth: '300px' }}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Depósito inicial" fill="#3b82f6" />
              <Bar dataKey="Depósitos adicionales acumulados" fill="#0ea5e9" />
              <Bar dataKey="Interés acumulado" fill="#34d399" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '24px' }}>
        <div style={{ flex: 1, minWidth: '150px', padding: '16px', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center' }}>
          <p><strong>Depósito inicial</strong></p>
          <p style={{ color: '#3b82f6', fontSize: '20px', fontWeight: 'bold' }}>${initialDeposit.toFixed(2)}</p>
        </div>
        <div style={{ flex: 1, minWidth: '150px', padding: '16px', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center' }}>
          <p><strong>Depósitos adicionales acumulados</strong></p>
          <p style={{ color: '#0ea5e9', fontSize: '20px', fontWeight: 'bold' }}>${totalAdditional.toFixed(2)}</p>
        </div>
        <div style={{ flex: 1, minWidth: '150px', padding: '16px', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center' }}>
          <p><strong>Interés acumulado</strong></p>
          <p style={{ color: '#10b981', fontSize: '20px', fontWeight: 'bold' }}>${totalInterest.toFixed(2)}</p>
        </div>
        <div style={{ flex: 1, minWidth: '150px', padding: '16px', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center' }}>
          <p><strong>Total</strong></p>
          <p style={{ color: '#047857', fontSize: '20px', fontWeight: 'bold' }}>${balance.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}