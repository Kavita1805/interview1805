import Agent from '@/components/Agent'
import React from 'react'

const page = () => {
  return (
    <>
         <h3>Interview generation</h3>
         <Agent userName='you' userId='user-1' type="generation"/>   
    </>
  )
}

export default page