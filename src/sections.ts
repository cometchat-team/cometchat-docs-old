import type { ComponentProps, ReactNode } from "react";
import {
  ReactIcon,
  AngularIcon,
  AndroidIcon,
  AppleIcon,
  FlutterIcon,
  HTMLIcon,
  JSIcon,
} from "./icons";

export type Section = { docId: string } & (
  | {
      section: false;
    }
  | {
      section: string;
      icon: (props: ComponentProps<"svg">) => ReactNode;
      name: string;
    }
);

const SECTIONS: Section[] = [
  {
    name: "React",
    docId: "react",
    icon: ReactIcon,
    section: "web-prebuilt",
  },
  {
    name: "JavaScript",
    docId: "javascript",
    icon: JSIcon,
    section: "web-prebuilt",
  },

  // Plugin SDKs
  // - web
  {
    name: "Javascript",
    docId: "plugin-sdk",
    icon: JSIcon,
    section: "plugin-sdk",
  },

  // Web SDKs
  // - first-group-section
  {
    name: "1 1st Category",
    docId: "first-first-category",
    icon: HTMLIcon,
    section: "first-group-section",
  },
  {
    name: "1 2nd Category",
    docId: "first-second-category",
    icon: HTMLIcon,
    section: "first-group-section",
  },
  {
    name: "1 3rd Category",
    docId: "first-third-category",
    icon: HTMLIcon,
    section: "first-group-section",
  },

  // - second-group-section
  {
    name: "2 1st Category",
    docId: "second-first-category",
    icon: JSIcon,
    section: "second-group-section",
  },
  {
    name: "2 2nd Category",
    docId: "second-second-category",
    icon: JSIcon,
    section: "second-group-section",
  },
  // Mobile SDKs
  {
    name: "Android Core",
    docId: "android-core",
    icon: AndroidIcon,
    section: "mobile-core",
  },

  {
    name: "iOS Core",
    docId: "ios-core",
    icon: AppleIcon,
    section: "mobile-core",
  },

  {
    name: "React Native Core",
    docId: "rn-core",
    icon: ReactIcon,
    section: "mobile-core",
  },
  {
    name: "Flutter Core",
    docId: "flutter-core",
    icon: FlutterIcon,
    section: "mobile-core",
  },
  {
    name: "React Native",
    docId: "react-native",
    icon: ReactIcon,
    section: "mobile-sdk",
  },
  {
    name: "Android",
    docId: "android",
    icon: AndroidIcon,
    section: "mobile-sdk",
  },
  {
    name: "iOS",
    docId: "ios",
    icon: AppleIcon,
    section: "mobile-sdk",
  },
  {
    name: "Flutter",
    docId: "flutter",
    icon: FlutterIcon,
    section: "mobile-sdk",
  },
];

export type SectionsGroup = {
  name: string;
  section: string;
  description?: string;
  className?: string;
};

const SECTION_GROUPS: SectionsGroup[][] = [
  [
    {
      name: "UI Kit",
      section: "web-prebuilt",
      className: "deprecated-badge",
    },
  ],
  [
    {
      name: "First Group Name",
      section: "first-group-section",
      description: "First Group Section Description",
    },
    {
      name: "Second Group Name",
      section: "second-group-section",
      description: "Second Group Section Description",
    },
  ],
  [
    {
      name: "UI Kit",
      section: "mobile-sdk",
      description: "Use our pre-built mobile SDK, ready to go",
    },
    {
      name: "Core SDK",
      section: "mobile-core",
      description: "Build your own UI from scratch, use our low level APIs.",
    },
  ],
  [
    {
      name: "Plugin SDK for Web",
      section: "plugin-sdk",
      description: "Build real-time collaborative apps using my-website.",
    },
  ],
];

export { SECTIONS, SECTION_GROUPS };
