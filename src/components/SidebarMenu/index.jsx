import React from "react";
import { useHistory } from "@docusaurus/router";
import clsx from "clsx";
import VersionDropdown from "@theme/NavbarItem/DocsVersionDropdownNavbarItem";
import useGlobalData from "@docusaurus/useGlobalData";

import SectionsMenu from "../SectionsMenu";
import { useSectionMenu } from "../../lib/useSectionMenu";
import styles from "./styles.module.css";

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

  if (sections) {
    return (
      <div className={styles.container}>
        <SectionsMenu
          defaultValue={docId}
          values={sections}
          onValueChange={handleSectionChange}
          triggerClassName={styles.sectionsMenu}
        />
        <VersionDropdown
          docsPluginId={docId}
          dropdownItemsBefore={[]}
          dropdownItemsAfter={[]}
        />
      </div>
    );
  }

  return (
    <div className={clsx("sidebar-menu", styles.multiSectionContainer)}>
      {groups.map((group) => {
        const isDocIdInGroup = group.docs.find((doc) => doc.docId === docId);
        if (!isDocIdInGroup) return null;
        const { name, docs, className } = group;

        const navigateToFirstSection = () => handleSectionChange(docs[0].docId);

        return (
          <div
            className={clsx(styles.section, styles.sectionActive)}
            tabIndex={0}
            key={group.name}>
            <div className={clsx(styles.label, className)}>{name}</div>
            <div>
              <div className={styles.row}>
                <SectionsMenu
                  defaultValue={docId}
                  values={docs}
                  onValueChange={handleSectionChange}
                  triggerClassName={styles.sectionsMenu}
                />
                <VersionDropdown
                  docsPluginId={docId}
                  dropdownItemsBefore={[]}
                  dropdownItemsAfter={[]}
                />
              </div>
              {/* <p className={styles.description}>{description}</p> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
