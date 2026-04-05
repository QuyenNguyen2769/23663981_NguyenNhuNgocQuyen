import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

import NotFound from "./components/NotFound";

import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";

import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Orders from "./components/Orders";
import Setting from "./components/Setting";

import Checkout from "./components/Checkout";
function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>|{" "}
          <Link to="/products">Products</Link>|{" "}
          <Link to="/dashboard">Dashboard</Link>

        </nav>

        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/products" element={<Products/>}/>
          <Route path="/products/:id" element={<ProductDetail/>}/>
          
          <Route path="/dashboard" element={<Dashboard/>}>
            <Route path="profile" element={<Profile/>}/>
            <Route path="orders" element={<Orders/>}/>
            <Route path="setting" element={<Setting/>}/>
          </Route>

          <Route path="/checkout" element ={<Checkout/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;