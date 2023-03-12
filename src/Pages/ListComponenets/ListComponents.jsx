import React from 'react'
import DisplayList from '../DisplayList/DisplayList'
import lists from './ListComponents.module.css'

function ListComponents({list}) {
  return (
    <div className={lists.container} >
        {list?.map((e,i)=>
        {
            return <DisplayList arr={e} key={i}/>
        })}
    </div>
  )
}

export default ListComponents