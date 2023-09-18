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
        className="absolute right-0 top-0 h-40 md:h-[230px] md:w-[230px] object-contain"
      />
      <img
        src="/imgs/planets1.svg"
        alt="Planets"
        className="absolute z-50 -left-[9%] md:-left-[5%] bottom-16 h-40 md:h-[270px] w-40 md:w-[270px] object-contain"
      />
      {/* middle */}
      <div className="mt-16 mb-6 flex w-3/4 md:w-1/2 max-w-[1440px] flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-extrabold">Get Started</h1>
        <p className="p--cust  font--custom--thin">
          Seamlessly integrate real-time chat, voice, and video
          functionalities.Begin your Cometchat implementation by selecting the
          technologies that best suit your organizational needs.
        </p>
      </div>
      {/* Cards */}
      <div className="grid w-11/12 md:w-[calc(100%-352px)]  max-w-[1440px] grid-cols-2 md:grid-cols-4 gap-3 md:gap-7">
        {DATA.map((item) => (
          <CardItem key={item.title} {...item} />
        ))}
      </div>
      {/* link */}
      <a className="mb-16 mt-6 text-[#6852D6]">
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
    <div className="flex flex-col items-start rounded-[20px] border border-solid border-[#14131D14] bg-[#F3F3F8] py-3 pr-3 pl-4">
      <img
        src={`/imgs/logos/${icon}`}
        alt={title}
        className="h-12 w-12 object-contain grayscale"
      />
      <h3 className="mt-1 text-[18px] font-bold mb-0">{title}</h3>
    </div>
  );
}

function ADCard() {
  return (
    <div className="absolute -bottom-[140px] md:-bottom-[95px]  left-1/2 z-10 flex w-11/12 md:w-3/4 max-w-[1440px] -translate-x-1/2 transform flex-col items-center justify-center rounded-[32px] bg-white">
      <div
        className="relative flex h-[280px] md:h-[190px] w-full flex-col items-start overflow-hidden rounded-[32px] bg-[#14131D0F] border border-solid border-[#14131D0A] bg-opacity-10  px-4 pt-6 md:px-7"
        style={{
          boxShadow: "0px 4px 20px 0px #14131D0F",
        }}>
        <h1 className="mb-1 text-2xl">Introducing CometChat UI Kits v4 Beta</h1>
        <p className="font--custom--thin p--cust">
          V4 UI kits offer a modular design, extended functionality, and
          enhanced
          <br />
          customization for a tailored chat experience.
        </p>
        <a
          style={{
            textDecoration: "none",
          }}
          className="mt-2 font--custom--thin font-thin
      rounded-xl bg-[#6852D6]
       px-7 py-[10px] text-xs text-[#FCFCFE]"
          href="">
          Learn more
        </a>
        <img
          src="/imgs/planets2.svg"
          alt="Planets2"
          className="absolute bottom-0 right-0 w-[180px] md:w-[250px] object-contain"
        />
      </div>
    </div>
  );
}
