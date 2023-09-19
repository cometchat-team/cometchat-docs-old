import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import NavbarItem from "@theme/NavbarItem";
function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}
// The primary menu displays the navbar items
export default function NavbarMobilePrimaryMenu() {
  const mobileSidebar = useNavbarMobileSidebar();
  // TODO how can the order be defined for mobile?
  // Should we allow providing a different list of items?
  const items = useNavbarItems();
  return (
    <ul className="menu__list flex flex-col">
      {items.map((item, i) => {
        if (item.label === "Overview" || item.label === "Implementation") {
          return (
            <label
              htmlFor="my-drawer"
              key={i}
              className="btn btn-ghost drawer-button w-full cts-rom justify-between"
            >
              <span className="text-[#14131d89] text-xs ">{item.label}</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="#14131d89"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m9 6l6 6l-6 6"
                />
              </svg>
            </label>
          );
        } else {
          return <NavbarItem mobile {...item} />;
        }
      })}
    </ul>
  );
}
