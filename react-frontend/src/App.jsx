import { useState } from 'react'

import Login from './components/Login'
import Register from './components/Register'

function App () {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='p-3 pt-5 w-3/12 min-w-fit min-h-fit bg-white rounded-xl flex flex-col justify-between
      shadow-lg shadow-slate-800
      md:h-3/6'
      >
        {
          isLogin ? <Login setIsLogin={setIsLogin} /> : <Register setIsLogin={setIsLogin} />
        }
      </div>
    </div>
  )
}

export default App
