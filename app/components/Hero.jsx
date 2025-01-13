import React from "react";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { FaRegCirclePlay } from "react-icons/fa6";

module.exports = {
  theme: {
    extend: {
      clipPath: {
        "inward-bend":
          'path("M10 0 H 90 A 10 10 0 0 1 100 10 V 90 A 10 10 0 0 1 90 100 H 10 A 10 10 0 0 1 0 90 V 10 A 10 10 0 0 1 10 0 Z")',
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};

function App() {
  return (
    <div className="flex justify-between items-center h-[100vh] border border-white gap-3 p-8 bg-gradient-to-r from-[#a99ad5] to-[#f7afc5]">
      {/* Left Section */}
      <div className="w-[65%] h-[70%] p-8 pr-5 border-2 border-pink-700 rounded-3xl bg-white">
        <div className="w-[55%] flex-col flex  items-start  text-center">
          <h1 className="text-4xl font-bold text-black">Klick Experts</h1>
          <p className="text-lg ml-36 font-mono text-pink-700 italic">
            by klikce
          </p>
        </div>
        <div className="flex justify-between items-center h-72 px-8 rounded-3xl border-2 border-[#ca3181] gap-5">
          <div className="flex-1 p-6 text-center clip-inward-bend w-60 h-48 bg-[#ca3181] border-2 border-pink-700 rounded-[35px]">
            <div className="relative inline-block mb-4">
              <span className="absolute flex items-center justify-center w-14 h-14 text-sm font-bold text-white p-10 bg-pink-700 rounded-full -left-24 transform -translate-y-1/2  border-[7px] border-white">
                15K+
              </span>
              <img
                src="/path/to/image1.jpg"
                alt="USA | CANADA"
                className="w-14 h-14 mx-auto rounded-full"
              />
            </div>
            <div className="">
              <p className="font-bold text-white">USA | CANADA</p>
              <p>Ronak Sripal</p>
              <p className="text-xs">+91 96435 03128</p>
              <p className="text-xs">ronak.sripal@klickedu.com</p>
            </div>
          </div>
          <div className="flex-1 p-6 text-center w-60 h-48 bg-[#ca3181] border-2 border-pink-700 rounded-[35px]  ">
            <div className="relative inline-block mb-4">
              <span className="absolute flex items-center justify-center w-14 h-14 text-sm font-bold text-white bg-pink-700 rounded-full -left-24 transform -translate-y-1/2 border-[5px] border-white">
                170+
              </span>
              <img
                src="/path/to/image2.jpg"
                alt="UK | AUS | NZ"
                className="w-14 h-14 mx-auto rounded-full"
              />
            </div>
            <div className="">
              <p className="font-bold text-white">UK | AUS | NZ</p>
              <p>Archa Kamal</p>
              <p className="text-xs">+91 90611 36467</p>
              <p className="text-xs">archa.kamal@klickedu.com</p>
            </div>
          </div>
          <div className="flex-1 p-6 text-center w-60 h-48 bg-[#ca3181] border-2 border-pink-700 rounded-[35px]">
            <div className="relative inline-block">
              <span className="absolute flex items-center justify-center w-14 h-14 text-sm font-bold text-white bg-pink-700 rounded-full -left-24 transform -translate-y-1/2  border-[5px] border-white">
                150+
              </span>
              <img
                src="/path/to/image3.jpg"
                alt="MBBS ABROAD"
                className="w-14 h-14 mx-auto rounded-full"
              />
            </div>
            <div className="">
              <p className="font-bold text-white">MBBS ABROAD</p>
              <p>Ronak Sripal</p>
              <p className="text-xs">+91 96435 03128</p>
              <p className="text-xs">ronak.sripal@klickedu.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[35%] space-y-6">
        <div className="flex p-6 bg-white border-2 border-pink-700 rounded-3xl">
          <div className="w-[50%]">
            <h2 className="mb-2 text-lg font-bold text-pink-700">
              Refer a Friend
            </h2>
            <p className="mb-4 text-sm text-[#ca3181]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="flex justify-between items-center px-5 py-1 w-44 text-[#ca3181] rounded-xl border-2 border-pink-700 hover:bg-pink-600 hover:text-white">
              Earn Now
              <FaRegCirclePlay className="text-[#ca3181] text-xl" />
            </button>
          </div>
          <div className="h-44 w-[40%] ml-6 ">
            <CgProfile className="text-[#ca3181] w-36 h-36" />
          </div>
        </div>
        <div className="flex p-6 bg-white border-2 border-pink-700 rounded-3xl">
          <div className="w-[50%]">
            <h2 className="mb-2 text-lg font-bold text-pink-700">
              Travel With Us
            </h2>
            <p className="mb-4 text-sm text-[#ca3181]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="flex justify-between items-center px-5 py-1 w-44 text-[#ca3181] rounded-xl border-2 border-pink-700 hover:bg-pink-600 hover:text-white">
              Get Discount
              <FaRegCirclePlay className="text-[#ca3181] text-xl" />
            </button>
          </div>
          <div className="h-44 w-[44%] ml-6 rounded-3xl bg-gradient-to-b from-[#a62360] to-[#e3297d] ">
            <h1 className="text-xl ml-3 mt-2 w-28">Apply for Visa</h1>
            <p className="text-xs ml-3 mt-1 w-28">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="flex justify-between  px-5 ml-3 py-1 mt-3 w-28 text-xs text-white rounded-xl border-2 border-white hover:bg-white hover:text-[#ca3181] ">
              Start Now
              <FaRegCirclePlay className="text-white text-base  " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
