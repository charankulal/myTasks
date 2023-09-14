import React from 'react'
import Button from './Button'
import Navigation from './Navigation'

export default function Leftsection() {
  return (
    <>
    <h4 className=' text-center my-3 text-lg' style={{color:"red"}}>TO-DO LIST</h4>
<Button text="Add new task" class=" my-5 btn btn-primary col-10 "/>
<Navigation/>

    </>
  )
}
