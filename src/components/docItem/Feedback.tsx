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
      <div className="flex flex-row mt-10 items-center"> 
      <h3 className="text-[20px] font-medium m-0 mr-8 text-[#14131D]">Was this page helpful?</h3>
      <div className="flex flex-row items-center space-x-3">
        <div className="bg-[#6852D6] cursor-pointer px-4 py-2 text-[12px] !font-bold rounded-xl flex flex-row space-x-2 items-center text-[#FCFCFE]">
          <LikeIcon className="w-5 h-5" /> <span className="">Yes</span>
        </div>
        <div className="bg-[#6852D6] cursor-pointer px-4 py-2 text-[12px] !font-bold rounded-xl flex flex-row space-x-2 items-center text-[#FCFCFE]">
          <LikeIcon className="rotate-180 w-5 h-5" /> <span className="">No</span>
        </div>
      </div>
       </div>
  );
}

export default FeedbackBottom;
