import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import EditProduct from "./Components/EditProduct";
import AddProduct from "./Components/AddProduct";

const App = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default App;