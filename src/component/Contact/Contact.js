import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8talne8",
        "template_t90umc8",
        form.current,
        "9XM59AZcJ8ECL0VoG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section className="text-gray-600 body-font relative">
      <div className="px-[4%] py-12 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12429.542328511867!2d-77.124608!3d38.84653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b3f2d9820c83%3A0xb48db486ee5347a1!2s5707%20Seminary%20Rd%20%23208%2C%20Falls%20Church%2C%20VA%2022041!5e0!3m2!1sen!2sus!4v1658348304548!5m2!1sen!2sus"
          // style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-black font-bold">5707 Seminary Rd #208</p>
              <p className="mt-1">5707 Seminary Rd, Falls Church, VA 22041</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                href="mailto:mohamedlina94@yahoo.com"
                target="_blank"
                className="text-indigo-500 leading-relaxed"
              >
                mohamedlina94@yahoo.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                CALL FOR APPOINTMENT
              </h2>
              <p className="leading-relaxed">
                <a href="tel:17032832392" className="text-blue-600">
                  +1-703-283-2392
                </a>
              </p>
            </div>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="lg:w-1/3 md:w-1/2 text-black flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-lg mb-1 font-medium title-font">Get In Touch!</h2>
          <p className="leading-relaxed mb-5 ">
            Use the contact form below to get in touch.
          </p>
          <div className="relative mb-4">
            <label for="name" className="leading-7 text-sm ">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="message" className="leading-7 text-sm ">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Send
          </button>
          <p className="text-xs text-justify mt-3">
            We would love to hear from you!
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
