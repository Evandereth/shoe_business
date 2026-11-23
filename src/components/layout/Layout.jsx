import { Outlet } from 'react-router-dom'
import AnnouncementBar from './AnnouncementBar'
import Header from './Header'
import Footer from './Footer'
import CartDrawer from '../cart/CartDrawer'
import { useCart } from '../../context/useCart'

export default function Layout() {
  const { count, setOpen } = useCart()

  return (
    <>
      <AnnouncementBar />
      <Header cartCount={count} onCartClick={() => setOpen(true)} />
      <main><Outlet /></main>
      <Footer />
      <CartDrawer />
    </>
  )
}