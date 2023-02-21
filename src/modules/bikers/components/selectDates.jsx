import Datepicker from "react-tailwindcss-datepicker";

function SelectDates({ date, setDate }) {
  return (
    <>
      <Datepicker
        primaryColor={"sky"}
        value={date}
        onChange={(date) => setDate(date)}
      />
    </>
  );
}

export default SelectDates;
