import React from 'react'
import DisplayList from '../DisplayList/DisplayList'

function ListComponents({list}) {
  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)",backgroundColor:'#BBCCF7',gap:"20px",padding:"20px"}}>
        {list?.map((e,i)=>
        {
            return <DisplayList arr={e} key={i}/>
        })}
    </div>
  )
}

export default ListComponents