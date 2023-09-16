import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useLocation } from "@docusaurus/router";
import {
  useSidebarBreadcrumbs,
  useHomePageRoute,
} from "@docusaurus/theme-common/internal";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";
import { ArrowRight, ChevronRight } from "react-feather";

function extractURL(url, item) {
  const my_list = url.split("/");
  // check if item in the list
  if (my_list.includes(item)) {
    // get the first items before the item
    const index = my_list.indexOf(item);
    const new_list = my_list.slice(0, index + 1);
    return new_list.join("/");
  } else {
    return url;
  }
}

// TODO move to design system folder
function BreadcrumbsItemLink({ children, href, isLast }) {
  const className = "breadcrumbs__link";
  if (isLast) {
    return (
      <span className={className} itemProp="name">
        {children}
      </span>
    );
  }
  return href ? (
    <Link className={className} href={href} itemProp="item">
      <span itemProp="name">{children}</span>
    </Link>
  ) : (
    // TODO Google search console doesn't like breadcrumb items without href.
    // The schema doesn't seem to require `id` for each `item`, although Google
    // insist to infer one, even if it's invalid. Removing `itemProp="item
    // name"` for now, since I don't know how to properly fix it.
    // See https://github.com/facebook/docusaurus/issues/7241
    <span className={className}>{children}</span>
  );
}
// TODO move to design system folder
function BreadcrumbsItem({ children, active, index, addMicrodata }) {
  return (
    <li
      {...(addMicrodata && {
        itemScope: true,
        itemProp: "itemListElement",
        itemType: "https://schema.org/ListItem",
      })}
      className={clsx("breadcrumbs__item", {
        "breadcrumbs__item--active": active,
      })}>
      {children}
      <meta itemProp="position" content={String(index + 1)} />
    </li>
  );
}
function HomeBreadcrumbItem() {
  const homeHref = useBaseUrl("/");
  return (
    <li className="breadcrumbs__item">
      <Link
        aria-label={translate({
          id: "theme.docs.breadcrumbs.home",
          message: "Home page",
          description: "The ARIA label for the home page in the breadcrumbs",
        })}
        className={clsx(
          "breadcrumbs__link text-[#7B7A82]",

          styles.breadcrumbsItemLink
        )}
        href={homeHref}>
        Home
      </Link>
    </li>
  );
}
export default function DocBreadcrumbs() {
  const breadcrumbs = useSidebarBreadcrumbs();
  const homePageRoute = useHomePageRoute();
  const location = useLocation();

  if (!breadcrumbs) {
    return null;
  }
  return (
    <nav
      className={clsx(
        ThemeClassNames.docs.docBreadcrumbs,
        styles.breadcrumbsContainer
      )}
      aria-label={translate({
        id: "theme.docs.breadcrumbs.navAriaLabel",
        message: "Breadcrumbs",
        description: "The ARIA label for the breadcrumbs",
      })}>
      <ul
        className="breadcrumbs items-center "
        itemScope
        itemType="https://schema.org/BreadcrumbList">
          {/* First one */}
        {homePageRoute && <HomeBreadcrumbItem />}
        {/* middle ones */}
        <ChevronRight size={20} className="text-[#7B7A82]" />
        {location.pathname
          .split("/")
          .slice(1, 4)
          .map((item, idx) => {
            return (
              <>
              <BreadcrumbsItem
                key={idx}
                active={false}
                index={idx}
                addMicrodata={!!location.pathname}>
                <BreadcrumbsItemLink
                
                  href={extractURL(location.pathname, item)}
                  isLast={false}>
                  {item} 
                </BreadcrumbsItemLink>
              </BreadcrumbsItem>
            <ChevronRight size={20} className="text-[#7B7A82]" />
            </>
            );
          })}
          {/* Last one */}
        {breadcrumbs.map((item, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          return (
            <BreadcrumbsItem
              key={idx}
              active={isLast}
              index={idx}
              addMicrodata={!!item.href}>
              <BreadcrumbsItemLink href={item.href} isLast={isLast}>
                {item.label}
              </BreadcrumbsItemLink>
            </BreadcrumbsItem>
          );
        })}
      </ul>
    </nav>
  );
}
