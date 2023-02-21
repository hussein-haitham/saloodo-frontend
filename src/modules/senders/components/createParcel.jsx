import { useRef } from "react";

function CreateParcel({ handleSubmitParcel }) {
  const pickupInputRef = useRef();
  const dropoffInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    handleSubmitParcel(
      pickupInputRef.current.value,
      dropoffInputRef.current.value
    );
  };

  return (
    <>
      <form
        className="form flex justify-center gap-2 mb-5"
        onSubmit={handleSubmit}
      >
        <input
          className="input input-bordered"
          placeholder="Pickup location"
          ref={pickupInputRef}
          type="text"
          name="pickup"
          required
        />
        <input
          className="input input-bordered"
          ref={dropoffInputRef}
          type="text"
          placeholder="Dropoff location"
          name="dropoff"
          required
        />

        <button className="btn btn-primary" type="submit">
          Request parcel
        </button>
      </form>
    </>
  );
}

export default CreateParcel;
