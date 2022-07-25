import React from "react";
import lina from "../../assets/hero/lina.jpg";

function About() {
  return (
    <div className="container px-6 mx-auto my-4 text-xl text-justify">
      <div className="h-full items-center w-full mx-auto lg:flex flex-row-reverse justify-between">
        <div className="h-full w-full lg:w-1/2 border-2 border-black">
          <img
            src={lina}
            alt="Lina"
            className="w-full h-full mx-auto object-cover"
          />
        </div>
        <div className="mt-4 lg:w-2/5">
          <p>
            <span className="font-bold">Lina’s Boutique</span> we offer a wide
            range of apparel traditional Islamic wear to fit any woman’s unique
            sense of style. Our accessories are carefully curated to provide our
            customers the latest fashions. To keep our customers in style we
            post new arrivals daily, as well as offer stylist picks to help any
            indecisive shoppers.
          </p>
          <br />
          <br />
          <p>
            Beyond helping you look your best, we strives to make every purchase
            a positive experience. Our top priorities are excellent customer
            service, exceptionally quick order processing, ultra fast shipping
            times, and a hassle-free return policy. We value your feedback,
            whether positive or constructive and we are continuously working to
            improve your experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
