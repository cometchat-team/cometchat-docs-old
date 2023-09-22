import React from "react";

const DATA = [
  {
    title: "UI Kits",
    description:
      "For developers looking to quickly implement chat with pre-defined business logic along with the UI",
    items: [
      {
        title: "React",
        link: "/chat/ui-kits/react",
      },
      {
        title: "React Native",
        link: "/chat/ui-kits/react-native",
      },
      {
        title: "Angular",
        link: "/chat/ui-kits/angular",
      },
      {
        title: "iOS Swift",
        link: "/chat/ui-kits/ios-swift",
      },
      {
        title: "Android Kotlin",
        link: "/chat/ui-kits/android-kotlin",
      },
      {
        title: "Android Java",
        link: "/chat/ui-kits/android-java",
      },
      {
        title: "Vue",
        link: "/chat/ui-kits/vue",
      },
    ],
    icons: [
      {
        icon: "chat.svg",
      },
      {
        icon: "call.svg",
      },
      {
        icon: "video.svg",
      },
    ],
  },
  {
    title: "Widgets",
    description: "For integrating on simple webpages",
    items: [
      {
        title: "Wordpress",
      },
      {
        title: "PHP",
      },
      {
        title: "Laravel",
      },
    ],
    icons: [
      {
        icon: "chat.svg",
      },
      {
        icon: "call.svg",
      },
      {
        icon: "video.svg",
      },
    ],
  },
  {
    title: "SDKs Chat",
    description:
      "For developers looking to develop chat functionalities from scratch",
    icons: [{ icon: "chat.svg" }],
    items: [
      {
        title: "React",
      },
      {
        title: "React Native",
      },
      {
        title: "Android",
      },
      {
        title: "iOS Swift",
      },
      {
        title: "Ionic",
      },
      {
        title: "Flutter",
      },
    ],
  },
  {
    title: "SDKs Call",
    description:
      "For developers looking to develop voice and video calling functionalities from scratch",
    icons: [{ icon: "call.svg" }, { icon: "video.svg" }],
    items: [
      {
        title: "React",
      },
      {
        title: "React Native",
      },
      {
        title: "Android",
      },
      {
        title: "iOS Swift",
      },
      {
        title: "Ionic",
      },
      {
        title: "Flutter",
      },
    ],
  },
];

function IntegrationMethods() {
  return (
    <div className="con--cust mb-10 mt-40 flex flex-col items-center">
      <div className="flex w-full  max-w-[1440px] flex-col items-start">
        <h1 className="h--cust m-0 mb-1 text-cst-sec-title  dark:text-cst-sec-title-dark">
          Integration methods
        </h1>
        <p className="font--custom--thin p--cust mt-1 text-cst-sec-subtitle dark:text-cst-sec-title-dark">
          Choose from your preferred implementation method
        </p>
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 md:gap-[40px]">
          {DATA.slice(0, 2).map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
        <hr className="hidden w-full bg-cst-border dark:bg-cst-border-dark md:flex" />
        <div className="mt-4 grid w-full grid-cols-1 gap-5 md:mt-0 md:grid-cols-2 md:gap-[40px]">
          {DATA.slice(2).map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default IntegrationMethods;

function Card({ title, description, items, icons }) {
  return (
    <div className="w-full px-2 py-[12px] md:px-[40px]">
      {/* icons */}
      <div
        style={{
          boxShadow: "4px 4px 40px 0px #0000000A",
        }}
        className="hidden w-fit flex-row items-center  space-x-2 rounded-xl bg-cst-white p-2 dark:bg-cst-black md:flex"
      >
        {icons.map((icon) => (
          <img
            key={icon.icon}
            src={`/imgs/icons/${icon.icon}`}
            alt={icon.icon}
            className="h-7 w-7 object-contain"
          />
        ))}
      </div>
      {/* text */}
      <div className="mb-2 mt-4">
        <h3 className="cst-row m-0 mb-2 justify-between text-cst-sec-title dark:text-cst-sec-title-dark md:mb-0">
          <span>{title}</span>
          <div
            style={{
              boxShadow: "4px 4px 40px 0px #0000000A",
            }}
            className="flex w-fit flex-row items-center  space-x-2 rounded-xl bg-cst-white p-2 dark:bg-cst-black md:hidden"
          >
            {icons.map((icon) => (
              <img
                key={icon.icon}
                src={`/imgs/icons/${icon.icon}`}
                alt={icon.icon}
                className="h-7 w-7 object-contain"
              />
            ))}
          </div>
        </h3>
        <p className="font--custom--thin p--cust mt-1 text-cst-sec-subtitle dark:text-cst-sec-title-dark">
          {description}
        </p>
      </div>
      {/* items */}
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <a
            key={index}
            className="flex w-fit flex-col items-center justify-center rounded-xl border border-solid border-cst-border px-3 py-[6px] text-sm text-[#604BC5] dark:border-cst-border-dark"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}
