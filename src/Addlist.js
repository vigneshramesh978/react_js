import React, { useRef,useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';


export const Addlist = ({newItem,setNewItem,handleSubmit}) => {

  const ref = useRef()
  useEffect(()=>{
console.log("work")

  },[])
  return (
    <form className='addForm' onSubmit={handleSubmit}>
    <label htmlFor='addItem'>Add Item</label>
    <input
        autoFocus
        ref={ref}
        id='addItem'
        type='text'
        placeholder='Add Item'
        required
         value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
    />
    <button
        type='submit'
        aria-label='Add Item'
         onClick={() => ref.current.focus()}
    >
        <FaPlus />
    </button>
</form>
  )
}

