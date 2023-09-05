import React from "react";

function APIMigration() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center border-b border-l-0 border-r-0 border-t border-solid  border-[#14131D14] bg-[#F6F6FA] px-[64px] pb-16 pt-[100px]">
      <div className="flex w-full max-w-[1440px] flex-row items-start justify-start">
        {/* api reference */}
        <div className="flex   flex-1 flex-col items-start">
          <h1>
            API reference <br />
            documentation
          </h1>
          <p className="w-2/3">
            CometChat's REST API allows you to interact with the resources of
            the chat functionalities (users, messages, groups, etc).
          </p>
          <a className="flex w-fit flex-col items-start justify-center rounded-xl border border-solid border-[#14131D1A] px-4 py-[12px] text-sm text-[#14131D]">
            Learn more
          </a>
        </div>
        {/* hr */}
        <div
          className="absolute
       left-0 top-0 z-10 h-full w-[1px] translate-x-[48vw] transform bg-[#14131D14]"></div>
        {/* migration guide */}
        <div className="flex flex-1 flex-col items-start justify-start pl-[40px]">
          <h1>API reference documentation</h1>
          <p className="w-2/3">
            CometChat's REST API allows you to interact with the resources of
            the chat functionalities (users, messages, groups, etc).
          </p>
          <a className="flex w-fit flex-col items-center justify-center rounded-xl border border-solid border-[#14131D1A] px-4 py-[12px] text-sm text-[#14131D]">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

export default APIMigration;
