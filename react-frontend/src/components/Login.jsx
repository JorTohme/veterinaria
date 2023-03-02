import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login ({ setToggleLoginScreen, user, setUser }) {
  // Variable de estado para mostrar errores al usuario y un redireccionador
  const [error, setError] = useState()
  const navigate = useNavigate()

  // Manejador de inicio de sesión
  const handleLogin = (e) => {
    e.preventDefault()

    const name = e.target[0].value
    const password = e.target[1].value
    const isSeller = e.target[2].checked

    if (isSeller) {
      // Si se sellecionó vendedor, se hace una peitición al endpoint de los sellers
      fetch('https://localhost:7172/Login/Seller', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          password
        })
      })
        .then(res => {
          if (res.status === 200) {
            // Iniciar sesión
            setUser({ name })
            // Redirecciona a la página de vendedor
            navigate('/seller')
          } else {
            // Error
            setError('Nombre de usuario o contraseña incorrectos. Asegurese de que es un vendedor')
          }
        })
      return
    }

    // Si no se seleccionó vendedor, se hace una petición al endpoint de los usuarios
    fetch('https://localhost:7172/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        password
      })
    })
      .then(res => {
        if (res.status === 200) {
          // Iniciar sesión
          setUser({ name })

          // Redirecciona a la página de mascotas
          navigate('/home')
        } else {
          // Error
          setError('Nombre de usuario o contraseña incorrectos')
        }
      })
      .catch(error => {
        console.log(error)
        setError('Error al conectarse con el servidor')
      })
  }

  return (
    <>
      <div>
        <h1 className='text-center font-bold text-4xl'>VETERINARIA</h1>
        <h2 className='text-center'> Iniciar sesión </h2>
      </div>

      <div className='flex justify-center'>
        <form
          onSubmit={handleLogin}
          className='w-9/12'
        >
          <div className='flex flex-col'>
            <label htmlFor='user' className='text-sm font-semibold text-gray-500'>Nombre de usuario</label>
            <input className='p-1 border-2 border-gray-300 rounded' type='text' id='user' required />
          </div>
          <br />
          <div className='flex flex-col'>
            <label htmlFor='password' className='text-sm font-semibold text-gray-500'>Contraseña</label>
            <input className='p-1 border-2 border-gray-300 rounded' type='password' id='password' required />
          </div>
          <br />
          <div className='flex gap-2'>
            <label htmlFor='seller' className='text-sm font-semibold text-gray-500'>Soy vendedor</label>
            <input className='p-1 border-2 border-gray-300 rounded' type='checkbox' id='seller' />
          </div>
          <br />
          <div className='flex justify-end'>
            <button className='px-4 py-2 text-sm text-white font-semibold rounded bg-blue-500 hover:bg-blue-700'> Iniciar sesión </button>
          </div>
        </form>
      </div>
      {
        error && <p className='text-red-500 text-center text-sm'>{error}</p>
      }
      <div className='flex justify-end'>
        <div className='flex flex-col'>
          <p className='text-xs text-gray-500'>¿No está registrado?</p>
          <button
            onClick={() => setToggleLoginScreen(false)}
            className='text-cyan-600 font-semibold text-sm
            hover:text-cyan-500'
          > Registrarse
          </button>
        </div>
      </div>
    </>
  )
}
