import React from 'react';
import display from './DisplayList.module.css'

function DisplayList({arr}) {
  return (
    <div className={display.container}>
        <div>
            <img src={arr.picture.large} alt={arr.name.first} style={{borderRadius:"100px"}}/>
        </div>
        <div>
            <div >{arr.name.title} {arr.name.first} {arr.name.last}</div>
            <div className={display.detail}>{arr.email}</div>
            <div className={display.detail}>{arr.gender}</div>
            <div className={display.detail}>{arr.phone}</div>
        </div>
    </div>
  )
}

export default DisplayList