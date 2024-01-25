import React from "react"
import { FaRegTrashCan } from "react-icons/fa6";
export const Line = ({item,itemCheck,itemDelete}) => {
  return (
    <li className="item">
    <input
     type="checkbox"
     checked={item.checked}
     onChange={()=>itemCheck(item.id)}
      />
    <label htmlFor="item"
    onClick={()=>itemCheck(item.id)}
    style={item.checked?{textDecoration: 'line-through'}:null}
    >{item.item}</label>
    <FaRegTrashCan 
    onClick={()=>itemDelete(item.id)}
    />
  </li>
  )
}

