import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const heading1 = React.createElement(
  "h1",
  { id: "heading1", className: "bg-danger" },
  "Heading 1"
);
const heading2 = React.createElement(
  "h2",
  { id: "heading2", className: "bg-primary" },
  "Heading 2"
);

//* we can put anything inside props
// const container = React.createElement('element',{props}, 'text')

const container = React.createElement("div", { className: "container" }, [
  heading1,
  heading2,
]);

root.render(container);
