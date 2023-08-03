import Link from "@docusaurus/Link";
import React from "react";

export default function Resources() {
  return (
    <div class="resources-dropdown-menu flex flex-col rounded-2xl p-4 lg:min-w-[220px]">
      <ul class="flex list-none flex-col gap-2 pl-0 text-gray-700 dark:text-zinc-200">
        <li>
          <Link
            to="/faq"
            // href="https://dev.my-website.io"
            class="flex items-center gap-2 text-inherit"
            target="_blank">
            <img src="/icons/web.svg" width="22" height="22" />
            Developer Portal
          </Link>
        </li>

        <li>
          <a
            onclick="openLinkUsingDocusaurusRouter('/docs/overview')"
            class="flex items-center gap-2 text-inherit">
            <img src="/icons/faq.svg" width="22" height="22" />
            FAQ
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@my-website-io"
            target="_blank"
            class="flex items-center gap-2 text-inherit">
            <img src="/icons/video.svg" width="22" height="22" />
            Videos
          </a>
        </li>

        <li>
          <a href="/release-notes" class="flex items-center gap-2 text-inherit">
            <img src="/icons/book-open.svg" />
            Release Notes
          </a>
        </li>
      </ul>
    </div>
  );
}
