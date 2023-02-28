export default function Pet ({ pet, setCombo, index }) {
  const types = {
    Cat: '😺',
    Dog: '🐶'
  }

  return (
    <>
      <button
        className='w-24 h-24 bg-white rounded-md flex flex-col items-center justify-center gap-2
      border-2 border-transparent cursor-pointer
    hover:border-blue-500'
        onClick={() => setCombo(index)}
      >
        <div className='text-5xl'>{types[pet.type]}</div>
        <p>{pet.name}</p>
      </button>
    </>

  )
}
