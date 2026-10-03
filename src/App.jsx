import { Routes, Route, useLocation } from 'react-router'
import { useEffect } from 'react'
import Home from './pages/Home'
import { Cart } from './pages/Other'
import Layout from './layout/Layout'
import { MenuPage } from './pages/Menu'
import { FoodCardDetails } from './components/food/FoodCardDetails'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import Wishlist from './components/food/Wishlist'


export default function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/:id" element={<FoodCardDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
