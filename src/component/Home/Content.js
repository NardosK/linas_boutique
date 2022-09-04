import React from "react";
import img1 from "../../assets/gallery/WhatsApp Image 2022-07-25 at 11.07.24 PM.jpeg";
import img2 from "../../assets/gallery/WhatsApp Image 2022-07-25 at 11.07.14 PM.jpeg";
import img3 from "../../assets/gallery/PHOTO-2022-06-16-18-39-28.jpg";
import img4 from "../../assets/gallery/img-20201021-wa0030.jpg";
import ContentDetail from "./ContentDetail";
function Content() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Meet Our Bestsellers
            </h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Arabian Fashion is taking over the fashion industry the elegance and
            beauty of Arabic clothing for women is a universal appeal and
            welcomed by many cultures all over the world, although known as
            muslim dresses , abayas and kaftans are now worn proudly by women of
            all religions and nationalities not only as a badge of modesty but
            because of the unique styles that can't be replicated in the "jeans
            and top" western fashion.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <ContentDetail
            img={img1}
            title={"KAFTAN ARABIAN"}
            detail={
              "Our Kaftan Is A Long AND The Fabric Is Most Often Made From Wool, But Can Also Be Made From Other Natural Fibers Such As Cotton And Polyester. If You Are Looking For A Stylish And Comfortable Way To Protect Your Neck, You May Want To Consider Purchasing Our product."
            }
          />
          <ContentDetail
            img={img2}
            title={"ABAYA"}
            detail={
              "Our Abaya products which are long dress with different colors such as white, pink, nude and in pastel tones. You can match your abaya to your hijab, scarf or veil and find the perfect combination for your occasions."
            }
          />
          <ContentDetail
            img={img3}
            title={"HIJAB"}
            detail={
              "Our hijabs & accessories are made to last from best-in-class materials. You won't find our products anywhere else."
            }
          />
          <ContentDetail
            img={img4}
            title={"Home Decor"}
            detail={
              "We offer trendy carpets and rugs, eccentric wall hangings, and everything in between. We offer home decor items in a wide variety of designs, and our products are of the highest quality."
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Content;
