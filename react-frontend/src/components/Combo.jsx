export default function Combo ({ pet, setCombosHistory, combosHistory }) {
  if (pet === undefined) return (<div />)

  const handleBuy = (description) => {
    const combo = {
      user: pet.owner,
      orderNumber: combosHistory.length + 1,
      description,
      dispatched: false
    }
    fetch(`https://localhost:7172/User/${pet.owner}/combos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(combo)
    })
      .then(res => res.json())

    setCombosHistory([...combosHistory, combo])
  }

  if (pet.type === 'Cat') {
    const complementosDietarios = pet.age > 5 ? 1 : 0 + pet.castration ? 1 : 0
    const description = `Alimento: ${pet.weight * 0.5} kg. Complementos dietarios: ${complementosDietarios} `
    return (
      <div className='text-center text-lg'>
        <p>Combo para {pet.name} 🐈</p>
        <p>Alimento: {pet.weight * 0.5} kg. 🍗</p>
        <p>Complementos dietarios: {complementosDietarios} 😋 </p>
        <div className='mt-5 flex justify-center'>
          <button
            onClick={() => handleBuy(description)}
            className='px-2 py-1 bg-orange-300 rounded hover:bg-orange-400'
          > Comprar
          </button>
        </div>
      </div>
    )
  } else if (pet.type === 'Dog') {
    const dietarySupplementByAge = Math.floor(pet.age / 3)
    const dietarySupplementExtra = pet.castration && pet.age > 5 ? 1 : 0
    const description = `Alimento: ${pet.weight * 0.8} kg. Complementos dietarios: ${dietarySupplementByAge + dietarySupplementExtra} `
    return (
      <div className='text-center text-lg'>
        <p>Combo para {pet.name} 🐕</p>
        <p>Alimento: {pet.weight * 0.8} kg 🍗</p>
        <p>Complementos dietarios: {dietarySupplementByAge + dietarySupplementExtra} 😋 </p>
        <div className='mt-5 flex justify-center'>
          <button
            onClick={() => handleBuy(description)}
            className='px-2 py-1 bg-orange-300 rounded hover:bg-orange-400'
          > Comprar
          </button>
        </div>
      </div>
    )
  }
}

/*
Para gatos:
● Cantidad de alimento igual a 0.5 veces su peso.
● Un complemento dietario si el gato tiene más de 5 años.
● Un complemento dietario extra si el gato está castrado.

Para perros:
● Cantidad de alimento igual a 0.8 veces su peso.
● Un complemento dietario por cada 3 años edad.
● Un complemento dietario extra si el perro está castrado y tiene más de 5 años.
*/
