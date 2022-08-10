import React from "react";
import Test from "./Test";

function Testimonial() {
  console.log(Test)
  return (
    < >
      <Test comment="it is great store" namePerson="Girma" title="Customer" />
      <Test comment="wow, you will be supersize" namePerson="Nardos" title="Customer" />
      <Test comment="customer servise is great" namePerson="Munisa" title="customer" />
    </>
  );
}

export default Testimonial;
