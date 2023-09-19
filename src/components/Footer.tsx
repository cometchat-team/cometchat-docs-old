import React from "react";

const SOCIAL_MEDIA = [
  {
    title: "Facebook",
    href: "",
    icon: "facebook.svg",
  },
  {
    title: "LinkedIn",
    href: "",
    icon: "linkedin.svg",
  },
  {
    title: "Instagram",
    href: "",
    icon: "instagram.svg",
  },
  {
    title: "X",
    href: "",
    icon: "x.svg",
  },
  {
    title: "GitHub",
    href: "",
    icon: "github.svg",
  },
];

function Footer() {
  return (
    <div className="flex flex-row items-start justify-center bg-[#0A0914] py-6 text-[#FAFAFF] text-opacity-[0.74] md:items-center">
      <div className="flex w-11/12 max-w-[1440px] flex-col items-start  justify-between text-sm md:w-full md:flex-row  md:items-center md:px-[48px] xlg:px-0 ">
        {/* links */}
        <div className="m-0 mb-6 flex flex-row space-x-3 whitespace-nowrap text-[11px] text-xs md:mb-0">
          <p className="m-0">2023 © CometChat</p>
          <a className="m-0 text-[#FAFAFF] text-opacity-[0.74]">Terms of Use</a>
          <a className="m-0 text-[#FAFAFF] text-opacity-[0.74]">
            Privacy Policy
          </a>
        </div>
        {/* social media */}
        <div className="flex flex-col items-start space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
          {SOCIAL_MEDIA.map((item) => (
            <a
              key={item.title}
              className="flex flex-row items-center justify-start space-x-2 text-xs text-[#FAFAFF] text-opacity-[0.74] md:justify-center md:space-x-1"
            >
              <img
                className={`${
                  item.title === "X" ? "h-4" : "h-5"
                } object-contain`}
                src={`/imgs/icons/${item.icon}`}
                alt={item.title}
              />
              <p className="m-0">{item.title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
