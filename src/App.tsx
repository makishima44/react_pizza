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
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Идет загрузка корзины...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div>Идет загрузка ...</div>}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
