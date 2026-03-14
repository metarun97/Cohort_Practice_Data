'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const params = useParams();
  console.log(params.productId)
  return (
    <div>
      <h3>{params.productId}</h3>
    </div>
  )
}

export default page
