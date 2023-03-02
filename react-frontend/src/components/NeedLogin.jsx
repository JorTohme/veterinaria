import { Link } from 'react-router-dom'

export default function NeedLogin () {
  return (
    <div className='Login w-screen h-screen flex items-center justify-center'>
      <div className='p-3 w-3/12 min-w-fit min-h-fit bg-white rounded-xl flex flex-col justify-center
      shadow-lg shadow-slate-800
      lg:h-3/6'
      >
        <div>
          <h1 className='text-center font-bold text-4xl'>VETERINARIA</h1>
          <div className='text-center underline'>
            <Link to='/'> Iniciar sesión </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
