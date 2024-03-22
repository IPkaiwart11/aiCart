import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Header from '../../component/header/Header'
import Categories from '../../component/categories/Categories'
import AiCartLists from '../../component/aiCartLists/AiCartLists'
import Footer from '../../component/footer/Footer'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Categories/>
      <AiCartLists/>
      <Footer/>
    </>
  )
}
