export default function AllUsers ({ users }) {
  return (
    <div className='md:w-1/2'>
      <h2 className='text-2xl text-center'>Todos los usuarios 👥</h2>
      <div className='p-2 max-h-80 overflow-y-scroll'>
        <div className='flex flex-col-reverse'>
          {
        users.map((user, index) => (
          <div key={index}>
            <p>Nombre: {user.name}</p>
            <p>Mascotas: {user.pets.map((pet) => {
              return pet.name + ', '
            })}
            </p>
            <br />
          </div>
        ))
        }
        </div>
      </div>
    </div>
  )
}
