import { useHistory } from "@docusaurus/router";
import React, { forwardRef, useState } from "react";
import { ChevronDown } from "react-feather";

const SectionsMenuDropdown = forwardRef(
  (
    {
      defaultValue = "",
      values = [],
      onValueChange,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const history = useHistory();
    const [currentSection, setCurrentSection] = useState(
      values.find(({ docId }) => docId === defaultValue)
    );
    return (
      <div className="dropdown" {...props} ref={ref}>
        {/* Trigger */}
        <label
          tabIndex={0}
          className="btn flex !h-fit !min-h-fit !min-w-[160px] !max-w-[170px] flex-col items-start justify-center rounded-lg bg-[#6852d6] !py-2 capitalize text-white"
        >
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex flex-row items-center ">
              <currentSection.icon className="mr-2 h-6 w-6 fill-white" />
              <span className="whitespace-nowrap">{currentSection.name}</span>
            </div>
            <ChevronDown
              size={28}
              strokeWidth={1}
              className={`m-0 ${
                false ? "" : "-rotate-90"
              } stroke-white transition-transform duration-200`}
            />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content rounded-box z-[1] !min-w-[160px]  bg-base-100 p-2 shadow"
        >
          {values
            .filter(({ docId }) => docId !== currentSection.docId)
            .map(({ docId, name, icon: Icon, disabled = false }) => (
              <li
                onClick={() => {
                  onValueChange(docId);
                }}
                key={docId}
              >
                <a className="flex w-full flex-row items-center">
                  <Icon className="mr-2 h-6 w-6 fill-white" />
                  <span className="mr-2 whitespace-nowrap">{name}</span>
                </a>
              </li>
            ))}
        </ul>
      </div>
    );
  }
);

export default SectionsMenuDropdown;
