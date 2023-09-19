import React from "react";

const DATA = [
  {
    title: "GitHub",
    link: "",
  },
  {
    title: "Dashboard",
    link: "",
  },
  {
    title: "Help Center",
    link: "",
  },
];

function SidebarFooter() {
  return (
    <div className="mt-6 w-auto">
      <h3 className="m-0 mb-3 pl-3 text-base">Links</h3>
      <ul className="p-0  text-sm">
        {DATA.map((item, index) => (
          <div
            className="flex w-full cursor-pointer flex-row items-center justify-between py-2 pl-3 pr-4 font-semibold hover:bg-[#d0d6d06b]"
            key={index}
          >
            <a className="text-[#7E7D85]">{item.title}</a>
            {/* icon */}
            <img
              src="/imgs/icons/open.svg"
              alt="Open Icon"
              className="w-5 object-contain"
            />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SidebarFooter;
