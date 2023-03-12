import React from 'react'

function DisplayList({arr}) {
  return (
    <div style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',padding:"10px",color:"white",background:"#684468",borderRadius:"30px"}}>
        <div>
            <img src={arr.picture.large} alt={arr.name.first} style={{borderRadius:"100px"}}/>
        </div>
        <div>
            <div>{arr.name.title} {arr.name.first} {arr.name.last}</div>
            <div>{arr.email}</div>
            <div>{arr.gender}</div>
            <div>{arr.phone}</div>
        </div>
    </div>
  )
}

export default DisplayList