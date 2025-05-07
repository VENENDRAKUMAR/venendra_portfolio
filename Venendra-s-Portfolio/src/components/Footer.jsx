import React from "react";
import MagicButton from "./MagicButton";
import git from "../assets/git.svg"
import twit from "../assets/twit.svg"
import link from "../assets/link.svg"
import footergrid from "../assets/footer-grid.svg"

export const socialMedia = [
    {
      id: 1,
      img: git,
    },
    {
      id: 2,
      img: twit,
    },
    {
      id: 3,
      img: link,
    },
  ];

const Footer = () => {
  return (
    <footer className="w-full text-white pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src= {footergrid}
          alt="grid"
          className="w-full h-full opacity-50 "
          width={100}
          height={50}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:info@ecoavenstra.com">
          <MagicButton
            title="Let's get in touch"
            
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Venendra Kumar
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
