import Link from "@docusaurus/Link";
import React from "react";

function formatLink(base, title) {
  // from React to react and From React Native to react-native
  return base + title.toLowerCase().replace(" ", "-");
}

const DATA = [
  {
    title: "Overview",
    items: [
      {
        title: "Key concepts",
        icon: "lamp.svg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget",
        link: "",
      },
      {
        title: "Webhooks",
        icon: "terminal.svg",
        link: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget",
      },
      {
        title: "Migration guide",
        icon: "folder.svg",
        link: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget",
      },
      {
        title: "Extensions",
        icon: "puzzle.svg",
        link: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget",
      },
      {
        title: "Bots",
        icon: "bots.svg",
        link: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget",
      },
      {
        title: "Help Center",
        icon: "help.svg",
        link: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget",
      },
      {
        title: "APIs",
        icon: "dataflow.svg",
        link: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget",
      },
      {
        title: "Error guide",
        icon: "warning.svg",
        link: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget",
      },
    ],
  },
  {
    title: "Sample Apps",
    items: [
      {
        title: "Sample app for React",
        icon: "react.svg",
        link: "",
        description: "",
      },
      {
        title: "Sample app for Vue",
        icon: "vue.svg",
        link: "",
        description: "",
      },
      {
        title: "Sample app for Vue 1",
        icon: "vue.svg",
        link: "",
        description: "",
      },
      {
        title: "Sample app for Vue 2",
        icon: "vue.svg",
        link: "",
        description: "",
      },
    ],
  },
];

function Overview() {
  return (
    <div className="flex w-full max-w-[1400px] flex-wrap bg-[#191822]">
      <div className="flex w-full flex-row items-start justify-between">
        <CardOverview {...DATA[0]} />
        <CardSamples {...DATA[1]} />
      </div>
    </div>
  );
}

export default Overview;

function CardOverview({ title, items }) {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-start justify-start bg-[#191822]  py-10 pl-8">
      <h2 className="mb-6 text-xl text-[#FAFAFF] text-opacity-[54%]">
        {title}
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {items.map((item, item_index) => (
          <Link
            className="hover:no-underline"
            href={item.link}
            key={item.title}>
            <div
              className={`flex flex-row items-center justify-start space-x-1 text-left text-xs text-[#FAFAFF]`}>
              <img
                className="mr-1 h-4 object-contain "
                src={`/imgs/icons/${item.icon}`}
                alt={item.title}
              />
              <p className="m-0 whitespace-nowrap text-lg text-[#fafaff] text-opacity-[84%]">
                {item.title}
              </p>
            </div>
            <p className="text-sm text-[#FAFAFF] text-opacity-[54%]">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function CardSamples({ title, items }) {
  return (
    <div className="flex h-full flex-col items-start justify-start bg-[#272730]  py-10 pl-12 pr-20">
      <h2 className="mb-6 text-xl text-[#FAFAFF] text-opacity-[54%]">
        {title}
      </h2>
      <div className="flex flex-col items-start gap-8">
        {items.map((item, item_index) => (
          <Link
            className="hover:no-underline"
            href={item.link}
            key={item.title}>
            <div
              className={`flex flex-row items-center justify-start space-x-1 text-left text-xs text-[#FAFAFF]`}>
              <img
                className="mr-1 h-6 object-contain grayscale "
                src={`/imgs/logos/${item.icon}`}
                alt={item.title}
              />
              <p className="m-0 whitespace-nowrap text-lg text-[#fafaff] text-opacity-[84%]">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
        <Link className="text-lg text-[#6852D6] hover:no-underline" href="">
          See all apps
        </Link>
      </div>
    </div>
  );
}
