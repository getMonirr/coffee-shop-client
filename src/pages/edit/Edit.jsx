import { Link, useLoaderData } from "react-router-dom";
import Form from "../../components/Form";
import { BsArrowLeft } from "react-icons/bs";
import Swal from "sweetalert2";

const Edit = () => {
  const coffee = useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    // update coffee details
    fetch(`http://localhost:5000/coffees/${coffee?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.modifiedCount) {
          Swal.fire("Good job!", "Your Coffee updated", "success");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Something went wrong! please edit some info`,
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      });
  };

  return (
    <div className="">
      <div className="container mx-auto my-6">
        <Link
          to="/"
          className="btn bg-transparent border-none gap-2 text-cs-secondary hover:bg-transparent font-rancho capitalize text-2xl"
        >
          <BsArrowLeft />
          Back To Home
        </Link>
      </div>
      <div className="container mx-auto py-16 px-28 bg-cs-bg">
        <div className="text-center w-3/4 mx-auto mb-20">
          <h3 className="mb-8 font-rancho font-normal text-5xl text-cs-secondary">
            Update Existing Coffee Details
          </h3>
          <p className="px-10">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <div>
          <Form coffee={coffee} handleSubmit={handleUpdateCoffee} />
        </div>
      </div>
    </div>
  );
};

export default Edit;
