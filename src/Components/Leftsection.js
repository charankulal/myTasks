import React from 'react'
import Button from './Button'
import Navigation from './Navigation'

export default function Leftsection() {
  return (
    <>
    <h4 className=' text-center m-3 text-lg tracking-wide hidden xl:block'>TO-DO LIST</h4>
<Button text="Add new task" class="m-2 my-5 btn btn-primary col-10 "/>
<Navigation/>

    </>
  )
}
