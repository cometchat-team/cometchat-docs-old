import React from "react";

export default function WhatNew({ children }) {
  return (
    <div className="relative h-fit w-full  py-14">
      {/* eclipse light */}
      <svg
        className="absolute -left-[1.2vh] top-0 z-0 flex h-[90%] dark:hidden"
        viewBox="0 0 880 438"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M875.371 376.38C867.893 397.103 848.658 412.552 820.121 422.691C791.589 432.828 753.831 437.629 709.458 437.101C620.717 436.044 505.633 413.678 385.249 370.237C264.866 326.797 162.018 270.521 93.0509 214.667C58.5653 186.739 32.5733 158.934 17.0892 132.913C1.60264 106.888 -3.33515 82.7167 4.1429 61.9935C11.6209 41.2703 30.8559 25.8216 59.3924 15.6825C87.9246 5.54483 125.682 0.744506 170.055 1.2727C258.796 2.32904 373.881 24.6951 494.264 68.1359C614.647 111.577 717.495 167.853 786.463 223.706C820.948 251.634 846.94 279.439 862.424 305.46C877.911 331.485 882.849 355.657 875.371 376.38Z"
          stroke="url(#paint0_linear_70_9629)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_70_9629"
            x1="37.8961"
            y1="47.5316"
            x2="927.184"
            y2="319.129"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E6E6EB" />
            <stop offset="0.667389" stop-color="#E6E6EB" />
            <stop offset="1" stop-color="#E6E6EB" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      {/* eclipse dark */}
      <svg
        className="absolute -left-[1.2vh] top-0 z-0 hidden h-[90%] dark:flex"
        viewBox="0 0 880 438"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.1"
          d="M875.371 376.38C867.893 397.103 848.658 412.552 820.121 422.691C791.589 432.828 753.831 437.629 709.458 437.101C620.717 436.044 505.633 413.678 385.249 370.237C264.866 326.797 162.018 270.521 93.0509 214.667C58.5653 186.739 32.5733 158.934 17.0892 132.913C1.60264 106.888 -3.33515 82.7167 4.1429 61.9935C11.6209 41.2703 30.8559 25.8216 59.3924 15.6825C87.9246 5.54483 125.682 0.744506 170.055 1.2727C258.796 2.32904 373.881 24.6951 494.264 68.1359C614.647 111.577 717.495 167.853 786.463 223.706C820.948 251.634 846.94 279.439 862.424 305.46C877.911 331.485 882.849 355.657 875.371 376.38Z"
          stroke="url(#paint0_linear_70_10164)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_70_10164"
            x1="37.8961"
            y1="47.5316"
            x2="927.184"
            y2="319.129"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E6E6EB" />
            <stop offset="0.667389" stop-color="#E6E6EB" />
            <stop offset="1" stop-color="#E6E6EB" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* card bg */}
      <div className="relative h-fit w-full  rounded-xl ">
        {/* card */}
        <div
          className="cst-docs-card-con
relative z-10 rounded-xl border-[1px] border-solid border-cst-border-docs-card bg-cst-bg-docs-card px-4 py-6 backdrop-blur-md dark:bg-cst-bg-docs-card-dark"
        >
          {children}
        </div>

        {/* images */}
        <img
          src="/imgs/planets-1.svg"
          alt="Planets"
          className="-z-1 absolute -bottom-[135px] -right-[70px] h-40 object-contain md:h-[270px] md:w-[270px]"
        />
        <img
          src="/imgs/planets-2.svg"
          alt="Planets"
          className="-z-1 absolute -left-[100px] -top-[110px] h-40 object-contain md:h-[220px] md:w-[220px]"
        />
      </div>
    </div>
  );
}
