'use client'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h3>Courses</h3>
      <div className='flex gap-5'>
        <Link className='text-xl underline' href='/courses/cohort1'>Cohort1</Link>
        <Link className='text-xl underline' href='/courses/cohort2'>Cohort2</Link>
      </div>
    </div>
  )
}

export default page
