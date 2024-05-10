import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Navbar from './components/navbar/Navbar'
import { Layout } from 'antd'
import ProductDetail from './pages/ProductDetail'

function routing() {
  return (
    <Layout className="layout">
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
    </BrowserRouter>
    </Layout>
    
  )
}

export default routing