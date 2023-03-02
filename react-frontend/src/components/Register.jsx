import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register ({ setToggleLoginScreen, setUser }) {
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = e.target[0].value
    const password = e.target[1].value
    const confirmPassword = e.target[2].value
    const pets = []
    const combos = []

    // Comprueba que las contraseñas coincidan para evitar olvidar la contraseña por error de tipeo
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden')
      return
    }

    fetch('https://localhost:7172/User', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        password,
        pets,
        combos
      })
    })
      .then(res => {
        if (res) {
          setUser({ name })
          navigate('/home')
        } else {
          setError('Error al crear la cuenta')
        }
      }
      )
      .catch(error => {
        console.log(error)
        setError('Error al conectarse con el servidor')
      }, [])
  }

  return (
    <>
      <div>
        <h1 className='text-center font-bold text-4xl'>VETERINARIA</h1>
        <h2 className='text-center'> Registrarse </h2>
      </div>

      <div className='flex justify-center'>
        <form
          onSubmit={handleSubmit}
          className='w-9/12'
        >
          <div className='flex flex-col'>
            <label className='text-sm font-semibold text-gray-500'>Nombre de usuario</label>
            <input className='p-1 border-2 border-gray-300 rounded' type='text' required />
          </div>
          <br />
          <div className='flex flex-col'>
            <label className='text-sm font-semibold text-gray-500'>Contraseña</label>
            <input className='p-1 border-2 border-gray-300 rounded' type='password' required />
          </div>
          <br />
          <div className='flex flex-col'>
            <label className='text-sm font-semibold text-gray-500'>Confirmar contraseña</label>
            <input className='p-1 border-2 border-gray-300 rounded' type='password' required />
          </div>
          <br />
          <div className='flex justify-end'>
            <button className='px-4 py-2 text-sm text-white font-semibold rounded bg-blue-500 hover:bg-blue-700'> Registrarse </button>
          </div>
        </form>
      </div>

      {
        // Mostrar error si existe, si no existe no se renderiza nada
        error && (
          <div>
            <p className='text-red-500 text-center'>
              {error}
            </p>
          </div>
        )
      }

      <div className='flex justify-end'>
        <div className='flex flex-col'>
          <p className='text-xs text-gray-500'>¿Ya tenés cuenta?</p>
          <button
            onClick={() => setToggleLoginScreen(true)}
            className='text-cyan-600 font-semibold text-sm
            hover:text-cyan-500'
          > Iniciar sesión
          </button>
        </div>
      </div>
    </>
  )
}
