'use client'
import { InteresCompuesto, AmortizacionCredito } from "@/calcular_interes";
import { BackButton } from "@/components";
import { useState } from "react";

export default function calcular_interes() {

  const [calculadora, setCalculadora] = useState('InteresCompuesto');

  return (
    <div className="min-h-screen flex justify-start items-center flex-col relative pt-10 -z-1">
      <BackButton></BackButton>
      <select name="mes" value={calculadora} onChange={(e) => setCalculadora(e.target.value)}>
        <option value="InteresCompuesto">Calculadora de interés compuesto</option>
        <option value="AmortizacionCredito">Calculadora de amortización de crédito</option>
      </select>

      {calculadora === 'InteresCompuesto' && <InteresCompuesto />}   
      {calculadora === 'AmortizacionCredito' && <AmortizacionCredito />}   
    </div>
  )
}
  