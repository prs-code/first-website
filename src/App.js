import { Route,Routes, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Aboutus from "./components/Aboutus";
import Details from "./components/Details";
import Search from "./components/Search";



function App() {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Details />} />
          <Route path="/Aboutus/*"  element={<Aboutus />}>
            <Route path="search" element={<Search />} />
          </Route>
          <Route path="/"  element={<Landing />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
  )
}

export default App;
