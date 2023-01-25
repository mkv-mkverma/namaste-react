import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

//* React.createElement => Object => HTML(DOM)
//* JSX ??

// React Element
const heading = (
  <h1 id="heading" className="bg-danger" key="h" tabIndex="1">
    Heading
  </h1>
);

// React Components
// - Functional - NEW
// Name start with capital letter
// Functional component is a normal function and returns react element
// const HeaderComponent1 = () => { return react elements };
// - Class Based Component - OLDß

const HeaderComponent1 = () => {
  return <h1>Namaste React functional Component</h1>;
};

const HeaderComponent2 = () => (
  <div>
    {/* any js syntax we can write */}
    {1 + 2}
    {heading}
    {HeaderComponent1()}
    <HeaderComponent1 />
    <h1>Namaste React functional Component</h1>
    <h2>This is h2 tags</h2>
  </div>
);

root.render(<HeaderComponent2 />); // react component

// Cross Side Scripting Attack
// JS JSX is very scure
// {any js code we put it santize it}
