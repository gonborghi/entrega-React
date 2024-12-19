import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  return (

    <div>
      <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path="/" element = {<ItemListContainer greeting={"Bienvenidos a CASLA Shop"}/> } />
        <Route path="/category/:idCategory" element={<ItemListContainer greeting={"Bienvenidos a CASLA Shop"}/> }/>
        <Route path="/detail/:idProduct" element = {<ItemDetailContainer/>}/>
      </Routes>

     
      </BrowserRouter>

    </div>

  )
}

export default App
