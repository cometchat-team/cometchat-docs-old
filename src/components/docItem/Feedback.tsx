import React, { useState } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { ToastProvider, useToasts } from "react-toast-notifications";
import { LikeIcon, DislikeIcon } from "@site/src/icons";
import axios from "axios";

function FeedbackBottom() {
  return (
    <ToastProvider>
      <FeedbackBottomForm />
    </ToastProvider>
  );
}

function FeedbackBottomForm() {
  const [feedbackRate, setFeedbackRate] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const { addToast } = useToasts();
  const setFeedbackRateValue = (rate) => {
    if (rate === feedbackRate) {
      setFeedbackRate("");
    } else {
      setFeedbackRate(rate);
    }
  };
  const submitFeedback = async (email, feedback) => {
    if (!email) {
      return;
    }
    if (!feedback) {
      feedback = "No message left";
    }
    try {
      const response = await axios.post(
        "https://fiv1-feedback-backend.vercel.app/submit-feedback",
        {
          email,
          feedback,
        }
      );
      setFeedbackRate("");
      setFeedbackMessage("");

      addToast(response.data.message, {
        appearance: "success",
        autoDismiss: true,
      });
    } catch (error) {
      addToast("Error submitting feedback: " + error, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };
  return (
    <div className={styles.container}>
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center">
          <span className={styles.title}>Feedback</span>

          <div className="flex flex-row items-center space-x-2">
            <div
              className={clsx(
                styles.button,
                "group rounded-full border-white hover:cursor-pointer hover:border-blue-500"
              )}
              onClick={() => setFeedbackRateValue("positive")}>
              <LikeIcon
                className={`h-8 w-8 ${
                  feedbackRate == "positive" ? "fill-blue-500" : "fill-white"
                } group-hover:fill-blue-500`}
              />
            </div>
            <div
              className={clsx(
                styles.button,
                "group rounded-full border-white hover:cursor-pointer hover:border-blue-500"
              )}
              onClick={() => setFeedbackRateValue("negative")}>
              <DislikeIcon
                className={`h-8 w-8 ${
                  feedbackRate == "negative" ? "fill-blue-500" : "fill-white"
                } group-hover:fill-blue-500`}
              />
            </div>
          </div>
        </div>
        <div className="relative mt-6 flex w-full max-w-md items-center text-zinc-700 dark:text-white">
          <textarea
            rows={3}
            className="mb-2 flex-1 rounded-md border border-solid border-zinc-200 bg-white px-3 pl-8 pt-2 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-secondary-1000 dark:text-zinc-200"
            placeholder="Your feedback (Optional)"
            value={feedbackMessage}
            onInput={(e) => setFeedbackMessage(e.currentTarget.value)}
          />
        </div>
        <button
          className={clsx(
            styles.sendButton,
            `${
              !feedbackRate && "!bg-gray-600"
            } dev-portal-signup dev-portal-link w-full `
          )}
          onClick={() => submitFeedback(feedbackRate, feedbackMessage)}
          disabled={!feedbackRate}>
          Send
        </button>
      </div>
    </div>
  );
}

export default FeedbackBottom;
