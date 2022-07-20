import React from "react";
import Banner from "../Banner/Banner";
import ContactHome from "../Contact/ContactHome";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <div>
      <Banner />
      <Testimonial />
      <ContactHome />
    </div>
  );
}

export default Home;
