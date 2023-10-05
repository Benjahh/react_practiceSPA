import React from "react";
import { flexBetweeen } from "../data";

export const AboutPage = () => {
  return (
    <div
      id="about"
      className=" bg-black justify-center items-center flex w-full h-full"
    >
      <section className={`${flexBetweeen} w-5/6 flex-col gap-8`}>
        <h1 className={`${flexBetweeen} border-2 border-green-500`}>TITLE</h1>
        <div
          className={`${flexBetweeen} flex-col text-lg text-left gap-6 text-white`}
        >
          <p>
            Hi, my name is Lucas. I'm a
            <span className="font-extrabold">Computer Engineering</span> student
            with a passion for
            <span className="font-extrabold">Software Engineering</span>.
          </p>
          <p>
            I'm currently pursuing
            <span className="font-extrabold">Computer Engineering</span> at
            <span className="font-extrabold">UA </span> (Universidad Americana),
            located in Asuncion, Paraguay.
          </p>
          <p>
            I'm a full-stack developer, specializing in the
            <span className="font-extrabold">MERN</span> stack (MongoDB,
            Express, React, and Node), and I'm keen on building high-quality,
            scalable web applications.
          </p>
          <p>
            My approach to application development is based on several core
            principles. I prioritize creating
            <span className="font-extrabold">modern</span> user interfaces that
            are visually <span className="font-extrabold">appealing</span> and
            easy to use. Additionally, I am committed to ensuring that every
            application I build performs
            <span className="font-extrabold">optimally </span>and is
            <span className="font-extrabold">user-friendly</span>.
          </p>
          <p>
            I continuously improve my skills and knowledge by tackling complex
            challenges and collaborating with others to find creative solutions.
          </p>
        </div>
        <a
          download=""
          src=""
          className={`${flexBetweeen} flex-row rounded-md bg-orange-300 text-white`}
        >
          Resume
        </a>
      </section>
    </div>
  );
};
