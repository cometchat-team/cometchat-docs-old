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
    <div className="flex flex-row items-start md:items-center justify-center bg-[#0A0914] py-6 text-[#FAFAFF] text-opacity-[0.74]">
      <div className="flex w-11/12 md:w-full max-w-[1440px] flex-col  md:flex-row items-start md:items-center justify-between  md:px-[48px] text-sm xlg:px-0 ">
        {/* links */}
        <div className="m-0 whitespace-nowrap text-xs text-[11px] mb-3 md:mb-0 flex flex-row space-x-3">
          <p className="m-0">2023 © CometChat</p>
          <a className="m-0 text-[#FAFAFF] text-opacity-[0.74]">Terms of Use</a>
          <a className="m-0 text-[#FAFAFF] text-opacity-[0.74]">Privacy Policy</a>
        </div>
        {/* social media */}
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
          {SOCIAL_MEDIA.map((item) => (
            <a
              key={item.title}
              className="flex flex-row text-xs items-center justify-start md:justify-center space-x-2 md:space-x-1 text-[#FAFAFF] text-opacity-[0.74]">
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
