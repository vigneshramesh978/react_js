import React,{  useState } from "react"
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import  './App.css';
import { Addlist } from "./Addlist";
import { Search } from "./Search";


function App() {

  const [items,setItems] = useState(
    JSON.parse(localStorage.getItem("to_do_list"))

  );

  const [search,setSearch] = useState('')




  const itemCheck= (id)=>{
const listItem = items.map((item)=>item.id===id ? {...item,checked:!item.checked} : item)
setItems(listItem)
localStorage.setItem("to_do_list",JSON.stringify(listItem))
  }

  const itemDelete= (id)=>{
    const listItem = items.filter((item)=>item.id!==id)
    setItems(listItem)
    localStorage.setItem("to_do_list",JSON.stringify(listItem))
      }

      const [newItem,setNewItem] = useState('');

      const addItem = (item)=>{

        const id = items.length? items[items.length - 1].id +1 : 1

        const newItem = {id,checked:false,item}

        //const newtasks = {...items,newItem}

        items.push(newItem)
      localStorage.setItem("to_do_list",JSON.stringify(items))


      }


      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[0].value)

         
        if (!newItem) return;
        addItem(newItem);
         setNewItem('');
      }

  return (
<div className="App">
  <Header title="to_do_list"
  />
  <Addlist
  newItem={newItem}
  setNewItem={setNewItem}
  handleSubmit={handleSubmit}
  />
  <Search 
  search={search}
  setSearch={setSearch}
  />
  <Content
  items = {items.filter((item)=>((item.item).toLowerCase()).includes((search).toLowerCase()))}
  itemCheck = {itemCheck}
  itemDelete = {itemDelete}


  />
  <Footer
  length= {items.length}
  />
  
</div>
  );
}

export default App;
