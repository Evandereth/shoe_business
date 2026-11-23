import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Checkout from './pages/Checkout'
import InfoPage from './pages/InfoPage'
import { CartProvider } from './context/cartContext.jsx'

function NotFound() {
  return (
    <div className="container-x py-24 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-mute">This page doesn't exist yet.</p>
    </div>
  )
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:category" element={<Shop />} />
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/size-guide" element={<InfoPage page="size-guide" />} />
            <Route path="/delivery" element={<InfoPage page="delivery" />} />
            <Route path="/returns" element={<InfoPage page="returns" />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}