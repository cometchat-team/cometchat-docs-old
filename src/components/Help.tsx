import React from "react";

const DATA = [
  {
    title: "Ask any thing",
    description:
      "Attend our designated office hours to discuss and resolve solutioning inquiries with our experts.",
    link: {
      title: "Book your slot",
      href: "",
    },
    icon: "qst.svg",
  },
  {
    title: "Support",
    description: "Address and resolve any issues you encounter",
    link: {
      title: "Connect with us",
      href: "",
    },
    icon: "support.svg",
  },
  {
    title: "FAQs",
    description:
      "Find quick answers to commonly asked questions about our platform.",
    link: {
      title: "Find answers",
      href: "",
    },
    icon: "discussion.svg",
  },
];

function Help() {
  return (
    <div className="mb-12 mt-6 flex w-full flex-col items-center px-12">
      <div className="flex w-11/12 max-w-[1440px]  flex-col items-center justify-center text-center">
        <h1 className="m-0 text-4xl mb-10">How can we help you?</h1>
      </div>
      <div className="mt-4 grid  w-full max-w-[1440px] grid-cols-3 gap-10">
        {DATA.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Help;

function Card({ title, description, icon, link }) {
  return (
    <div className="w-11/12">
      <img
        src={`/imgs/icons/${icon}`}
        alt={title}
        className="mb-2 h-8 object-contain"
      />
      <h4 className="m-0">{title}</h4>
      <p className="font--custom--thin m-0 text-opacity-[0.74]  leading-6 mt-1">{description}</p>
      <a className="flex w-fit flex-row items-center justify-center rounded-xl mt-2 text-sm text-[#6852D6]">
        {link.title}
      </a>
    </div>
  );
}
