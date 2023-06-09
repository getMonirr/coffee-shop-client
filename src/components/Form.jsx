import { useLocation } from "react-router-dom";

const Form = ({ handleSubmit, coffee }) => {
  const { pathname } = useLocation();
  const checkPath = pathname?.split("/")[1] === "edit-coffee";

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* row one */}
      <div className="flex gap-6">
        <div className="form-control w-full space-y-3">
          <label className="label relative">
            <span className="label-text">
              Name{" "}
              <span className="text-red-500 text-2xl absolute bottom-0">*</span>
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter coffee name"
            className="input input-bordered w-full rounded-md"
            name="name"
            required
            defaultValue={checkPath ? coffee?.name : ""}
          />
        </div>
        <div className="form-control w-full space-y-3">
          <label className="label">
            <span className="label-text">Chef</span>
          </label>
          <input
            type="text"
            placeholder="Enter coffee chef"
            className="input input-bordered w-full rounded-md"
            name="chef"
            defaultValue={checkPath ? coffee?.chef : ""}
          />
        </div>
      </div>
      {/* row two */}
      <div className="flex gap-6">
        <div className="form-control w-full space-y-3">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <input
            type="text"
            placeholder="Enter coffee supplier"
            className="input input-bordered w-full rounded-md"
            name="supplier"
            defaultValue={checkPath ? coffee?.supplier : ""}
          />
        </div>
        <div className="form-control w-full space-y-3">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <input
            type="text"
            placeholder="Enter coffee taste"
            className="input input-bordered w-full rounded-md"
            name="taste"
            defaultValue={checkPath ? coffee?.taste : ""}
          />
        </div>
      </div>
      {/* row three */}
      <div className="flex gap-6">
        <div className="form-control w-full space-y-3">
          <label className="label relative">
            <span className="label-text">
              Category{" "}
              <span className="text-red-500 text-2xl absolute bottom-0">*</span>
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter coffee category"
            className="input input-bordered w-full rounded-md"
            name="category"
            required
            defaultValue={checkPath ? coffee?.category : ""}
          />
        </div>
        <div className="form-control w-full space-y-3">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input
            type="text"
            placeholder="Enter coffee details"
            className="input input-bordered w-full rounded-md"
            name="details"
            defaultValue={checkPath ? coffee?.details : ""}
          />
        </div>
      </div>
      {/* row four */}
      <div className="flex gap-6">
        <div className="form-control w-full space-y-3">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            type="text"
            placeholder="Enter coffee photo url"
            className="input input-bordered w-full rounded-md"
            name="photo"
            defaultValue={checkPath ? coffee?.photourl : ""}
          />
        </div>
      </div>
      <input
        className="btn btn-block bg-cs-btn-bg text-cs-primary hover:bg-cs-primary hover:text-cs-btn-bg"
        type="submit"
        value={checkPath ? "Update Coffee Details" : "Add Coffee"}
      />
    </form>
  );
};

export default Form;
