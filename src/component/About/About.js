import React from "react";
import lina from "../../assets/images/lina.jpg";

function About() {
  return (
    <div className="container w-[92%] mx-auto my-12 text-xl text-justify">
      <img
        src={lina}
        alt="Lina"
        className="mx-auto w-[60%] h-[40%] object-cover mb-4"
      />
      <p>
        <span className="font-bold">Lina’s Boutique</span> we offer a wide range
        of apparel traditional Islamic wear to fit any woman’s unique sense of
        style. Our accessories are carefully curated to provide our customers
        the latest fashions. To keep our customers in style we post new arrivals
        daily, as well as offer stylist picks to help any indecisive shoppers.
      </p>
      <br />
      <br />
      <p>
        Beyond helping you look your best, we strives to make every purchase a
        positive experience. Our top priorities are excellent customer service,
        exceptionally quick order processing, ultra fast shipping times, and a
        hassle-free return policy. We value your feedback, whether positive or
        constructive and we are continuously working to improve your experience.
      </p>
    </div>
  );
}

export default About;
