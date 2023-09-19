import React, { useState } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { ToastProvider, useToasts } from "react-toast-notifications";
import { LikeIcon, DislikeIcon } from "@site/src/icons";

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
  return (
    <div className="mt-10 flex flex-row items-center">
      <h3 className="m-0 mr-8 whitespace-nowrap text-[20px] font-light text-[#14131D] dark:text-white md:font-medium">
        Was this page helpful?
      </h3>
      <div className="flex flex-row items-center space-x-3">
        <div className="flex cursor-pointer flex-row items-center space-x-2 rounded-xl bg-cst-brand px-4 py-2 text-[12px] !font-bold text-[#FCFCFE]">
          <LikeIcon className="h-5 w-5" />{" "}
          <span className="hidden md:flex">Yes</span>
        </div>
        <div className="flex cursor-pointer flex-row items-center space-x-2 rounded-xl bg-cst-brand px-4 py-2 text-[12px] !font-bold text-[#FCFCFE]">
          <LikeIcon className="h-5 w-5 rotate-180" />{" "}
          <span className="hidden md:flex">No</span>
        </div>
      </div>
    </div>
  );
}

export default FeedbackBottom;
