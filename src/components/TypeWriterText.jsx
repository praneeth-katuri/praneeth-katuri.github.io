import { Typewriter } from "react-simple-typewriter";

const TypewriterText = () => {
  return (
    <h1 className="pt-2 text-2xl md:text-3xl font-bold">
      <Typewriter
        words={[
          "MERN Stack Developer",
          "Frontend Developer",
          "Backend Developer",
          "React.js Developer",
          "Node.js Developer",
          "JavaScript Developer",
        ]}
        loop={0}
        cursor
        cursorStyle="_"
        typeSpeed={150}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </h1>
  );
};

export default TypewriterText;
