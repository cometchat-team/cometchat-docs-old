import React from "react";

const DATA = [
  {
    title: "React",
    icon: "react.svg",
  },
  {
    title: "React Native",
    icon: "react.svg",
  },
  {
    title: "Android",
    icon: "android.svg",
  },
  {
    title: "Angular",
    icon: "angular.svg",
  },
  {
    title: "Vue",
    icon: "vue.svg",
  },
  {
    title: "iOS",
    icon: "swift.svg",
  },
  {
    title: "Javassript",
    icon: "js.svg",
  },
  {
    title: "Flutter",
    icon: "flutter.svg",
  },
  {
    title: "Wordpress",
    icon: "wp.svg",
  },
  {
    title: "PHP",
    icon: "php.svg",
  },
  {
    title: "Laravel",
    icon: "laravel.svg",
  },
  {
    title: "Ionic",
    icon: "ionic.svg",
  },
];

function Hero() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center bg-[#F3F3F8] pb-[110px]">
      {/* images */}
      <img
        src="/imgs/planets.svg"
        alt="Planets"
        className="absolute right-0 top-0 h-[200px] w-[200px] object-contain"
      />
      <img
        src="/imgs/planets1.svg"
        alt="Planets"
        className="absolute -left-[3%] bottom-0 h-[200px] w-[200px] object-contain"
      />
      {/* middle */}
      <div className="my-16 flex  w-1/2 max-w-[1440px] flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-semibold">Get Started</h1>
        <p className="text-xl">
          Seamlessly integrate real-time chat, voice, and video
          functionalities.Begin your Cometchat implementation by selecting the
          technologies that best suit your organizational needs.
        </p>
      </div>
      {/* Cards */}
      <div className="grid w-[calc(100%-352px)]  max-w-[1440px] grid-cols-4 gap-4">
        {DATA.map((item) => (
          <CardItem key={item.title} {...item} />
        ))}
      </div>
      {/* link */}
      <a className="my-12 text-[#6852D6]">
        CometChat fundamentals and key concepts
        <svg
          width="14"
          height="10"
          className="ml-2"
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 5H13M13 5L9.14286 1M13 5L9.14286 9"
            stroke="#6852D6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
      <ADCard />
    </div>
  );
}

export default Hero;

function CardItem({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex flex-col items-start rounded-3xl border border-solid border-[#14131D14] bg-[#F3F3F8] p-4">
      <img
        src={`/imgs/logos/${icon}`}
        alt={title}
        className="h-12 w-12 object-contain grayscale"
      />
      <h3 className="mt-2 text-xl font-semibold">{title}</h3>
    </div>
  );
}

function ADCard() {
  return (
    <div className="absolute -bottom-[110px]  left-1/2 z-10 flex w-3/4 max-w-[1440px] -translate-x-1/2 transform flex-col items-center justify-center rounded-[32px] bg-white">
      <div
        className="relative flex h-[220px] w-full flex-col items-start overflow-hidden rounded-[32px] bg-[#756CF6] bg-opacity-10 p-8"
        style={{
          boxShadow: "0px 4px 20px 0px #14131D0F",
        }}>
        <h1 className="mb-1">Introducing CometChat UI Kits v4 Beta</h1>
        <p>
          V4 UI kits offer a modular design, extended functionality, and
          enhanced
          <br />
          customization for a tailored chat experience.
        </p>
        <a
          style={{
            textDecoration: "none",
          }}
          className="mt-2
      rounded-xl bg-[#6852D6]
       px-5 py-3 text-sm text-[#FCFCFE]"
          href="">
          Learn more
        </a>
        <img
          src="/imgs/planets2.svg"
          alt="Planets2"
          className="absolute bottom-0 right-0 w-[280px] object-contain"
        />
      </div>
    </div>
  );
}
