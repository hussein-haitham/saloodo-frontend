function ParcelList({ parcels }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Pickup Address</th>
            <th>Drop-off Address</th>
            <th>Status</th>
            <th>Pickup date</th>
            <th>Delivery date</th>
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
              <td>{parcel.pickupDate}</td>
              <td>{parcel.deliveryDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ParcelList;
