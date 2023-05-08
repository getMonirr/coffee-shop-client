import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import AddCoffee from "../../pages/addCoffee/AddCoffee";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/coffees"),
      },
      {
        path: "add-coffee",
        element: <AddCoffee />,
      },
    ],
  },
]);

export default Route;
