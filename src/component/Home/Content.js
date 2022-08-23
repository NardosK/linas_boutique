import React from 'react'
import img1 from "../../assets/newimg/PHOTO-2022-06-16-18-39-55.jpg"
import img2 from "../../assets/newimg/PHOTO-2022-06-16-18-39-37.jpg"
import img3 from "../../assets/newimg/PHOTO-2022-06-16-18-39-28.jpg"
import img4 from "../../assets/newimg/PHOTO-2022-06-16-18-39-17.jpg"
function Content() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Meet Our Bestsellers</h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Arabian Fashion is taking over the fashion industry the elegance and beauty of Arabic clothing for women is a universal appeal and welcomed by many cultures all over the world, although known as muslim dresses , abayas and kaftans are now worn proudly by women of all religions and nationalities not only as a badge of modesty but because of the unique styles that can't be replicated in the "jeans and top" western fashion.</p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img class="  rounded w-full object-cover object-center mb-6" src={img1} alt="content" />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">KAFTAN ARABIAN</h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Exclusive Design</h2>
              <p class="leading-relaxed text-base"> Our Kaftan Is A Long AND The Fabric Is Most Often Made From Wool, But Can Also Be Made From Other Natural Fibers Such As Cotton And Polyester. If You Are Looking For A Stylish And Comfortable Way To Protect Your Neck, You May Want To Consider Purchasing Our product. </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img class=" rounded w-full object-cover object-center mb-6" src={img2} alt="content" />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">ABAYA</h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Modest premium</h2>
              <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img class=" rounded w-full object-cover object-center mb-6" src={img3} alt="content" />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font"> HIJAB </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">premium Mysteries</h2>
              <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img class=" rounded w-full object-cover object-center mb-6" src={img4} alt="content" />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Home Decors</h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Treasurable</h2>
              <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content