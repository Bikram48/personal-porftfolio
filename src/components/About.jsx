import React from "react";

export default function About() {
  return (
    <div className="bg-body text-white p-6">
      <div className="flex item-center justify-center items-center">
        <div className="w-4 h-1 bg-[#de1054] mr-4"></div>
        <h2 className="text-3xl">About Me</h2>
      </div>
      <div className="mt-6 text-lg md:max-w-4xl md:mx-auto md:text-about">
        <p>
          As a passionate Front End Developer, I am driven by the desire to
          create exceptional user experiences through innovative and visually
          appealing web interfaces. With a strong background in front end
          technologies and a keen eye for design, I strive to bridge the gap
          between functionality and aesthetics, delivering intuitive and
          engaging user interfaces.
        </p>
        <p className="mt-3">
          I have a solid foundation in HTML, CSS, and JavaScript, enabling me to
          transform design concepts into responsive and interactive web pages. I
          stay up-to-date with the latest trends and best practices in front end
          development, continuously expanding my skill set to deliver
          cutting-edge solutions.
        </p>
      </div>
    </div>
  );
}
