import React, { useEffect, useState } from "react";
import Translate, { translate } from "@docusaurus/Translate";
import { PageMetadata } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
export default function NotFound() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3000 milliseconds (3 seconds) wait time, you can adjust this value as per your preference

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <PageMetadata
            title={translate({
              id: "theme.NotFound.title",
              message: "Page Not Found",
            })}
          />
          <Layout>
            <main className="container margin-vert--xl">
              <div className="row">
                <div className="col col--6 col--offset-3">
                  <h1 className="hero__title">
                    <Translate
                      id="theme.NotFound.title"
                      description="The title of the 404 page">
                      Page Not Found
                    </Translate>
                  </h1>
                  <p>
                    <Translate
                      id="theme.NotFound.p1"
                      description="The first paragraph of the 404 page">
                      We could not find what you were looking for.
                    </Translate>
                  </p>
                  <p>
                    <Translate
                      id="theme.NotFound.p2"
                      description="The 2nd paragraph of the 404 page">
                      Please contact the owner of the site that linked you to
                      the original URL and let them know their link is broken.
                    </Translate>
                  </p>
                </div>
              </div>
            </main>
          </Layout>
        </>
      )}
    </>
  );
}
