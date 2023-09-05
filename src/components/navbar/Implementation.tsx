import React from "react";

const DATA = [
  {
    title: "UI Kits",
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
    <div className="flex w-full flex-wrap bg-[#191822]">
      <div className="flex w-full flex-row items-start justify-between">
        {DATA.map((card, index) => (
          <Card index={index} {...card} key={card.title} />
        ))}
      </div>
    </div>
  );
}

export default Implementation;

function Card({ title, items, index }) {
  return (
    <div
      style={{
        backgroundColor: index == 1 || index == 2 ? "#272730" : "#191822",
        paddingLeft: index == 0 ? 64 : 40,
        paddingRight: index == 3 ? 64 : 40,
      }}
      className="flex h-full flex-1 flex-col items-start justify-start py-10">
      <h2 className="mb-6 text-xl text-[#FAFAFF] text-opacity-[54%]">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {items.map((item, item_index) => (
          <a
            href=""
            key={item.title}
            className={`flex flex-row items-center justify-start ${
              item_index < 4 ? " col-start-1 row-auto" : `col-start-2`
            }
            space-x-1 text-left text-xs text-[#FAFAFF]`}
            style={{
              gridRowStart: item_index < 4 ? "auto" : item_index - 3,
              gridColumnStart: item_index < 4 ? 1 : 2,
            }}>
            <img
              className="h-5 object-contain grayscale"
              src={`/imgs/logos/${item.icon}`}
              alt={item.title}
            />
            <p className="m-0 whitespace-nowrap text-sm text-opacity-[84%]">
              {item.title}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
