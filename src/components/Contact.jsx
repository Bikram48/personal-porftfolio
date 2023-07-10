import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact({ mode }) {
  return (
    <div
      className={`${
        mode ? "bg-white text-body" : "bg-body text-white"
      } p-6 md:p-20`}
      id="contact"
    >
      <div className="flex item-center justify-center items-center flex-col gap-3">
        {/* <div className="w-4 h-1 bg-[#de1054] mr-4"></div> */}
        <h2 className="text-3xl">BIKRAMCHAND</h2>
        <p>chandbikram001@gmail.com - 9849321710</p>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/bikram.ch.54/" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://github.com/Bikram48" target="__blank">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/thisisbikram_/" target="_blank">
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/bikram-chand-1b78b4228/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
