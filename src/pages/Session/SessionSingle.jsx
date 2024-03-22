import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const optios = [
  {
    value: "10AM - 11AM",
    label: "10AM - 11AM",
  },
  {
    value: "11AM - 12AM",
    label: "11AM - 12AM",
  },
  {
    value: "12AM - 1PM",
    label: "12AM - 1PM",
  },
  {
    value: "2PM - 3PM",
    label: "2PM - 3PM",
  },
];
const SessionSingle = () => {
  const [selected, setSelected] = useState(new Date());

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  const [selectedTime, setSelectedTime] = useState();
  console.log(selectedTime);

  return (
    <div className="w-full flex flex-col sm:p-24 gap-5 py-10">
      <div className="flex sm:flex-row flex-col sm:p-10 gap-10 justify-evenly">
        <img
          src="https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/1649097845511-TQ5BY6SQ7XDQGHC8302G/Teshia+Harris.+Boxing%2C+Strength.?format=2500w"
          alt=""
          className="w-[400px]"
        />
        <div className="flex flex-col items-start gap-5">
          <h1 className="anton text-5xl">TESHIA MILLER</h1>
          <div className="flex gap-10">
            <h1 className="anton text-3xl">25 y</h1>
            <h1 className="anton text-3xl">1.75 cm</h1>
          </div>
          <div className="flex gap-10">
            <h1 className="anton text-3xl">Female</h1>
            <h1 className="anton text-3xl">01289894</h1>
          </div>
        </div>
        <div className="glassEffect h-[400px] rounded-md flex items-center justify-center">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={footer}
            showOutsideDays
            id="rdp"
          />
        </div>
        <div className="flex flex-col items-start gap-2 border border-slate-500 h-[200px] p-10 rounded-md">
            <h1 className="anton text-left">Select Your Time</h1>
          <select
            className="w-[300px] h-10 px-2"
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            {optios.map((option, i) => (
              <option key={i} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <p className="pl-2 font-semibold">Selected Time : {selectedTime}</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
      <button className="bg-blue-500 px-5 py-2 text-white font-medium rounded-md hover:bg-blue-600">Book Session</button>
      </div>
    </div>
  );
};

export default SessionSingle;
