import React from "react";
import Test from "./Test";
import img1 from "../../assets/newimg/PHOTO-2022-06-16-18-33-38.jpg"
import img2 from "../../assets/gallery/WhatsApp Image 2022-07-25 at 11.07.05 PM.jpeg"
import img3 from "../../assets/hero/image1.jpg"
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
              title="Great product"

              comment=" I have shopped at Lina's Boutique for all my hijabs, for modest clothing, and for prayer rugs, oils and under scarves. They have been wonderful quality, design, variety and beauty."
              namePerson="Munisa K"
            />
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <Test
              img={img2}
              title="So beautiful!!!"

              comment="First of all, I love, love, love this place. They always come through for me at the very last minute and their clothes are very affordable. The owner is very friendly and has the best customer service I have come across. It’s a hidden treasure that needs to be revealed.  
             ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️"
              namePerson="Girma B"

            />
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <Test
              img={img3}
              title="Customer Service is great"
              comment="This is a wonderful place to shop. VERY HELPFUL PEOPLE. All items, better than expected. I am looking to shopping here again. inshallah"
              namePerson="Nardos K"

            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;