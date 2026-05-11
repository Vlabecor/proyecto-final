import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from "./components/templates/Layout"

// Lazy Loading de los componentes pesados (Páginas)
const Gallery = lazy(() => import("./components/organisms/gallery/Gallery"));
const Login = lazy(() => import("./components/organisms/login/Login"));
const Register = lazy(() => import("./components/organisms/register/Register"));
const Profile = lazy(() => import("./components/organisms/profile/Profile"));
const ProductDetail = lazy(() => import("./components/organisms/productDetail/ProductDetail"));
const Cart = lazy(() => import("./components/organisms/cart/Cart"));
const Checkout = lazy(() => import("./components/organisms/checkout/Checkout"));
const OrderSuccess = lazy(() => import("./components/organisms/checkout/OrderSuccess"));

// Fallback de carga elegante
const LoadingFallback = () => (
  <div className="flex justify-center items-center h-screen bg-bg-light">
    <div className="flex flex-col items-center gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Cargando experiencia...</p>
    </div>
  </div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/gallery" replace />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="order-success" element={<OrderSuccess />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  </StrictMode>,
);
