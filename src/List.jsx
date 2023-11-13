import React from 'react'
import User from './user'
const List = ({data}) => {
  return (
    <div>
       {data.map((user)=>{
        <User key={user.id} {...user}/>
       })}
    </div>
  )
}

export default List