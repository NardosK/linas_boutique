import React from "react";
import Banner from "../Banner/Banner";
import Book from "../Book/Book";
import ContactHome from "../Contact/ContactHome";
import Content from "../Gallery/Content";
// import Testimonial from "./Testimonial";

function Home() {
  return (
    <div>
      <Banner />
      <Content />
      {/* <Testimonial /> */}
      {/* <ContactHome /> */}
      <Book />
    </div>
  );
}

export default Home;
