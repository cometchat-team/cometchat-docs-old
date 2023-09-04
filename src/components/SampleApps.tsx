import React from "react";

const DATA = [
  {
    title: "CometChat sample app for React",
    description:
      "Fully functional real-time messaging app capable of one-on-one, group messaging, voice & video calling.",
    clone: "",
    thumbnail: "cometchat-react.png",
  },
  {
    title: "CometChat sample app for Vue",
    description:
      "A fully functional real-time messaging app built using CometChat Vue UI Kit",
    clone: "",
    thumbnail: "cometchat-vue.png",
  },
  {
    title: "CometChat iOS swift chat sample app",
    description:
      "This sample app enables users to send text and multimedia messages like images, videos, documents.",
    clone: "",
    thumbnail: "cometchat-ios.png",
  },
];

function SampleApps() {
  return (
    <div className="mb-10 mt-[150px] flex w-full flex-col items-center px-12">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex w-11/12 flex-col items-start">
          <h1 className="m-0 mb-1">Sample Apps</h1>
          <p>Dive into practical examples of what's achievable</p>
        </div>
        {/* view more */}
        <a className="flex w-fit flex-col items-center justify-center rounded-xl border border-solid border-[#14131D1A] px-4 py-[12px] text-sm text-[#14131D]">
          View All
        </a>
      </div>
      <div className="mt-4 grid w-full grid-cols-3 gap-10">
        {DATA.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

export default SampleApps;

function Card({ title, description, thumbnail, clone }) {
  return (
    <div>
      <img
        src={`/imgs/${thumbnail}`}
        alt={title}
        className="mb-2 h-[220px] w-full rounded-xl object-cover"
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <a className="flex w-fit flex-row items-center justify-center rounded-xl border border-solid border-[#14131D1A] px-6 py-[12px] text-sm text-[#14131D]">
        <img
          src="/imgs/logos/github.svg"
          alt="GitHub Logo"
          className="mr-[8px] h-[20px] w-[20px]"
        />
        Clone
      </a>
    </div>
  );
}
