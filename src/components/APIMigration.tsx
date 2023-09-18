import React from "react";

function APIMigration() {
  return (
    <div className="relative flex  flex-col items-center justify-center border-b border-l-0 border-r-0 border-t border-solid  border-[#14131D14] bg-[#F6F6FA] con--cust pb-16 pt-[80px]">
      <div className="flex w-full max-w-[1440px] flex-col md:flex-row items-start justify-start">
        {/* api reference */}
        <div className="flex   flex-1 flex-col items-start">
          <h1 className="h--cust leading-[1.1]">
            API reference <br />
            documentation
          </h1>
          <p className="font--custom--thin mt-1 leading-6 p--cust text-[#14131D] w-10/12 md:w-9/12">
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
       left-0 top-0 z-10 h-full hidden md:flex w-[1px] translate-x-[48vw] transform bg-[#14131D14]"></div>
        {/* migration guide */}
        <div className="flex pt-4 md:pt-0 flex-1 flex-col items-start justify-start mt-6 md:mt-0 md:border-none border-solid border-x-0 border-b-0 border-t border-[#14131D14]  md:pl-[40px]">
        <h1 className="h--cust leading-[1.1]">Migration guide</h1>
        <p className="font--custom--thin mt-1 leading-6 p--cust text-[#14131D] w-10/12 md:w-9/12">
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
