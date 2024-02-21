import React from "react";
import Test from "./Test";
import img1 from "../../assets/images/fikImage/1 (26).jpg"
import img2 from "../../assets/images/fikImage/1 (5).jpg"
import img3 from "../../assets/images/fikImage/1 (12).jpg"
function Testimonial() {
  return (
    <section className="text-gray-600 w-full body-font">
      <h2 className="text-center text-lg">RECENT REVIEWS</h2> <br />
      <p className="text-center"> Reviews from our customers</p><br /><br />
      <div className="container px-5 py-5 mb-8 mx-auto">

        <div className="flex flex-wrap mx-auto w-full -m-4">

          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <Test
              img={img1}
              title="Joyful Fantasia"

              comment="  Fikir Decore brought pure magic to 
              my daughter's birthday. Their Whimsical Birthdays 
              service is a game-changer. Creative, imaginative, 
              and unforgettable. 
              They know how to make birthdays truly special!
              ⭐️⭐️⭐️⭐️"
              namePerson="Munisa K"
            />
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <Test
              img={img2}
              title="Elegance Unveiled!!!"

              comment="Fikir Decore elevated my graduation party with unmatched 
              sophistication. The modern, elegant decor perfectly
               reflected the significance of the occasion. 
              They turned my celebration into a true work of art.
             ⭐️⭐️⭐️⭐️⭐️"
              namePerson="Girma B"
            />
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <Test
              img={img3}
              title="Enchantopia"
              comment="Fikir Decore transformed our wedding into a fairytale. 
              Impeccable attention to detail and breathtaking floral arrangements 
              created a magical atmosphere. 
              Grateful for the extraordinary memories!
              ⭐️⭐️⭐️⭐️"
              namePerson="Beza D"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;