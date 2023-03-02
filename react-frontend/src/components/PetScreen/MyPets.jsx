import Pet from './Pet'

export default function MyPets ({ pets, setCombo }) {
  return (
    <div className='md:w-1/3'>
      <h2 className='text-2xl text-center'> Mis mascotas 🐈 </h2>
      <div
        className='p-2 h-80 max-h-80 flex gap-3 flex-wrap content-start bg-red-200 rounded-md overflow-y-scroll
          justify-center
          md:justify-start'
      >
        {
          pets.map((pet, index) => (
            <Pet pet={pet} key={pet.name} setCombo={setCombo} index={index} />
          ))
        }
      </div>
    </div>
  )
}
