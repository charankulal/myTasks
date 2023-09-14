import React from 'react'
import Button from './Button'
import Navigation from './Navigation'

export default function Leftsection() {
  return (
    <>
    <h4 className=' text-center my-3 text-lg'>TO-DO LIST</h4>
<Button text="Add new task" class=" text-center m-5 btn btn-primary "/>
<Navigation/>

    </>
  )
}
