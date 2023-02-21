import { useState, useEffect, useRef } from "react";
import axios from "axios";

import ParcelList from "../components/parcelList";
import ActiveParcels from "../components/activeParcels";
import { useUserStore } from "../../../store/useUserStore";
import SelectDates from "../components/selectDates";

let assignedParcel = {};

function Bikers() {
  const [parcels, setParcels] = useState([]);
  const [activeParcels, setActiveParcels] = useState([]);
  const [date, setDate] = useState(new Date());
  const { biker } = useUserStore();
  const closeModalRef = useRef();
  let parcelsData = [...parcels];

  const getParcels = async () => {
    const response = await axios.get("http://localhost:3000/api/parcels");
    setParcels([...response.data]);
  };

  const getActiveParcels = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/activeParcels",
        { bikerId: biker.id }
      );
      setActiveParcels([...activeParcels, ...response.data]);
    } catch (error) {}
  };

  const handleAssignParcel = (parcel) => {
    assignedParcel = parcel;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!date.startDate && !date.endDate) return;

    const response = await axios.post(
      "http://localhost:3000/api/parcelsBikers",
      {
        parcel: assignedParcel,
        biker,
        pickupDate: date.startDate,
        deliveryDate: date.endDate,
      }
    );
    const newParcelUpdate = response.data.newParcel;

    parcelsData = parcelsData.map((parcel) => {
      if (parcel.id === newParcelUpdate.id) {
        return { ...parcel, status: "Order in delivery" };
      } else {
        return { ...parcel };
      }
    });
    closeModalRef.current.click();
    setDate((date) => new Date());
    setActiveParcels([...activeParcels, newParcelUpdate]);
    setParcels([...parcelsData]);
  };

  useEffect(() => {
    getParcels();
    getActiveParcels();
  }, []);
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal overflow-y-scroll">
        <div className="modal-box w-11/12  max-w-2xl h-3/4">
          <h3 className="font-bold text-lg">Pick dates</h3>
          <form onSubmit={handleSubmit}>
            <SelectDates date={date} setDate={setDate} className="z-50" />
            <button className="btn btn-primary btn-sm w-full mt-2">
              Submit
            </button>
            <div className="modal-action">
              <label
                ref={closeModalRef}
                htmlFor="my-modal"
                className="btn btn-warning btn-xs"
              >
                Close
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">Hello,{biker.name}</div>
      </div>
      <ParcelList parcels={parcels} handleAssignParcel={handleAssignParcel} />
      <ActiveParcels parcels={activeParcels} />
    </>
  );
}

export default Bikers;
