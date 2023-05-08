import CoffeeCard from "../../../components/CoffeeCard";

const PopularProducts = ({ coffees,setCoffees }) => {

  return (
    <div className="container mx-auto my-8">
      <div className="text-center my-16">
        <p>
          <small>--- Slip & Savor ---</small>
        </p>
        <h2 className="font-rancho text-5xl font-normal text-cs-primary">
          Our Popular Products
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {coffees.map((cof) => (
          <CoffeeCard setCoffees={setCoffees} coffees={coffees} key={cof._id} coffee={cof} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
