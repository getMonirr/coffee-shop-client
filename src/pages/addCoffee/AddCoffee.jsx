import Swal from "sweetalert2";
import Form from "../../components/Form";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const AddCoffee = () => {
  const handleAddNewCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, chef, supplier, taste, category, details, photo };

    console.log(newCoffee);

    // add to database new coffee
    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          Swal.fire("Good job!", "Coffee successfully added", "success");
        }
        console.log(data);
      });
  };

  return (
    <div className="">
      <div className="container mx-auto my-6">
        <Link to="/" className="btn bg-transparent border-none gap-2 text-cs-secondary hover:bg-transparent font-rancho capitalize text-2xl">
          <BsArrowLeft />
          Back To Home
        </Link>
      </div>
      <div className="container mx-auto py-16 px-28 bg-cs-bg">
        <div className="text-center w-3/4 mx-auto mb-20">
          <h3 className="mb-8 font-rancho font-normal text-5xl text-cs-secondary">
            Add New Coffee
          </h3>
          <p className="px-10">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <div>
          <Form handleSubmit={handleAddNewCoffee} />
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
