import React from 'react'
import TopBar from '../components/TopBar'
import NavBar from '../components/NavBar'
import FooterG from "../components/FooterG";
import ProductsContent from '../components/ProductsContent'

const Products = () => {
  return (
    <div>
      <TopBar/>
      <NavBar/>
      <ProductsContent/>
      <FooterG/>
    </div>
  )
}

export default Products
