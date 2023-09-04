import React from "react";
import Layout from "@theme/Layout";
const metadata = require("../data/metadata.json");
import Head from "@docusaurus/Head";
import Hero from "../components/Hero";
import IntegrationMethods from "../components/IntegrationMethods";
import APIMigration from "../components/APIMigration";
import SampleApps from "../components/SampleApps";
import ImplementationGuides from "../components/ImplementationGuides";
import Help from "../components/Help";

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
      <APIMigration />
      <SampleApps />
      <ImplementationGuides />
      <Help />
    </Layout>
  );
}
