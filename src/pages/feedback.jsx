import React, { useState } from "react";
import Layout from "@theme/Layout";
import HomeFooter from "../components/homepage/Footer";

export default function FeedbackPage() {
  const [feedbackEmail, setFeedbackEmail] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  return (
    <Layout
      title="Feedback"
      wrapperClassName="faq-page bg-secondary-1000"
      noFooter>
      {/* Hero? */}
      <section className="noise-bg px-6 py-24">
        <div className="mx-auto flex max-w-7xl flex-col place-items-center justify-center">
          <div className="mb-12 text-2xl font-semibold text-zinc-800 dark:text-zinc-300">
            Happy to receive your feedback!
          </div>

          <div className="relative flex w-full max-w-md items-center text-zinc-700 dark:text-white">
            <input
              type="email"
              className="-ml-5 h-10 flex-1 rounded-md border border-solid border-zinc-200 bg-white px-3 pl-8 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-secondary-1000 dark:text-zinc-200"
              placeholder="Email address"
              value={feedbackEmail}
              onInput={(e) => setFeedbackEmail(e.currentTarget.value)}
            />
          </div>
          <div className="relative mt-6 flex w-full max-w-md items-center text-zinc-700 dark:text-white">
            <textarea
              rows={5}
              type="text"
              className="-ml-5  flex-1 rounded-md border border-solid border-zinc-200 bg-white px-3 pl-8 pt-2 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-secondary-1000 dark:text-zinc-200"
              placeholder="Your feedback"
              value={feedbackMessage}
              onInput={(e) => setFeedbackMessage(e.currentTarget.value)}
            />
          </div>
          <div className="relative mt-6 flex w-full max-w-md items-end justify-end text-zinc-700 dark:text-white">
            <div
              className="dev-portal-signup dev-portal-link "
              disabled={feedbackEmail === "" || feedbackMessage === ""}>
              Send
            </div>
          </div>
        </div>
      </section>

      <HomeFooter className="-mt-20 pb-12 pt-32" />
    </Layout>
  );
}
