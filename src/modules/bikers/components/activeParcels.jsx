import SelectDates from "./selectDates";

function ActiveParcels({ parcels }) {
  return (
    <div>
      <h1 className="text-xl text-center">My active parcels</h1>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Pickup Address</th>
            <th>Drop-off Address</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {parcels.map((parcel) => (
            <tr key={parcel.id}>
              <td>{parcel.pickup}</td>
              <td>{parcel.dropoff}</td>
              <td>
                <span className="badge badge-primary">{parcel.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ActiveParcels;
