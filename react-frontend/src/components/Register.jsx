export default function Register ({ setIsLogin }) {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')
  // const [error, setError] = useState('')
  // const [loading, setLoading] = useState(false)

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  // }

  return (
    <>
      <div>
        <h1 className='text-center font-bold text-4xl'>VETERINARIA</h1>
        <h2 className='text-center'> Registrarse </h2>
      </div>

      <div className='flex justify-center'>
        <form className='w-9/12 '>
          <div className='flex flex-col'>
            <label className='text-sm font-semibold text-gray-500'>Correo electrónico</label>
            <input className='p-1 border-2 border-gray-300 rounded' type='email' required />
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
            <button className='p-1 text-sm font-semibold bg-blue-300 rounded'> Registrarse </button>
          </div>
        </form>
      </div>

      <div className='flex justify-end'>
        <div className='flex flex-col'>
          <p className='text-xs text-gray-500'>¿Ya tenés cuenta?</p>
          <button
            onClick={() => setIsLogin(true)}
            className='text-cyan-600 font-semibold text-sm
            hover:text-cyan-500'
          > Iniciar sesión
          </button>
        </div>
      </div>
    </>
  )
}
