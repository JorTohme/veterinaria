export default function MyCombos ({ combosHistory }) {
  return (
    <div className='md:w-1/3'>
      <h2 className='text-2xl text-center'>Mis pedidos 📦</h2>
      <div className='p-2 max-h-80 overflow-y-scroll'>
        <div className='flex flex-col-reverse'>
          {
        combosHistory.map((combo) => (
          <div key={combo.orderNumber}>
            <p>Combo {combo.orderNumber}</p>
            <p>Pedido: {combo.description}</p>
            {
              combo.dispatched ? <p className='font-bold text-green-600'>Despachado</p> : <p className='font-bold text-orange-600'>Por despachar</p>
            }
          </div>
        ))
      }
        </div>
      </div>
    </div>
  )
}
