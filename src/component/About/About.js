import React from "react";
import lina from "../../assets/image/aaaaaa.jpg";

function About() {
  return (
    <div className="container px-6 min-h-[75vh] mx-auto my-4 text-xl text-justify">
      <div className="h-full items-center text-sm md:text-base w-full mx-auto lg:flex flex-row-reverse justify-between">
        <div className="h-full w-full lg:w-1/2 border-2 border-black">
          <img
            src={lina}
            alt="Fikir_Buna"
            className="w-full h-full mx-auto object-cover"
          />
        </div>
        <div className="mt-4 lg:w-2/5">
          <p>
            <span className="font-medium md:font-bold">Fikir Dicore</span> we
            Fikir Decore is a premier event decoration service dedicated to transforming ordinary occasions into extraordinary memories.
             Specializing in weddings, graduations, birthdays, and baby showers, Fikir Decore's signature style blends elegance, sophistication, and creativity. 
             From enchanting wedding decor to chic graduation vibes and whimsical birthdays, 
             their designs cater to a variety of celebrations. The team at Fikir Decore prides 
             itself on creative innovation, meticulous detailing, and providing a stress-free experience for clients.
              Their goal is to make every event unique and personalized, ensuring that each celebration is a beautiful
               and memorable experience. Contact Fikir Decore to turn your vision into a stunning reality and let them 
               be the brushstroke that paints your event with beauty and joy. 
            Elevate your moments with Fikir Decore, where dreams meet design.
          </p>
           <br ></br>
          
         
        </div>
      </div>
    </div>
  );
}

export default About;
