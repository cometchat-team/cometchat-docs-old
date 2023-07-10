import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import ThemedImage from "@theme/ThemedImage";
import Head from "@docusaurus/Head";
import { useState } from "react";
import { icons } from "../../data/icons";
import SDKLink from "./SDKLink";
const sdksData = require("../../data/sdks.json");

function SectionPart({ title, index, id, description, parts }) {
  return (
    <div
      className="sdk-section my-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
      data-section={id}
      id={id}>
      <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
        <h3 className="text-4xl font-semibold">{title}</h3>
        <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
          {description}
        </p>
      </div>
      {parts.map((partItem, index) => (
        <div
          key={index}
          className={clsx(
            "flex-1 bg-secondary-800 p-6 px-8 ",
            index == 0 && "lg:rounded-l-3xl",
            index == 1 && "lg:rounded-r-3xl"
          )}>
          <h4>{partItem.title}</h4>
          <p className="text-sm leading-relaxed text-text-400">
            {partItem.description}
          </p>
          <div>
            <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
              {partItem.items.map((item, ind) => (
                <li key={ind}>
                  <SDKLink
                    href={item.link}
                    Icon={icons[item.icon]}
                    label={item.title}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SDKsSection() {
  const [visibleSection, setVisibleSection] = useState(sdksData.pills[0].id);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const section = entry.target.getAttribute("data-section");

          if (entry.isIntersecting) {
            entry.target.classList.add("intersected");
            setVisibleSection(section);
          }
        }
      },
      { rootMargin: "-50% 0% -50% 0%" }
    );

    const elements = document.querySelectorAll(".sdk-section");
    for (const el of elements) {
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  function Pill({ section, title }) {
    return (
      <div
        className={clsx(
          "flex-1 cursor-pointer whitespace-nowrap rounded-md px-6 py-2 text-center font-jakarta text-sm font-semibold",
          visibleSection === section
            ? "bg-primary text-white"
            : "text-black dark:text-white"
        )}
        onClick={() => {
          document
            .getElementById(section)
            ?.scrollIntoView({ behavior: "smooth", block: "center" });
        }}>
        {title}
      </div>
    );
  }

  return (
    <section className="bg-secondary-1000 px-4 py-20" id="start-building">
      <Head>
        <link rel="prefetch" href={sdksData.pills[2].whiteImg} />
        <link rel="prefetch" href={sdksData.pills[2].blackImg} />
      </Head>
      <div className="mx-auto max-w-7xl">
        <div className="dyte-badge">{sdksData.title}</div>

        <div className="sticky top-14 z-20 -mt-4 flex flex-col items-center gap-6 bg-secondary-1000 py-6 lg:flex-row lg:justify-between lg:py-0">
          <h2 className="my-0 text-center font-jakarta lg:text-3xl">
            {sdksData.comment}
          </h2>

          <div className="mx-auto flex h-20 w-full flex-1 items-center justify-center self-start lg:w-auto lg:justify-end">
            <div className="inline-flex items-center rounded-lg bg-zinc-100 p-2 text-sm dark:bg-zinc-800 lg:text-base">
              {sdksData.pills.map((item, index) => (
                <Pill key={index} section={item.id} title={item.title} />
              ))}
            </div>
          </div>
        </div>
        {/* Content */}
        {sdksData.pills.slice(0, 2).map((pill, index) => (
          <SectionPart
            key={index}
            title={pill.title}
            id={pill.id}
            description={pill.description}
            parts={pill.parts}
          />
        ))}
        {/* 
        

        <div
          className="sdk-section mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="mobile"
          id="mobile"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">Mobile</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              Plan to build a video/voice solution for Android, React Native,
              iOS, or Flutter, check the docs here to understand how Dyte can
              help you deliver best-in-class real-time communication experience
              for your mobile applications.
            </p>
            
          </div>
          <div className="flex flex-1 flex-col bg-secondary-800 p-6 px-8 lg:rounded-l-3xl">
            <h4>Prebuilt SDK</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Integrate video and voice calls to your app or website in minutes
              using Dyte&apos;s prebuilt design library of UI components.
            </p>
            <ul className="flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink href="android" Icon={KotlinIcon} label="Android" />
              </li>
              <li>
                <SDKLink href="ios" Icon={SwiftIcon} label="iOS" />
              </li>
              <li>
                <SDKLink
                  href="react-native"
                  Icon={ReactIcon}
                  label="React Native"
                />
              </li>
              <li>
                <SDKLink href="flutter" Icon={FlutterIcon} label="Flutter" />
              </li>
            </ul>
           
          </div>
          <div className="flex-1 rounded-b-3xl bg-secondary-800 p-6 px-8 lg:rounded-r-3xl lg:rounded-bl-none">
            <h4>Core SDK</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Build high-quality custom video and voice calls with real-time
              communication using fully customizable and easy to integrate Core
              SDKs.
            </p>
            <ul className="flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink
                  href="android-core"
                  Icon={KotlinIcon}
                  label="Android"
                />
              </li>
              <li>
                <SDKLink
                  Icon={FlutterIcon}
                  label="Flutter"
                  href="flutter-core"
                />
              </li>
              <li>
                <SDKLink href="rn-core" Icon={ReactIcon} label="React Native" />
              </li>
              <li>
                <SDKLink href="ios-core" Icon={SwiftIcon} label="iOS" />
              </li>
            </ul>
          </div>
        </div>
        <div
          className="sdk-section mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="plugin"
          id="plugin"
        >
          <div className="flex flex-1 flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">Plugin SDK</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              Add the most immersive, collaborative, and more human interaction
              right in your video and voice calls using Dyte&apos;s
              out-of-the-box plugins. Dive into the resources here to get
              started with building your own plugins for your applications.
            </p>
            <Link className="text-sm" href="/plugin-sdk">
              Learn More &rarr;
            </Link>
          </div>
          <div className="flex flex-[3] items-center justify-center rounded-3xl p-6 px-8 lg:justify-end">
            <ThemedImage
              sources={{
                light: '/static/landing-page/plugin-sdk-light.png',
                dark: '/static/landing-page/plugin-sdk-dark.png',
              }}
              alt="Plugin SDK Usage Preview"
              loading="lazy"
            />
          </div>
        </div> */}
      </div>
      <div className="text-center text-text-400">
        <p>
          {sdksData.contact.question}{" "}
          <Link href={sdksData.contact.link}>{sdksData.contact.contact}</Link>
        </p>
      </div>
    </section>
  );
}
