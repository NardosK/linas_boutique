import React from 'react'
import img1 from "../../assets/images/fikImage/1 (22).jpg"
import img2 from "../../assets/images/fikImage/1 (6).jpg"
import img3 from "../../assets/images/fikImage/1 (2).jpg"

function Content() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/3 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Meet Our Best Service </h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Fikir Decore today to embark on a journey of transforming your ordinary occasions into extraordinary memories. Our team is dedicated to providing a stress-free experience, meticulous detailing, and creative innovation, ensuring that your event is a beautiful and memorable experience.
           Elevate your moments with Fikir Decore, where dreams meet design.</p>
        </div>
        <div class="flex flex-wrap -m-3">
          <div class="xl:w-1/3 md:w-1/3 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img class=" h-40 rounded w-full object-cover object-center mb-6" src={img1} alt="content" />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Wedding Wonderland: Elegance Redefined</h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Exclusive Decoration</h2>
              <p class="leading-relaxed text-base"> At Fikir Decore, we understand that your wedding day is a once-in-a-lifetime celebration of love,
               and we're here to make it extraordinary. Our Wedding Wonderland service is tailored to create a dreamy and enchanting atmosphere that 
               reflects the unique essence of your love story. Picture a venue adorned with timeless elegance, intricate floral arrangements, 
               and personalized touches that make your special day truly unforgettable.
               Let us weave magic into every detail, ensuring that your wedding is a masterpiece that you and your guests will cherish forever. </p>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img class="h-40 rounded w-full object-cover object-center mb-6" src={img2} alt="content" />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Graduation Gala: Celebrate Success in Style</h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Modest premium</h2>
              <p class="leading-relaxed text-base">Graduating is a significant milestone, and it deserves a celebration as exceptional as your achievements. 
              With Fikir Decore's Graduation Gala service, we bring sophistication and flair to your graduation party. Imagine a chic and stylish setting that 
              perfectly complements your success. Whether you prefer a contemporary ambiance or a classic touch, our team will curate a design that mirrors your 
              accomplishments and sets the stage for a night of joyous celebration. 
              Trust us to turn your graduation into a glamorous affair that marks the beginning of a new chapter in style.</p>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4 ">
            <div class="bg-gray-100   p-6 rounded-lg">
              <img class="h-40 rounded w-full object-cover object-center mb-6" src={img3} alt="content" />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font"> Whimsical Birthdays: Where Imagination Meets Celebration </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">premium Mysteries</h2>
              <p class="leading-relaxed text-base">Birthdays are a celebration of life, and at Fikir Decore, 
              we specialize in turning your vision into a whimsical reality. Our Whimsical Birthdays service is 
              designed to create a magical and joyful atmosphere for the young and young-at-heart. Imagine vibrant colors, 
              playful themes, and personalized details that make your birthday celebration truly one-of-a-kind. Whether it's 
              a first birthday or a milestone celebration, we bring creativity and innovation to the table, ensuring that your special day is filled with laughter, 
              happiness, and delightful memories. Let us be the architects of your birthday dreams, where imagination meets celebration.</p>
            </div>
          </div>
    
        </div>
      </div>
    </section>
  )
}

export default Content