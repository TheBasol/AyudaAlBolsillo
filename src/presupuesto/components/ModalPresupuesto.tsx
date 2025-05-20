'use client'

import { useEffect, useState } from 'react'
import { meses, ppEgresos, ppIngresos } from '../utils/PresupuestoUtils'
import { DetallesPresupuesto } from '@prisma/client'

interface PresupuestoDato {
  id: string
  fecha: string
  mes: string
  tipo: string
  categoria: string
  concepto: string
  presupuesto: number
  monto: number
}

interface Props{
    textButton: string,
    id?: string,
    nombrePp?: string,
    dataPp?: DetallesPresupuesto[],
    children?: React.ReactNode,
    idTarget?: string
}

export const ModalPresupuestoForm = ({textButton,id='',dataPp,nombrePp='', children,idTarget=''}:Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [nombre, setNombre] = useState('')
  const [datos, setDatos] = useState<PresupuestoDato[]>([{
    id: '',fecha: '', mes: '', tipo: 'Ingreso', categoria: '', concepto: '', presupuesto: 0, monto: 0
  }])


  useEffect(() => {

    if (id !== '') {
      
      let Pp: any = dataPp?.map(({ fecha,presupuestoMainId ,...rest }: DetallesPresupuesto) => ({
        ...rest,
        fecha: fecha.toISOString().split("T")[0]
      }));
  
      setDatos(Pp)

      setNombre(nombrePp)
    }

    if (idTarget !== '') {
      let inputTarget = document.getElementById(idTarget)
      let containerTarget = inputTarget?.parentElement?.parentElement

      inputTarget?.focus()
      
      if (containerTarget) {
        containerTarget.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }

  }, [isOpen,idTarget])


  const handleChangeDato = (index: number, field: keyof PresupuestoDato, value: any) => {

    const nuevosDatos:any = [...datos]
    nuevosDatos[index][field] = value
    setDatos(nuevosDatos)

    if (field === 'fecha') {
      let month = value.split('-')[1]

      nuevosDatos[index]['mes'] = meses[Number(month)-1]
      setDatos(nuevosDatos)
    } 
  }

  const agregarFila = () => {
    setDatos([...datos, {
      id: '',fecha: '', mes: '', tipo: 'Ingreso', categoria: '', concepto: '', presupuesto: 0, monto: 0
    }])
  }

  const handleSubmit = async () => {

    let body = {}
    
    if (id !== '') {
      let Pp: any = Object.values(datos)?.map(({ fecha,id ,...rest }) => ({
        ...rest,
        fecha: new Date(fecha)
      }));

      body = {
        nombre,
        datosPresupuesto: Pp
      }
    } else {
      body = {
        nombre,
        datosPresupuesto: datos
      }      
    }

    console.log('body', body);

    try {
      const res = await fetch( id === '' ? '/api/presupuestos' : '/api/presupuestos/'+id , {
        method: id === '' ? 'POST': 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( body)
      })
      if (res.ok) {
        alert('Presupuesto guardado correctamente')
        setIsOpen(false)

        if (id === '') {
          setDatos([{
            id:'',fecha: '', mes: '', tipo: 'Ingreso', categoria: '', concepto: '', presupuesto: 0, monto: 0
          }])
        }

      } else {
        alert('Error al guardar')
      }
    } catch (err) {
      console.error(err)
    }
  }

//
  
  return (
    <>

      <div className='' onClick={() => setIsOpen(true)}>
        {children}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-slate-200 rounded-2xl absolute px-6 w-8/12 max-w-4xl shadow-xl overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center sticky top-0 p-3 bg-slate-200">
              <h2 className="text-xl font-semibold">{textButton}</h2>
              <button onClick={() => setIsOpen(false)}>X</button>
            </div>

            <input
              type="text"
              placeholder="Nombre del presupuesto"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              className="w-full border p-2 rounded mb-4"
            />

            <div className="space-y-4">
              {datos.map((dato, i) => (
                <div key={i} className="grid grid-cols-3 gap-2 border-b-2 pb-2 border-gray-300">

                  <div>
                    <p>Fecha</p>
                    <input type="date" value={dato.fecha} onChange={e => handleChangeDato(i, 'fecha', e.target.value)} className="border p-1 rounded" />
                  </div>

                  <div>
                    <p>Tipo</p>
                    <select value={dato.tipo} onChange={e => handleChangeDato(i, 'tipo', e.target.value)} className="border p-1 rounded">
                      <option>Ingreso</option>
                      <option>Egreso</option>
                    </select>
                  </div>
                  

                  <div>
                    <p>Categoria</p>
                    <select value={dato.categoria} onChange={e => handleChangeDato(i, 'categoria', e.target.value)} className="border p-1 rounded">
                      <option></option>
                      {
                        dato.tipo === 'Ingreso' ?
                        ppIngresos.map( (categoria,index) => (
                          <option key={index + dato.monto} >{categoria}</option>
                        ) )
                        :
                        ppEgresos.map( (categoria,index) => (
                          <option key={index + dato.monto} >{categoria}</option>
                        ) )
                      }
                    </select>                    
                  </div>

                  <div>
                    <p>Concepto del Monto</p>
                    <input id={dato.id} type="text" placeholder="Concepto" value={dato.concepto} onChange={e => handleChangeDato(i, 'concepto', e.target.value)} className="border p-1 rounded" />
                  </div>
                  
                  <div>
                    <p>Presupuesto Estimado</p>
                    <input type="number" min={0} placeholder="Presupuesto" value={dato.presupuesto} onChange={e => handleChangeDato(i, 'presupuesto', Number(e.target.value))} className="border p-1 rounded" />                    
                  </div>

                  <div>
                    <p>Monto</p>
                    <input type="number" min={0} placeholder="Monto" value={dato.monto} onChange={e => handleChangeDato(i, 'monto', Number(e.target.value))} className="border p-1 rounded" />                    
                  </div>

                </div>
              ))}
            </div>

            <div className="flex justify-between p-4 sticky bottom-0 bg-slate-200">
              <button onClick={agregarFila} className="bg-green-300 px-3 py-1 rounded">+ Agregar fila</button>
              <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded-xl">Guardar</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
