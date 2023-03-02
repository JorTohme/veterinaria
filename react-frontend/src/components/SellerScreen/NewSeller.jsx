export default function NewSeller ({ sellers, setSellers }) {
  // Función para registrar un nuevo vendedor
  const registerSeller = (e) => {
    e.preventDefault()

    const seller = {
      name: e.target[0].value,
      password: e.target[1].value
    }

    fetch('https://localhost:7172/Seller/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(seller)
    })

    setSellers([...sellers, seller])
  }

  return (
    <div className='md:w-1/2'>
      <h2 className='text-2xl text-center'> Registrar otro vendedor 🤳🏻</h2>
      <form
        onSubmit={registerSeller}
        className='flex flex-col gap-2'
      >
        <input className='p-1 border-2 border-gray-300 rounded' type='text' placeholder='Nombre' />
        <input className='p-1 border-2 border-gray-300 rounded' type='password' placeholder='Contraseña' />
        <button type='submit' className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700'>Registrar</button>
      </form>
    </div>
  )
}
