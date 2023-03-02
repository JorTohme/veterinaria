import { useState, useEffect } from 'react'

export default function SellerScreen () {
  const [combos, setCombos] = useState([])

  // Obtener todos los combos
  useEffect(() => {
    fetch('https://localhost:7172/Combo')
      .then(res => res.json())
      .then(data => { setCombos(data) })
  }, [])

  // Función para marcar un combo como despachado
  const handleDispatch = (combo) => {
    fetch(`https://localhost:7172/User/${combo.user}/combos/${combo.orderNumber}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ dispatched: true })
    })

    setCombos(combos.map((c) => {
      if (c.user === combo.user && c.orderNumber === combo.orderNumber) {
        return { ...c, dispatched: true }
      }
      return c
    }))
  }

  return (
    <div className='md:w-1/2 border-r-2 border-gray-400 '>
      <h2 className='text-2xl text-center'>Todos los pedidos 📦</h2>
      <div className='p-2 max-h-80 overflow-y-scroll'>
        <div className='flex flex-col-reverse'>
          {
                combos.map((combo) => (
                  <div key={combo.user + ' ' + combo.orderNumber}>
                    <p>Usuario: {combo.user}</p>
                    <p>Número de orden: {combo.orderNumber}</p>
                    <p>Pedido: {combo.description}</p>
                    {
                      combo.dispatched
                        ? <p className='font-bold text-green-700'>Despachado</p>
                        : <button onClick={() => handleDispatch(combo)} className='text-blue-500 font-bold hover:text-blue-700'> Despachar </button>
                    }
                    <br />
                  </div>
                ))
                }
        </div>
      </div>
    </div>
  )
}
