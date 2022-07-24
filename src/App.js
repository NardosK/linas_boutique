import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import NotFound from "./component/NotFound/NotFound";
import Contact from "./component/Contact/Contact";
import Gallery from "./component/Gallery/Gallery";
import About from "./component/About/About";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
