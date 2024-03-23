/* eslint-disable no-unused-vars */
import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { AuthContex } from "../../Context/UserContext";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const SessionSingle = () => {
  const navgate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(AuthContex);

  const [selected, setSelected] = useState(new Date());
  const [coach, setCoach] = useState({});
  console.log(coach);
  const { photo, name, hight, age, gender, phone } = coach;

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  const date = format(selected, "PP");

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/coach/singleCoach/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCoach(data.coach);
      });
  }, [id]);

  const handleBookSeason = (event) => {
    event.preventDefault();
    const selectdTime = event.target.SelectTime.value;
    const bookingData = {
      date,
      userEmail: user.email,
      time: selectdTime,
      coachId: id,
    };
    fetch(`http://localhost:5000/api/v1/booking/create`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("Booking submitted successfully");
          navgate("/");
        }
        console.log(data);
      });
  };

  const handleFeedback = (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleBookSeason}
      className="w-full flex flex-col sm:p-24 gap-5 py-10"
    >
      <div className="flex sm:flex-row flex-col sm:p-10 gap-10 justify-evenly">
        <img src={photo} alt="" className="w-[400px] h-[500px]" />
        <div className="flex flex-col items-start gap-5">
          <h1 className="anton text-5xl">{name}</h1>
          <div className="flex gap-10">
            <h1 className="anton text-3xl">{age} y</h1>
            <h1 className="anton text-3xl">{hight} m</h1>
          </div>
          <div className="flex gap-10">
            <h1 className="anton text-3xl">{gender}</h1>
            <h1 className="anton text-3xl">{phone}</h1>
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
          <select name="SelectTime" className="w-[300px] h-10 px-2">
            {coach.workTime?.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-blue-500 px-5 py-2 text-white font-medium rounded-md hover:bg-blue-600">
          Book Session
        </button>
      </div>
    </form>
  );
};

export default SessionSingle;
