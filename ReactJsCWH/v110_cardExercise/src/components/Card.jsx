import React from 'react'

const Card = ({ Data }) => {

 return (
  <div className='card-sec'>
   <span>{Data?.id}</span>
   <h1>{Data.title}</h1>
  </div>
 )
}

export default Card
