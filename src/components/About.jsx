import React from "react";
import userData from "../data/PersonData";
import aboutimage from "../assets/images/AboutImage.png";

const About = () => {
  const { about } = userData;

  return (
    <section id="about" className="h-screen w-full py-20 bg-transparent text-white">
      <div className="w-[90%] mx-auto flex flex-col-reverse sm:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="w-full sm:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-white/90">
            {about}
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <img
            src={aboutimage}
            alt="Developer Illustration"
            className="max-w-[650px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
