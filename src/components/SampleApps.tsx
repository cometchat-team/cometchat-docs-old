import React from "react";
import { GithubIcon } from "../icons";

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
    <div className="con--cust mb-10 mt-14 flex flex-col items-center">
      <div className="flex w-full  max-w-[1440px] flex-row items-start justify-between md:items-center">
        <div className="flex w-11/12 flex-col items-start">
          <h1 className="h--cust m-0 mb-1 text-cst-sec-title dark:text-cst-sec-title-dark">
            Sample Apps
          </h1>
          <p className="p--cust font--custom--thin text-cst-sec-subtitle dark:text-cst-sec-subtitle-dark ">
            Dive into practical examples of what's achievable
          </p>
        </div>
        {/* view more */}
        <a className="font--custom--thin flex w-fit flex-col items-start justify-center whitespace-nowrap rounded-xl border border-solid border-cst-border bg-[#14131D05] p-[10px] text-xs text-cst-black dark:border-cst-border-dark dark:text-cst-white">
          View All
        </a>
      </div>
      <div className="mt-3 grid w-full max-w-[1440px] grid-cols-1 gap-6 md:grid-cols-3 md:gap-10">
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
        className="mb-2 aspect-video w-full rounded-xl object-cover"
      />
      <h3 className="m-0 mb-1 text-cst-sec-title dark:text-cst-sec-title-dark">
        {title}
      </h3>
      <p className="font--custom--thin p--cust text-cst-sec-subtitle dark:text-cst-sec-subtitle-dark">
        {description}
      </p>
      <a className="font--custom--thin flex w-fit flex-row items-center justify-center whitespace-nowrap rounded-xl border border-solid  border-cst-border bg-[#14131D05] p-[10px] px-3 py-2 text-xs text-cst-black dark:border-cst-border-dark dark:text-cst-white">
        <GithubIcon className="mr-[8px] h-[20px] w-[20px] fill-black  dark:fill-white" />
        Clone
      </a>
    </div>
  );
}
