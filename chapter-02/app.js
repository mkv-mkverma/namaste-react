import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

//* JSX => React.createElement => Object => HTML(DOM)

const heading = (
  <h1 id="heading" className="bg-danger" key="h" tabIndex="1">
    Heading
  </h1>
);

const HeaderComponent1 = () => {
  return <h1>Namaste React functional Component</h1>;
};

const HeaderComponent2 = () => (
  <div>
    {1 + 2}
    {heading}
    <HeaderComponent1 />
    <h1>Namaste React functional Component</h1>
    <h2>This is h2 tags</h2>
  </div>
);

root.render(<HeaderComponent2 />); // react component
