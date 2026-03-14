import Image from 'next/image'
import React from 'react'
import women from '../../public/women.avif'

const page = () => {
  return (
    <div>
      <h3>Home</h3>
      <Image width={600} height={400} src={women} alt='not-found'/>
    </div>
  )
}

export default page
