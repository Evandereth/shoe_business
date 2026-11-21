import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

import Home from './pages/Home'
// import Shop from './pages/Shop'
// import Product from './pages/Product'

export default function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    {/* <Route path="/shop" element={<Shop />} />
    <Route path="/shop/:category" element={<Shop />} />
    <Route path="/product/:slug" element={<Product />} /> */}
  </Route>
</Routes>
    </BrowserRouter>
  )
}