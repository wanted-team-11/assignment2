import Test from "./Test";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/fruitstore" />} />
          <Route path="/fruitstore/:id" element={<Test />} />
          <Route path="/fruitstore/" element={<Test />} />
          <Route path="product-detail/:id" element={<Test />} />
          <Route path="order" element={<Test />} />
          <Route path="order-list" element={<Test />} />
          <Route path="admin" element={<Test />}>
            <Route path="product-upload" element={<Test />} />
            <Route path="product-list" element={<Test />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
