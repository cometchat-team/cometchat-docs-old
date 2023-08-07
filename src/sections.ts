import type { ComponentProps, ReactNode } from "react";
import { ReactIcon } from "./icons";

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
  // - Chat / SDKs
  {
    name: "React",
    docId: "react",
    icon: ReactIcon,
    section: "chat-sdks",
  },
  {
    name: "NextJS",
    docId: "next-js",
    icon: ReactIcon,
    section: "chat-sdks",
  },
];

const SECTION_GROUPS: SectionsGroup[][] = [
  [
    {
      name: "Chat SDKs",
      section: "chat-sdks",
      description: "Description for Chat SDKs",
    },
  ],
];

export { SECTION_GROUPS, SECTIONS };
