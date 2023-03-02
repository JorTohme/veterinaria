import { useState, useEffect } from 'react'

import NeedLogin from '../components/NeedLogin'

import Combo from '../components/Combo'

import MyPets from '../components/PetScreen/MyPets'
import MyCombos from '../components/PetScreen/MyCombos'
import NewPet from '../components/PetScreen/NewPet'

export default function PetScreen ({ user }) {
  // Comprueba que se haya iniciado sesión
  if (!user) { return (<NeedLogin />) }

  const [pets, setPets] = useState([])
  const [combosHistory, setCombosHistory] = useState([])
  const [error, setError] = useState('')
  const [combo, setCombo] = useState({})

  // Al cargar la página, busco las mascotas y el historial de combos del usuario
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
      className='w-screen min-w-fit min-h-screen h-fit bg-blue-300 flex items-center justify-center'
    >
      <div className='w-8/12 p-5 h-full bg-white'>
        <h1 className='mb-10 text-2xl text-center'>¡Hola {user.name}!</h1>

        <div className='flex gap-10 flex-col md:flex-row  md:gap-2'>

          <MyPets pets={pets} setCombo={setCombo} />

          <MyCombos combosHistory={combosHistory} />

          <NewPet user={user} pets={pets} setPets={setPets} error={error} setError={setError} />

        </div>

        <div className='md:w-1/3 h-56'>
          <h2 className='text-2xl text-center'>Combos disponibles 🎁</h2>
          <Combo pet={pets[combo]} setCombosHistory={setCombosHistory} combosHistory={combosHistory} />
        </div>

      </div>
    </div>
  )
}
