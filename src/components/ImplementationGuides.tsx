import React from "react";

const DATA = [
  {
    title: "How to Add @Mentions to a React Chat App",
    description:
      "Follow along with this step-by-step tutorial to add ‘@’ mentions in a React chat application.",
    link: "",
    thumbnail: "univers.png",
  },
  {
    title: "Add Push Notifications to Your Vue Chat App",
    description:
      "Build the infrastructure to enable Push Notifications functionality in your Vue web app.",
    link: "",
    thumbnail: "univers.png",
  },
  {
    title: "Build a simple video chat app for iOS",
    description:
      "In this tutorial, we walk you through the step by step process to build a simple video chat app in minutes!",
    link: "",
    thumbnail: "univers.png",
  },
  {
    title: "How to build an Android chat app in Kotlin",
    description:
      "Add CometChat SDK - Implement user registration - Set up conversations & chat screens - Live chat in action!",
    link: "",
    thumbnail: "univers.png",
  },
];

function ImplementationGuides() {
  return (
    <div className="mb-10 mt-[70px] flex w-full flex-col items-center bg-[#F6F6FA] px-12 pt-[80px]">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex w-11/12 flex-col items-start">
          <h1 className="m-0 mb-1">Implementation Guides</h1>
          <p>Essential guides for optimal implementation</p>
        </div>
        {/* view more */}
        <a className="flex w-fit flex-col items-center justify-center rounded-xl border border-solid border-[#14131D1A] px-4 py-[12px] text-sm text-[#14131D]">
          View All
        </a>
      </div>
      <div className="mt-4 grid w-full grid-cols-4 gap-10">
        {DATA.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

export default ImplementationGuides;

function Card({ title, description, thumbnail, link }) {
  return (
    <div>
      <img
        src={`/imgs/${thumbnail}`}
        alt={title}
        className="mb-2 h-[180px] w-full rounded-xl object-cover"
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <a className="flex w-fit flex-row items-center justify-center rounded-xl pt-1 text-sm text-[#6852D6]">
        Learn more
      </a>
    </div>
  );
}
