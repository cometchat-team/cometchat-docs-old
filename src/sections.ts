import type { ComponentProps, ReactNode } from "react";
import {
  JSIcon,
  IonicIcon,
  ReactIcon,
  AndroidIcon,
  AppleIcon,
  FlutterIcon,
} from "./icons";

export type SectionsGroup = {
  name: string;
  section: string;
  description?: string;
  className?: string;
};

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
  // - Chat / SDK
  {
    name: "JavaScript",
    docId: "chat-sdks-javascript",
    icon: JSIcon,
    section: "chat-sdk",
  },
  {
    name: "Android",
    docId: "chat-sdks-android",
    icon: AndroidIcon,
    section: "chat-sdk",
  },
  {
    name: "IOS",
    docId: "chat-sdks-ios",
    icon: AppleIcon,
    section: "chat-sdk",
  },
  {
    name: "Flutter",
    docId: "chat-sdks-flutter",
    icon: FlutterIcon,
    section: "chat-sdk",
  },
  {
    name: "React Native",
    docId: "chat-sdks-react-native",
    icon: ReactIcon,
    section: "chat-sdk",
  },
  {
    name: "Ionic",
    docId: "chat-sdks-ionic",
    icon: IonicIcon,
    section: "chat-sdk",
  },
  // - Chat / UI Kits
  {
    name: "Android",
    docId: "chat-ui-kits-android",
    icon: AndroidIcon,
    section: "chat-ui-kits",
  },
  {
    name: "IOS",
    docId: "chat-ui-kits-ios",
    icon: AppleIcon,
    section: "chat-ui-kits",
  },
  {
    name: "Flutter",
    docId: "chat-ui-kits-flutter",
    icon: FlutterIcon,
    section: "chat-ui-kits",
  },
  {
    name: "React Native",
    docId: "chat-ui-kits-react-native",
    icon: ReactIcon,
    section: "chat-ui-kits",
  },
  {
    name: "Angular",
    docId: "chat-ui-kits-angular",
    icon: IonicIcon,
    section: "chat-ui-kits",
  },
  {
    name: "React",
    docId: "chat-ui-kits-react",
    icon: ReactIcon,
    section: "chat-ui-kits",
  },
  {
    name: "Vue",
    docId: "chat-ui-kits-vue",
    icon: JSIcon,
    section: "chat-ui-kits",
  },

  // - Call / SDK
  {
    name: "JavaScript",
    docId: "call-sdks-javascript",
    icon: JSIcon,
    section: "call-sdk",
  },
  {
    name: "Android",
    docId: "call-sdks-android",
    icon: AndroidIcon,
    section: "call-sdk",
  },
  {
    name: "IOS",
    docId: "call-sdks-ios",
    icon: AppleIcon,
    section: "call-sdk",
  },
  {
    name: "Flutter",
    docId: "call-sdks-flutter",
    icon: FlutterIcon,
    section: "call-sdk",
  },
  {
    name: "React Native",
    docId: "call-sdks-react-native",
    icon: ReactIcon,
    section: "call-sdk",
  },
  {
    name: "Ionic",
    docId: "call-sdks-ionic",
    icon: IonicIcon,
    section: "call-sdk",
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
      name: "UI Kits",
      section: "chat-ui-kits",
      description: "Description for Chat SDKs",
    },
  ],
  [
    {
      name: "Call SDK",
      section: "call-sdk",
      description: "Description for Call SDKs",
    },
  ],
];

export { SECTION_GROUPS, SECTIONS };
