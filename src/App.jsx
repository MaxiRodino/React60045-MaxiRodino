import NavbarEcommerce from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect, useState} from 'react'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalogo from './components/Catalogo';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  const [data, setData] = useState()

  useEffect(() => {
    /*
    async function getProducts(){
      const dataa = await GetCategories()
      console.log(dataa)
    }
    getProducts() */
  }, [])

  return (
    <BrowserRouter>
      <NavbarEcommerce data={data}/>
      
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}></Route>
        <Route exact path='categorie/:category' element={<ItemListContainer/>}></Route>
        <Route exact path='item/:id' element={<ItemDetailContainer />}></Route>
        
      </Routes>
    </BrowserRouter>
      )
}

export default App
