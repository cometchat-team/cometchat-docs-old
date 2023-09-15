import React from "react";

function APIMigration() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center border-b border-l-0 border-r-0 border-t border-solid  border-[#14131D14] bg-[#F6F6FA] px-[64px] pb-16 pt-[80px]">
      <div className="flex w-full max-w-[1440px] flex-row items-start justify-start">
        {/* api reference */}
        <div className="flex   flex-1 flex-col items-start">
          <h1 className="text-[44px] leading-[1.1]">
            API reference <br />
            documentation
          </h1>
          <p className="font--custom--thin mt-1 leading-6 text-[20px] text-[#14131D] w-9/12 text-opacity-[0.74]">
            CometChat's REST API allows you to interact with the resources of
            the chat functionalities (users, messages, groups, etc).
          </p>
          <a className="flex w-fit font--custom--thin flex-col items-start justify-center rounded-xl border border-solid border-[#14131D1A] bg-[#14131D05] p-[10px] text-xs text-[#14131D]">
            Learn more
          </a>
        </div>
        {/* hr */}
        <div
          className="absolute
       left-0 top-0 z-10 h-full w-[1px] translate-x-[48vw] transform bg-[#14131D14]"></div>
        {/* migration guide */}
        <div className="flex flex-1 flex-col items-start justify-start pl-[40px]">
        <h1 className="text-[44px]">Migration guide</h1>
          <p className="font--custom--thin mt-1 leading-5 text-[18px] w-9/12 text-[#14131D] text-opacity-[74%]">
          CometChat message import APIs allows you to import your existing historical chat data from any source into CometChat.
          </p>
          <a className="flex w-fit font--custom--thin flex-col items-start justify-center rounded-xl border border-solid border-[#14131D1A] bg-[#14131D05] p-[10px] text-xs text-[#14131D]">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

export default APIMigration;
