import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import AddCoffee from "../../pages/addCoffee/AddCoffee";
import Edit from "../../pages/edit/Edit";

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
      {
        path: "edit-coffee/:id",
        element: <Edit />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
    ],
  },
]);

export default Route;
