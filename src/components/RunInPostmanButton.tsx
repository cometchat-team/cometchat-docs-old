import React from "react";

// TODO: Replace this with your own Postman Run in Postman button URL
const postmanUrl = "https://google.com";

export default function RunInPostmanButton() {
  return (
    <a
      href={postmanUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Run in Postman">
      <img
        src="https://run.pstmn.io/button.svg"
        alt="Run in Postman"
        width={128}
        height={32}
      />
    </a>
  );
}
