import Test from "./Test";
import GNB from "./components/GNB";
import Footer from "./components/Footer";

import FruitStorePage from "./pages/fruitstore";
import ProductDetailPage from "./pages/product-detail";
import OrderPage from "./pages/order";
import OrderListPage from "./pages/order-list";
import Admin from "./pages/admin";
import AdminUploadPage from "./pages/admin/product-upload";
import AdminProductListPage from "./pages/admin/product-list";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GNB />
        <Routes>
          <Route path="/" element={<Navigate to="/fruitstore" />} />
          <Route path="/fruitstore/:id" element={<FruitStorePage />} />
          <Route path="/fruitstore/" element={<FruitStorePage />} />
          <Route path="product-detail/:id" element={<ProductDetailPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="order-list" element={<OrderListPage />} />
          <Route path="admin" element={<Admin />}>
            <Route path="product-upload" element={<AdminUploadPage />} />
            <Route path="product-list" element={<AdminProductListPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
