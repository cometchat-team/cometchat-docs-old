import React from "react";
import Layout from "@theme/Layout";
const metadata = require("../data/metadata.json");
import Head from "@docusaurus/Head";
import Hero from "../components/Hero";
import IntegrationMethods from "../components/IntegrationMethods";

export default function Homepage() {
  return (
    <Layout
      description={metadata.description}
      wrapperClassName="homepage flex flex-col"
      noFooter>
      <Head>
        <link rel="prefetch" href="/css/elements.min.css" />
      </Head>
      <Hero />
      <IntegrationMethods />
    </Layout>
  );
}
