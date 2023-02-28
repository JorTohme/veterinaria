import { useState, useEffect } from 'react'

import Pet from '../components/Pet'
import Combo from '../components/Combo'

export default function PetScreen ({ user }) {
  // Comprueba que se haya iniciado sesión
  if (!user) {
    return (
      <div className='w-screen h-screen min-w-fit bg-blue-300 flex items-center justify-center'>
        <div className='w-8/12 p-5 h-full bg-white'>
          <h1 className='text-2xl text-center'>No tienes permiso para ver esta página</h1>
        </div>
      </div>
    )
  }

  // Handle submit
  const handleSubmit = (e) => {
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

  const [pets, setPets] = useState([])
  const [combosHistory, setCombosHistory] = useState([])
  const [error, setError] = useState('')
  const [combo, setCombo] = useState({})

  useEffect(() => {
    // Busco las mascotas del usuario
    fetch(`https://localhost:7172/User/${user.name}/pets`)
      .then(res => res.json())
      .then(data => { setPets(data) })

    // Busco los combos pedidos por el usuario
    fetch(`https://localhost:7172/User/${user.name}/Combos`)
      .then(res => res.json())
      .then(data => { setCombosHistory(data) })
  }, [])

  return (
    <div
      className='w-screen h-screen min-w-fit bg-blue-300 flex items-center justify-center'
    >
      <div className='w-8/12 p-5 h-full bg-white'>
        <h1 className='mb-10 text-2xl text-center'>¡Hola {user.name}!</h1>
        <div className='flex gap-2'>

          <div className='w-1/3'>
            <h2 className='text-2xl text-center'> Mis mascotas 🐈 </h2>
            <div
              className='p-2 h-80 max-h-80 flex gap-3 flex-wrap content-start bg-red-200 rounded-md overflow-scroll
          justify-center
          md:justify-start'
            >
              {
                pets.map((pet, index) => (
                  <Pet pet={pet} key={pet.name} setCombo={setCombo} index={index} />
                ))
              }

            </div>
          </div>

          <div className='w-1/3'>
            <h2 className='text-2xl text-center'>Mis pedidos 📦</h2>
            <div className='p-2 max-h-80 overflow-scroll'>
              <div className='flex flex-col-reverse overflow-scroll'>
                {
                combosHistory.map((combo, index) => (
                  <div key={index}>
                    <p>Combo {index + 1}</p>
                    <p>Pedido: {combo}</p>
                  </div>
                ))
              }
              </div>
            </div>
          </div>

          <div className='w-1/3'>
            <h2 className='text-2xl text-center'>Mi nueva mascota 🐕</h2>
            <form onSubmit={handleSubmit}>
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
                <input className='p-1 border-2 border-gray-300 rounded' type='number' name='weight' id='weight' required />
                <div className='flex gap-2'>
                  <label htmlFor='castration'>Está castrado</label>
                  <input type='checkbox' name='castration' id='castration' />
                </div>
                <div className='flex justify-center'>
                  <button className='w-20 p-1 bg-blue-100 rounded' type='submit'>Agregar</button>
                </div>
              </div>
              {
                error && <p className='text-red-500'>{error}</p>
              }
            </form>
          </div>

        </div>

        <div className='w-1/3'>
          <h2 className='text-2xl text-center'>Combos disponibles 🎁</h2>
          <Combo pet={pets[combo]} setCombosHistory={setCombosHistory} combosHistory={combosHistory} />
        </div>

      </div>
    </div>
  )
}
