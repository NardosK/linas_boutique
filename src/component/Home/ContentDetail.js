import React from "react";

function ContentDetail({ img, title, category, detail }) {
  return (
    <div class=" xl:w-1/4 md:w-1/2 p-4">
      <div class="bg-gray-100 p-6 rounded-lg">
        <img
          class="rounded w-full object-cover object-center mb-6 h-60"
          src={img}
          alt="content"
        />
        <h3 class="tracking-widest text-indigo-500 text-lg font-medium title-font mb-4">
          {title}
        </h3>
        <p class="leading-relaxed text-base">{detail}</p>
      </div>
    </div>
  );
}

export default ContentDetail;
