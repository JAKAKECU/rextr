import React from "https://esm.sh/react@18";

export default function Button({ label }) {
  return React.createElement(
    "button",
    { className: "px-4 py-2 bg-blue-500 text-white rounded" },
    label
  );
}
