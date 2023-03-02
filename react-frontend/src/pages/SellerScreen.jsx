import { useState, useEffect } from 'react'

import NeedLogin from '../components/NeedLogin'
import AllCombos from '../components/SellerScreen/AllCombos'
import AllUsers from '../components/SellerScreen/AllUsers'
import AllSellers from '../components/SellerScreen/AllSellers'
import NewSeller from '../components/SellerScreen/NewSeller'

export default function SellerScreen ({ user }) {
  // Si no hay un usuario logeado, se muestra el componente NeedLogin
  if (!user) { return (<NeedLogin />) }

  const [users, setUsers] = useState([])
  const [sellers, setSellers] = useState([])

  useEffect(() => {
    // Obtener todos los usuarios
    fetch('https://localhost:7172/User')
      .then(res => res.json())
      .then(data => { setUsers(data) })

    // Obtener todos los vendedores
    fetch('https://localhost:7172/Seller')
      .then(res => res.json())
      .then(data => { setSellers(data) })
  }, [])

  return (
    <div className='w-screen min-h-screen min-w-fit bg-blue-300 flex items-center justify-center'>
      <div className='w-8/12 p-5 h-full bg-white'>
        <h1 className='mb-10 text-2xl text-center'>Panel de vendedores</h1>
        <div className='flex flex-col gap-10'>

          <div className='flex gap-10 flex-col md:flex-row md:gap-2'>
            {/* Muestra todos los combos y permite despacharlos */}
            <AllCombos />
            {/* Muestra todos los usuarios */}
            <AllUsers users={users} />
          </div>

          <div className='flex gap-10 flex-col md:flex-row md:gap-2'>
            {/* Muestra todos los vendedores */}
            <AllSellers sellers={sellers} />
            {/* Permite registrar un nuevo vendedor */}
            <NewSeller sellers={sellers} setSellers={setSellers} />
          </div>

        </div>
      </div>
    </div>
  )
}
