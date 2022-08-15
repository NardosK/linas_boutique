import React from "react";
import Test from "./Test";

function Testimonial() {
  return (
    <section className="text-gray-600 w-full body-font">
      <div className="container px-5 py-5 mb-8 mx-auto">
        <div className="flex flex-wrap mx-auto w-full -m-4">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <Test
              comment="It is a great store!"
              namePerson="Customer 1"
              title="CEO"
            />
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <Test
              comment="Just Wow!"
              namePerson="Customer 2"
              title="Accountant"
              className="lg:w-1/3 lg:mb-0 mb-6 p-4"
            />
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <Test
              comment="Customer Service is great"
              namePerson="Customer 3"
              title="Software Developer"
              className="lg:w-1/3 lg:mb-0 mb-6 p-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
