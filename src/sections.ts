import type { ComponentProps, ReactNode } from "react";
import { JSIcon,IonicIcon, ReactIcon, AndroidIcon, AppleIcon, FlutterIcon } from "./icons";

export type SectionsGroup = {
  name: string;
  section: string;
  description?: string;
  className?: string;
};

export type Section =
  & { docId: string }
  & (
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
  // - Chat / SDK
  {
    name: "JavaScript",
    docId: "javascript",
    icon: JSIcon,
    section: "chat-sdk",
  },
  {
    name: "Android",
    docId: "android",
    icon: AndroidIcon,
    section: "chat-sdk",
  },
  {
    name: "IOS",
    docId: "ios",
    icon: AppleIcon,
    section: "chat-sdk",
  },
  {
    name: "Flutter",
    docId: "flutter",
    icon: FlutterIcon,
    section: "chat-sdk",
  },
  {
    name: "React Native",
    docId: "react-native",
    icon: ReactIcon,
    section: "chat-sdk",
  },
  {
    name: "Ionic",
    docId: "ionic",
    icon: IonicIcon,
    section: "chat-sdk",
  },
];

const SECTION_GROUPS: SectionsGroup[][] = [
  [
    {
      name: "Chat SDK",
      section: "chat-sdk",
      description: "Description for Chat SDKs",
    },
  ],
  [
    {
      name: "Chat Wdigets",
      section: "chat-widgets",
      description: "Description for Chat Widgets",
    },
  ],
  [
    {
      name: "Call SDK",
      section: "call-sdk",
      description: "Description for Call SDKs",
    },
  ],
  [
    {
      name: "UI Kits",
      section: "ui-kits",
      description: "Description for UI Kits",
    },
  ],
];

export { SECTION_GROUPS, SECTIONS };
