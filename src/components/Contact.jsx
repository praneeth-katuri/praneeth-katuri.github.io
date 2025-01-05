import userData from "../data/PersonData";

const Contact = () => {
  const { FooterLink } = userData;

  return (
    <section id="contact" className="mb-40 w-full">
      <div className="flex flex-col items-center justify-center">
        <h2 className="pt-12 pb-6 text-3xl lg:text-3xl text-gradient">Get in Touch</h2>
        <p className="w-[90%] lg:w-[50%] text-white text-center text-2xl pb-6">
          I'd love to connect and explore exciting opportunities with you!
          Whether you have interesting projects, creative ideas, or just want to
          chat, please don't hesitate to reach out. My inbox is open 24/7!
        </p>
        <button
          onClick={() => {
            window.open(FooterLink);
          }}
          className="h-[50px] w-[200px] border-2 text-white border-white hover:border-black hover:text-black  hover:bg-opacity-40"
        >
          Connect Now
        </button>
      </div>
    </section>
  );
};

export default Contact;
