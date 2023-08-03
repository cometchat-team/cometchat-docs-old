import { useHistory } from "@docusaurus/router";
import React from "react";

// Default implementation, that you can customize
export default function Root({ children }) {
  const history = useHistory();
  function openLinkUsingDocusaurusRouter(link) {
    history.push(link);
    console.log("-------->", link);
  }
  window.openLinkUsingDocusaurusRouter = openLinkUsingDocusaurusRouter;
  return <>{children}</>;
}
