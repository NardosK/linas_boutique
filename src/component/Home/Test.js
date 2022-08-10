import React from "react";

function Test(comment, namePerson, title) {
 return (
  <section ClassName="text-gray-600 body-font">
   <div ClassName="container px-5 py-12 mx-auto">
    <div ClassName="flex flex-wrap -m-4">
     <div ClassName="lg:w-1/3 lg:mb-0 mb-6 p-4">
      <div ClassName="h-full text-center">
       <img
        alt="testimonial"
        ClassName="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
        src="https://dummyimage.com/302x302"
       />
       <p ClassName="leading-relaxed">
        {comment}
       </p>
       <span ClassName="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
       <h2 ClassName="text-gray-900 font-medium title-font tracking-wider text-sm">
        {namePerson}
       </h2>
       <p ClassName="text-gray-500">{title}</p>
      </div>
     </div>

    </div>
   </div>
  </section>
 );
}

export default Test;
