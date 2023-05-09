import { AiFillEye } from "react-icons/ai";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { name, chef, category, photourl: img, _id } = coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");

              const rest = coffees.filter((cof) => cof._id !== id);
              setCoffees(rest);
            }
          });
      }
    });
  };

  return (
    <div className="flex justify-evenly items-center gap-8 shadow-lg rounded-lg bg-cs-bg p-8">
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="space-y-2">
        <p>
          <span className="font-extrabold">Name:</span> {name}
        </p>
        <p>
          <span className="font-extrabold">Chef:</span> {chef}
        </p>
        <p>
          <span className="font-extrabold">Category:</span> {category}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <button className="btn rounded-lg p-[10] bg-cs-btn-bg border-none">
          <AiFillEye size={20} color="white" />
        </button>
        <Link
          to={`/edit-coffee/${_id}`}
          className="btn rounded-lg p-[10] bg-slate-800 border-none"
        >
          <HiPencil size={20} color="white" />
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn rounded-lg p-[10] bg-red-500 border-none"
        >
          <MdDelete size={20} color="white" />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
