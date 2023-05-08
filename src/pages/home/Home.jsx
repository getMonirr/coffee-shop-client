import { useLoaderData } from "react-router-dom";
import PopularProducts from "./popularProducts/PopularProducts";
import { useState } from "react";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div>
      <PopularProducts coffees={coffees} setCoffees={setCoffees} />
    </div>
  );
};

export default Home;
