import React from 'react'
import Card from './Card'

const CardsComp = () => {
    let storage=['500Gb','1 Tb','5 Tb']
  return (
    <div className='grid md:grid-cols-3'>
      <Card pkg={'Single User'}price={149} storage={storage[0]} users={1} data={2}/>
      <Card pkg={'Partnership'}price={149} storage={storage[1]} users={5} data={7}/>
      <Card pkg={'Group User'}price={500} storage={storage[2]} users={10} data={10}/>
    </div>
  )
}

export default CardsComp
