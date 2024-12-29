import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import { useState } from "react";

function App() 
{
  const [items, setItemToList] = useState([]);

  const handleAddShoppingItem = (newShopList) => {
      setItemToList((items) => [...items, newShopList])
  };  
  const handleDltShoppingItem = (id) => {
      setItemToList((items) => items.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <Main items = {items} handleAddShoppingItem = {handleAddShoppingItem} handleDltShoppingItem = {handleDltShoppingItem}/>
      <Footer />
    </>
  )
}

export default App
