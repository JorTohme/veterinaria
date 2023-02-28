import { useState } from 'react'

import Login from '../components/Login'
import Register from '../components/Register'

export default function LoginScreen () {
  const [toggleLoginScreen, setToggleLoginScreen] = useState(true)

  return (
    <div className='Login w-screen h-screen flex items-center justify-center'>
      <div className='p-3 w-3/12 min-w-fit min-h-fit bg-white rounded-xl flex flex-col justify-between
      shadow-lg shadow-slate-800
      lg:h-3/6'
      >
        {
          toggleLoginScreen ? <Login setToggleLoginScreen={setToggleLoginScreen} /> : <Register setToggleLoginScreen={setToggleLoginScreen} />
        }
      </div>
    </div>
  )
}
