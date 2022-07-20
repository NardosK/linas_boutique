import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import NotFound from "./component/NotFound/NotFound";
import Contact from "./component/Contact/Contact";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path="/gallery" element={<NotFound />} />
          <Route exact path="/contact" element={<NotFound />} />
          <Route exact path="/about" element={<NotFound />} />
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
