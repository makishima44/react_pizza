import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";

import "./scss/app.scss";

const Cart = lazy(() => import(/*webpackChunkName: "Cart" */ "./pages/Cart"));
const FullPizza = lazy(() => import(/*webpackChunkName: "FullPizza" */ "./pages/FullPizza"));

function App() {
  return (
    <Suspense fallback={<div>Идет загрузка...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="pizza/:id" element={<FullPizza />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
