/**
 * For Docs dropdown Versions
 */

import React from "react";
import {
  useVersions,
  useActiveDocContext,
} from "@docusaurus/plugin-content-docs/client";
import { useDocsPreferredVersion } from "@docusaurus/theme-common";
import { useDocsVersionCandidates } from "@docusaurus/theme-common/internal";
import { translate } from "@docusaurus/Translate";
import { useLocation } from "@docusaurus/router";
import Link from "@docusaurus/Link";
import { ChevronDown } from "react-feather";
import { useHistory } from "@docusaurus/router";
import clsx from "clsx";

const getVersionMainDoc = (version) =>
  version.docs.find((doc) => doc.id === version.mainDocId);
export default function DocsVersionDropdownNavbarItem({
  mobile,
  docsPluginId,
  dropdownActiveClassDisabled,
  dropdownItemsBefore,
  dropdownItemsAfter,
  ...props
}) {
  const { search, hash } = useLocation();
  const activeDocContext = useActiveDocContext(docsPluginId);
  const versions = useVersions(docsPluginId);
  const { savePreferredVersionName } = useDocsPreferredVersion(docsPluginId);
  const versionLinks = versions.map((version) => {
    const versionDoc =
      activeDocContext.alternateDocVersions[version.name] ??
      getVersionMainDoc(version);
    return {
      label: version.label,
      // preserve ?search#hash suffix on version switches
      to: `${versionDoc.path}${search}${hash}`,
      isActive: () => version === activeDocContext.activeVersion,
      isSelected: () => version.name === activeDocContext.preferredVersion,
      onClick: () => savePreferredVersionName(version.name),
    };
  });
  const items = [
    ...dropdownItemsBefore,
    ...versionLinks,
    ...dropdownItemsAfter,
  ];
  const dropdownVersion = useDocsVersionCandidates(docsPluginId)[0];
  const history = useHistory();
  // Mobile dropdown is handled a bit differently
  const dropdownLabel =
    mobile && items.length > 1
      ? translate({
          id: "theme.navbar.mobileVersionsDropdown.label",
          message: "Versions",
          description:
            "The label for the navbar versions dropdown on mobile view",
        })
      : dropdownVersion.label;

  // DROPDOWN FOR DOCS WITH ONE VERSION
  if (items.length <= 1) {
    return (
      <div
        className="flex !min-w-[80px] flex-row items-center justify-center rounded-lg 
       px-2 py-[11px] dark:text-[#FFFFFFBF]  text-sm text-[#14131d80]"
      >
        {dropdownLabel}
      </div>
    );
  }

  return (
    // VERSION DROPDOWN FOR DOCS WITH VERSIONS
    <div className="dropdown">
      <label
        tabIndex={0}
        className="btn flex !h-[44px] !max-h-[44px] !min-h-[44px]  !w-[80px] flex-row items-center rounded-none
       border-x-0 border-t-0 border-b border-dashed  border-[#14131d80] dark:border-[#7B7A8280] bg-transparent px-2 text-sm dark:text-[#FFFFFFBF] text-[#14131d80]"
      >
          {dropdownLabel}

      </label>
      <ul
        tabIndex={0}
        className="menu dropdown-content rounded-box z-[9999] w-52 bg-base-100  p-2 shadow"
      >
        {items.map((childItemProps, index) => (
          <Link 
          style={{
            textDecoration: "none",
            color: "#14131d80",
          }}
           key={index} to={childItemProps.to}>
            <li>
              <a
                className={clsx(
                  childItemProps.to === history.location.pathname + "/" &&
                    "!bg-[#00000016]"
                )}
              >
                {childItemProps.label}
              </a>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
