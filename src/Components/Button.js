import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button type='button' className={`btn btn-primary col-12 ${props.class}`}>{props.text}</button>
    </div>
  )
}
