/**
 * Header
 *  - Logo
 *  - Nav Items(Right Side)
 *  - Cart
 *
 * Body
 *  - Search Bar
 *  - ResturantList
 *    - ResturantCards
 *      - Image
 *      - Name
 *      - Rating
 *      - Cusines
 * Footer
 *  - links
 *  - Copyrights
 */

import ReactDOM from "react-dom/client";
import { API } from "./constant";

const root = ReactDOM.createRoot(document.getElementById("root"));
//* JSX will have only one parent
//* React.Fragmnet is like a empty tag (Angular ng-container)
//* <React.Fragmnet></React.Fragmnet> is same as <></>
//* JSX => React.createElement => Object => HTML(DOM)

const Title = () => (
  <a href="">
    <img
      className="logo"
      alt="logo"
      src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);

const Header = () => (
  <div className="header">
    <Title />
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const resturantList = API;
const ResturantCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
}) => {
  const URL =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
  return (
    <div className="card">
      <img alt="food" src={URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} </h4>
    </div>
  );
};

// props - properties
const Body = () => {
  return (
    <div className="resturantList">
      {resturantList.map((resturant) => (
        <ResturantCard {...resturant?.data} key={resturant?.data?.id} />
      ))}
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    // React.Fragmnet
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

root.render(<AppLayout />); // react component
