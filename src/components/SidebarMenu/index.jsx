import React from "react";
import { useHistory } from "@docusaurus/router";
import clsx from "clsx";
import VersionDropdown from "@theme/NavbarItem/DocsVersionDropdownNavbarItem";
import useGlobalData from "@docusaurus/useGlobalData";
import * as Select from "@radix-ui/react-select";

import SectionsMenu from "../SectionsMenu";
import { useSectionMenu } from "../../lib/useSectionMenu";
import SectionsMenuDropdown from "../SectionsDropdown";

function getPrettyPath(path) {
  return path.slice(-1) === "/" ? path.slice(0, -1) : path;
}

export default function SidebarMenu() {
  const router = useHistory();
  const data = useSectionMenu();
  const { docId, currentSection, sections, groups } = data;

  const globalData = useGlobalData();
  const allDocs = globalData["docusaurus-plugin-content-docs"];

  if (!sections && !groups) return null;

  const handleSectionChange = (selectedSection) => {
    if (selectedSection !== docId) {
      const { pathname, hash } = router.location;
      const page =
        `/${selectedSection}/` + pathname.split("/").slice(2).join("/");

      const selectedSectionDocs = allDocs[selectedSection].versions[0].docs;

      if (selectedSectionDocs.find((doc) => doc.path === page)) {
        const path = page + (hash && hash.length > 0 ? "#" + hash : "");
        router.push(getPrettyPath(path));
      } else {
        const path = selectedSectionDocs[0].path;
        router.push(getPrettyPath(path));
      }
    }
  };

  return (
    <div
      className={clsx(
        "sidebar-menu",
        "border-0 border-b border-solid border-[#14131D14] bg-[#F4F4F9]",
        "px-5 py-4"
      )}
    >
      {groups.map((group) => {
        const isDocIdInGroup = group.docs.find((doc) => doc.docId === docId);
        if (!isDocIdInGroup) return null;
        const { name, docs, className } = group;

        return (
          <div tabIndex={0} key={group.name}>
            <div className={clsx(className, "mb-1 text-2xl font-bold")}>
              {name}
            </div>
            <div>
              <div className="flex w-full flex-row items-center justify-between">
                <SectionsMenuDropdown
                  defaultValue={docId}
                  values={docs}
                  onValueChange={handleSectionChange}
                  triggerClassName=""
                />
                <VersionDropdown
                  docsPluginId={docId}
                  dropdownItemsBefore={[]}
                  dropdownItemsAfter={[]}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
