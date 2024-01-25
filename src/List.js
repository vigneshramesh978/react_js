import React from "react"
import { Line } from "./Line"


export const List = ({items,itemCheck,itemDelete}) => {
  return (
    <ul>
  {items.map((item)=>(

    <Line
    item = {item}
    key={item.id}
    itemCheck = {itemCheck}
    itemDelete = {itemDelete}
    />

  ))}
</ul>
  )
}

