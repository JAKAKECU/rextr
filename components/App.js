import React from "https://esm.sh/react@18";
import Header from "./Header.js";
import Button from "./Button.js";

export default function App() {
  return React.createElement(
    "div",
    { className: "p-4 space-y-4" },
    React.createElement(Header, null),
    React.createElement(Button, { label: "Click me" })
  );
}
