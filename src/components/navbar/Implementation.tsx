import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";

function formatLink(base, title) {
  // from React to react and From React Native to react-native
  return base + title.toLowerCase().replace(" ", "-");
}

const DATA = [
  {
    title: "UI Kits",
    base: "/chat/ui-kits/",
    items: [
      {
        title: "React",
        icon: "react.svg",
        link: "",
      },
      {
        title: "React Native",
        icon: "react.svg",
        link: "",
      },
      {
        title: "iOS",
        icon: "swift.svg",
        link: "",
      },
      {
        title: "Angular",
        icon: "angular.svg",
        link: "",
      },
      {
        title: "Android Kotlin",
        icon: "kotlin.svg",
        link: "",
      },
      {
        title: "Android Java",
        icon: "android1.svg",
        link: "",
      },
      {
        title: "Vue",
        icon: "vue.svg",
        link: "",
      },
    ],
  },
  {
    title: "SDKs Chat",
    base: "/chat/sdks/",
    items: [
      {
        title: "React",
        icon: "react.svg",
        link: "",
      },
      {
        title: "Flutter",
        icon: "flutter.svg",
        link: "",
      },
      {
        title: "React Native",
        icon: "react.svg",
        link: "",
      },
      {
        title: "iOS",
        icon: "swift.svg",
        link: "",
      },

      {
        title: "Android",
        icon: "android1.svg",
        link: "",
      },
      {
        title: "Ionic/Capacitor",
        icon: "ionic.svg",
        link: "",
      },
    ],
  },
  {
    title: "SDKs Call",
    base: "/call/sdks/",
    items: [
      {
        title: "React",
        icon: "react.svg",
        link: "",
      },
      {
        title: "Flutter",
        icon: "flutter.svg",
        link: "",
      },
      {
        title: "React Native",
        icon: "react.svg",
        link: "",
      },
      {
        title: "iOS",
        icon: "swift.svg",
        link: "",
      },

      {
        title: "Android",
        icon: "android1.svg",
        link: "",
      },
      {
        title: "Ionic/Capacitor",
        icon: "ionic.svg",
        link: "",
      },
    ],
  },
  {
    title: "Widgets",
    base: "/chat/widgets/",
    items: [
      {
        title: "WordPress",
        icon: "wp.svg",
        link: "",
      },
      {
        title: "PHP",
        icon: "php.svg",
        link: "",
      },
      {
        title: "Laravel",
        icon: "laravel.svg",
        link: "",
      },
    ],
  },
];

function Implementation() {
  return (
    <div className="flex w-full max-w-[1400px] flex-wrap bg-[#191822]">
      <div className="flex w-full flex-col items-start justify-between md:flex-row">
        {DATA.map((card, index) => (
          <Card index={index} {...card} key={card.title} />
        ))}
      </div>
    </div>
  );
}

export default Implementation;

function Card({ title, items, base, index }) {
  return (
    <div
      className={clsx(
        "flex h-full flex-1 flex-col items-start justify-start py-5 md:py-10",
        index == 0 ? "px-4 md:px-14" : "px-4 md:px-10",
        index == 1 || index == 2 ? "bg-[#272730]" : "bg-[#191822]"
      )}
    >
      <h2 className="mb-6 text-xl text-[#FAFAFF] text-opacity-[54%]">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {items.map((item, item_index) => (
          <Link
            href={formatLink(base, item.title)}
            key={item.title}
            className={`flex flex-row items-center justify-start ${
              item_index < 4 ? " col-start-1 row-auto" : `col-start-2`
            }
            space-x-1 text-left text-xs text-[#FAFAFF]`}
            style={{
              gridRowStart: item_index < 4 ? "auto" : item_index - 3,
              gridColumnStart: item_index < 4 ? 1 : 2,
            }}
          >
            <img
              className="h-5 object-contain grayscale"
              src={`/imgs/logos/${item.icon}`}
              alt={item.title}
            />
            <p className="m-0 whitespace-nowrap text-sm text-opacity-[84%]">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
