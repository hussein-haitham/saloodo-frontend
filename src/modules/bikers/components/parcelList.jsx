import SelectDates from "./selectDates";

function ParcelList({ parcels, biker, handleAssignParcel }) {
  return (
    <div>
      <h1 className="text-xl text-center">Available parcels</h1>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Pickup Address</th>
            <th>Drop-off Address</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {parcels.map((parcel) => (
            <tr key={parcel.id}>
              <td>{parcel.pickup}</td>
              <td>{parcel.dropoff}</td>
              <td>
                <span className="badge">{parcel.status}</span>
              </td>
              {parcel.status === "pending" ? (
                <td>
                  <label
                    onClick={handleAssignParcel(parcel)}
                    htmlFor="my-modal"
                    className="btn btn-primary btn-xs"
                  >
                    Pickup Parcel
                  </label>
                </td>
              ) : (
                <td>
                  <span className="badge">in transit</span>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ParcelList;
