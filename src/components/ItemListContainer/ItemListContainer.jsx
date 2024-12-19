import { useState, useEffect } from "react"
import { getProducts } from "../../../data/data"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])

  const {idCategory} = useParams()

  useEffect(() => {
    getProducts()
    .then((data) => {

      if(idCategory){
        const productsFiltered = data.filter((product) => product.category === idCategory)
        setProducts(productsFiltered)
      }else{
        setProducts(data)
      }
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      console.log("Terminó la promesa")
    })
  }, [idCategory])

  return (

    <div className="itemlistcontainer">
        <h1>{greeting}</h1>
        <ItemList products = {products}/>
    </div>
  )
}

export default ItemListContainer

//<ItemList products = {products} />