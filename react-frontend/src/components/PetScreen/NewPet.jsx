export default function NewPet ({ user, pets, setPets, error, setError }) {
  // Función para crear una mascota, maneja el evento de submit del formulario
  const createMascot = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const pet = {
      name: data.get('petname'),
      owner: user.name,
      type: data.get('type'),
      weight: data.get('weight'),
      age: parseInt(data.get('age')),
      castration: data.get('castration') === 'on'
    }
    fetch(`https://localhost:7172/User/${user.name}/pets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pet)
    })
      .catch(error => {
        setError('Error al conectarse con el servidor. Error: ' + error)
      })

    if (error) return
    setPets([...pets, pet])
  }

  return (
    <div className='md:w-1/3'>
      <h2 className='text-2xl text-center'>Mi nueva mascota 🐕</h2>
      <form onSubmit={createMascot}>
        <div className='flex flex-col gap-2'>
          <label htmlFor='name'>Nombre</label>
          <input className='p-1 border-2 border-gray-300 rounded' type='text' name='petname' id='name' required />
          <p>¿Gato o perro?</p>
          <div className='flex gap-5'>
            <div>
              <label htmlFor='cat'>😺</label>
              <input type='radio' name='type' value='Cat' required />
            </div>
            <div>
              <label htmlFor='dog'>🐶</label>
              <input type='radio' name='type' value='Dog' required />
            </div>
          </div>
          <label htmlFor='age'>Edad (años) </label>
          <input className='p-1 border-2 border-gray-300 rounded' type='number' name='age' id='age' required />
          <label htmlFor='weight'>Peso (kg) </label>
          <input className='p-1 border-2 border-gray-300 rounded' type='number' name='weight' id='weight' step='0.01' required />
          <div className='flex gap-2'>
            <label htmlFor='castration'>Está castrado</label>
            <input type='checkbox' name='castration' id='castration' />
          </div>
          <div className='flex justify-center'>
            <button className='w-20 px-2 py-1 bg-blue-300 rounded hover:bg-blue-400' type='submit'>Agregar</button>
          </div>
        </div>
        {
                error && <p className='text-red-500'>{error}</p>
              }
      </form>
    </div>
  )
}
