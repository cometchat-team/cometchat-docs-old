import React from "react";

const DATA = [
  {
    title: "UI Kits",
    description:
      "For developers looking to quickly implement chat with pre-defined business logic along with the UI",
    items: [
      {
        title: "React",
      },
      {
        title: "React Native",
      },
      {
        title: "Angular",
      },
      {
        title: "iOS Swift",
      },
      {
        title: "Android Kotlin",
      },
      {
        title: "Android Java",
      },
      {
        title: "Vue",
      },
    ],
    icons: [
      {
        icon: "chat",
      },
      {
        icon: "call",
      },
      {
        icon: "video",
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
        icon: "chat",
      },
      {
        icon: "call",
      },
      {
        icon: "video",
      },
    ],
  },
  {
    title: "SDKs Chat",
    description:
      "For developers looking to develop chat functionalities from scratch",
    icons: [{ icon: "chat" }],
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
    icons: [{ icon: "call" }, { icon: "video" }],
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
    <div className="mb-10 mt-[150px] flex w-full flex-col items-center">
      <div className="flex w-11/12 flex-col items-start">
        <h1 className="m-0 mb-1">Integration Methods</h1>
        <p>Choose from your preferred implementation method</p>
        <div className="grid w-full grid-cols-2 gap-10 px-24">
          {DATA.slice(0, 2).map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
        <hr className="w-full bg-[#14131D14]" />
        <div className="grid w-full grid-cols-2 gap-10 px-24">
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
    <div className="w-10/12 p-6">
      {/* icons */}
      <div
        style={{
          boxShadow: "4px 4px 40px 0px #0000000A",
        }}
        className="flex w-fit flex-row items-center space-x-2 rounded-xl bg-white p-2">
        {icons.map((icon) => (
          <img
            key={icon.icon}
            src={`/imgs/icons/${icon.icon}.svg`}
            alt={icon.icon}
            className="h-8 w-8 object-contain"
          />
        ))}
      </div>
      {/* text */}
      <div className="my-4">
        <h2 className="m-0">{title}</h2>
        <p>{description}</p>
      </div>
      {/* items */}
      <div className="flex flex-wrap gap-4">
        {items.map((item) => (
          <a className="flex w-fit flex-col items-center justify-center rounded-xl border border-solid border-[#604BC529] px-4 py-[6px] text-xs text-[#604BC5]">
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}
