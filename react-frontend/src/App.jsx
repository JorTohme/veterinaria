import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import LoginScreen from './pages/LoginScreen'
import PetScreen from './pages/PetScreen'

function App () {
  const testUser = {
    name: 'Jorge'
  }

  const [user, setUser] = useState(testUser)

  return (
    <Routes>
      <Route path='/' element={<LoginScreen setUser={setUser} />} />
      <Route path='/pets' element={<PetScreen user={user} />} />
    </Routes>
  )
}

export default App
