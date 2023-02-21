import CreateParcel from "../components/createParcel";
import ParcelList from "../components/parcelList";
import { useState, useEffect } from "react";
import axios from "axios";

import { useUserStore } from "../../../store/useUserStore";

function Senders() {
  const [parcels, setParcels] = useState([]);

  const { user } = useUserStore();

  useEffect(() => {
    getSenderParcels();
  }, []);

  const getSenderParcels = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/senderParcels",
        { user: user }
      );
      setParcels([...parcels, ...response.data]);
    } catch (error) {}
  };
  const createParcel = async (pickup, dropoff) => {
    try {
      const response = await axios.post("http://localhost:3000/api/parcels", {
        pickup,
        dropoff,
        status: "pending",
        id: "",
        biker: {},
        sender: { ...user },
        pickupDate: "awaiting date",
        deliveryDate: "awaiting date",
      });

      setParcels([
        ...parcels,
        {
          id: response.data.id,
          pickup: pickup,
          dropoff: dropoff,
          status: "pending",
          pickupDate: "awaiting date",
          deliveryDate: "awaiting date",
        },
      ]);
    } catch (error) {}
  };
  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-bubble">Hello,{user.name}</div>
      </div>
      <CreateParcel handleSubmitParcel={createParcel} />
      <ParcelList parcels={parcels} />
    </div>
  );
}

export default Senders;
