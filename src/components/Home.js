import React, { useState } from "react";
import phone from "../assets/images/phone.svg";
import ContactPopup from "./ContactForm/Contact-Popup";

const Home = () => {
  function handleCallClick() {
    window.location.href = "tel:7990731463";
  }

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="bg-hero max-w-full w-full max-h-dvh h-dvh bg-no-repeat bg-cover font-days">
        <div className="container items-center flex h-full">
          <div className="xl:w-2/4 px-5">
            <h1 className="xl:text-5xl text-3xl xl:text-start text-center leading-10 text-white mb-6">
              Expert Car Repair Services certified
            </h1>
            <p className="text-white text-xl font-sans mb-6 xl:w-11/12 xl:text-start text-center">
              We offering well-trained mechanics and excellent customer service,
              all at competitive prices of vehicle repairs at your home or place
              of work.
            </p>
            <div className="flex gap-9 md:flex-row flex-col xl:justify-start justify-center">
              <div>
                <button
                  onClick={openPopup}
                  className="text-white text-base px-5 py-4 bg-blue-primary tracking-widest rounded md:w-auto w-full"
                >
                  MAKE APPOINTMENT
                </button>
              </div>
              <div
                className="flex gap-6 cursor-pointer md:justify-start justify-center"
                onClick={handleCallClick}
              >
                <img src={phone} alt="Call_icon" className="max-w-8" />
                <button className="text-white text-2xl flex flex-col justify-center h-full">
                  +91 79907 31463
                  <span className="text-xs">24-hour emergency assistance</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactPopup isOpen={isOpen} closePopup={closePopup} />
    </>
  );
};

export default Home;
