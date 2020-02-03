import React from 'react'
import {Redirect} from "react-router-dom"

import '../stylesheets/Main.scss'

export default function Main(props) {

  if(props.redirect) {
    let redirect = props.redirect
    props.setRedirect(null)
    return <Redirect to={redirect} />
  }

  return (
    <main>
      <div className='options' >
        <div onClick={() => props.redirectFunc('/')} ></div>
        <div onClick={() => props.redirectFunc('/')} ></div>
        <div onClick={() => props.redirectFunc('/')} ></div>
        <div onClick={() => props.redirectFunc('/')} ></div>
      </div>
      {props.children}
    </main>
  )
}
