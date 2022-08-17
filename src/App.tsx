import React from "react";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Header from "./components/Common/Header";
import ProductListing from "./components/PLP/ProductListing";
import Footer from "./components/Common/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/*" element={<ProductListing />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
