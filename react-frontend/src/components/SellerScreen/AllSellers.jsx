export default function AllSellers ({ sellers }) {
  return (
    <div className='md:w-1/2'>
      <h2 className='text-2xl text-center'>Vendedores 💸</h2>
      <div className='p-2 max-h-80 overflow-y-scroll'>
        <div className='flex flex-col'>
          {
            sellers.map((seller, index) => (
              <div key={index}>
                <p>Nombre: {seller.name}</p>
                <br />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
