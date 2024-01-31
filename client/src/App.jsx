import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import io from "socket.io-client";
import { useState } from "react";
import ProductForm from "./components/ProductForm.jsx";
import ProductList from "./components/ProductList.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import EditOne from "./components/EditOne";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";

function App() {
  const socket = io("http://localhost:8000", { transports: ["websocket"] });
  const [update, setUpdate] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/products" />} /> */}
          <Route path="/" element={<Navbar />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/display"
            element={
              <ProductList
                update={update}
                setUpdate={setUpdate}
                socket={socket}
              />
            }
          />
          <Route path="/create/new" element={<ProductForm socket={socket} />} />
          <Route
            path="/product/:id"
            element={
              <ProductDetails
                socket={socket}
                update={update}
                setUpdate={setUpdate}
              />
            }
          />
          <Route path="/product/:id/edit" element={<EditOne />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
