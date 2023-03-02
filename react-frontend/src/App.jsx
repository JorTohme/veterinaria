import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import LoginScreen from './pages/LoginScreen'
import PetScreen from './pages/PetScreen'
import SellerScreen from './pages/SellerScreen'

function App () {
  const [user, setUser] = useState()
  // Hay 3 pantallas, el Login en "/", la de mascotas en "/home" y la de vendedor en "/seller"
  /*
    Es obligatorio pasar por la pantalla de Login, en esta se puede seleccionar si el usuario es Vendedor o Cliente
    (Los usuarios clientes se pueden registrar en la pantalla de Login, los vendedores solo pueden registrarse por otro vendedor)
    Si se selecciona vendedor, se redirige a la pantalla de vendedor, si se selecciona cliente, se redirige a la pantalla de cliente.

    En la pantalla vendedor se pueden ver todos los combos pedidos - y despacharlos -; se pueden ver todos los usuarios y sus mascotas;
    se pueden ver todos los users de los vendedores y registrar a otro vendedor.

    En la pantalla de cliente se pueden ver las mascotas del usuario, los combos disponibles seleccionando una mascota,
    y los combos pedidos. También se pueden registrar mascotas.
  */

  return (
    <Routes>
      <Route path='/' element={<LoginScreen setUser={setUser} user={user} />} />
      <Route path='/home' element={<PetScreen setUser={setUser} user={user} />} />
      <Route path='/seller' element={<SellerScreen setUser={setUser} user={user} />} />
      <Route path='*' element={<h1>404</h1>} />
    </Routes>
  )
}

export default App
