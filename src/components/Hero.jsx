import userData from "../data/PersonData";
import imagedeveloper from "../assets/images/imagedeveloper.avif";
import TypewriterText from "./TypeWriterText";

const Hero = () => {
  const socialMedia = userData.socialMedia;

  return (
    <section id="home" className="w-full h-screen flex items-center text-white">
      <div className="mx-auto w-[90%] max-w-[1300px] flex flex-col sm:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="w-full sm:w-1/2 space-y-3">
          <h2 className="text-5xl font-bold">
            Hello <span className="wave inline-block">👋</span>
          </h2>
          <h2 className="text-4xl font-bold">I'm Praneeth Katuri</h2>

          <div className="text-xl font-medium text-black">
            <TypewriterText />
          </div>

          <div className="mt-4 text-2xl lg:text-3xl font-semibold text-white tracking-wide quote-font transition-all duration-300">
            Talk is cheap.
            <br />
            Show me the code!
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex gap-5">
            {socialMedia.map((data, index) => {
              const IconComponent = data.icon;
              return (
                <button
                  key={index}
                  onClick={() => window.open(data.url)}
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  <IconComponent className="text-3xl" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-1/2 mt-12 sm:mt-0 flex justify-center">
          <img src={imagedeveloper} alt="Developer" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
