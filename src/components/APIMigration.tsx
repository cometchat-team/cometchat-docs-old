import React from "react";

function APIMigration() {
  return (
    <div className="con--cust relative  flex flex-col items-center justify-center border-b border-l-0 border-r-0 border-t  border-solid border-cst-border bg-cst-bg-secondary pb-16 pt-[80px] dark:border-cst-border-dark dark:bg-cst-bg-secondary-dark">
      <div className="flex w-full max-w-[1440px] flex-col items-start justify-start md:flex-row">
        {/* api reference */}
        <div className="flex   flex-1 flex-col items-start">
          <h1 className="h--cust leading-[1.1] text-cst-sec-title dark:text-cst-sec-title-dark">
            API reference <br />
            documentation
          </h1>
          <p className="font--custom--thin p--cust mt-1 w-10/12 leading-6 text-cst-sec-subtitle dark:text-cst-sec-subtitle-dark md:w-9/12">
            CometChat's REST API allows you to interact with the resources of
            the chat functionalities (users, messages, groups, etc).
          </p>
          <a className="font--custom--thin flex w-fit flex-col items-start justify-center rounded-xl border border-solid border-cst-border bg-cst-border p-[10px] text-xs text-cst-black dark:border-cst-border-dark dark:bg-transparent dark:text-cst-white">
            Learn more
          </a>
        </div>
        {/* hr */}
        <div
          className="absolute
       left-0 top-0 z-10 hidden h-full w-[1px] translate-x-[48vw] transform bg-cst-border dark:bg-cst-border-dark md:flex"
        ></div>
        {/* migration guide */}
        <div className="mt-10 flex flex-1 flex-col items-start justify-start border-x-0 border-b-0 border-t border-solid border-cst-border pt-20   dark:border-cst-border-dark  md:mt-0 md:border-none md:pl-[40px]  md:pt-0">
          <h1 className="h--cust leading-[1.1] text-cst-sec-title dark:text-cst-sec-title-dark">
            Migration guide
          </h1>
          <p className="font--custom--thin p--cust mt-1 w-10/12 leading-6 text-cst-sec-subtitle dark:text-cst-sec-subtitle-dark md:w-9/12">
            CometChat message import APIs allows you to import your existing
            historical chat data from any source into CometChat.
          </p>
          <a className="font--custom--thin flex w-fit flex-col items-start justify-center rounded-xl border border-solid border-cst-border bg-cst-border p-[10px] text-xs text-cst-black dark:border-cst-border-dark dark:bg-transparent dark:text-cst-white">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

export default APIMigration;
