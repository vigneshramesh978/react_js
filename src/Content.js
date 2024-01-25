import React from "react";

import { List } from "./List";
export const Content = ({items,itemCheck,itemDelete}) => {


  return (


<main>
  {(items.length)?(
<List
  items = {items}
  itemCheck = {itemCheck}
  itemDelete = {itemDelete}
/>

  ) : ( <p>you have no list</p>)}

 

</main>
   


  )
}
