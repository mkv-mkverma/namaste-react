const react = ReactDOM.createRoot(document.getElementById("react"));
const headingReact1 = React.createElement(
  "h1",
  {
    id: "title",
    className: "heading1",
  },
  "Heading 1"
);
const headingReact2 = React.createElement(
  "h1",
  {
    id: "container",
  },
  "Heading 2"
);

const container = React.createElement("div", {}, [
  headingReact1,
  headingReact2,
]);

react.render(container);
