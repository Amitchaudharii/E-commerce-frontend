import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "../components/Navbar/NavBar";
import SingleProduct from "../components/SingleProduct/SingleProduct";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
