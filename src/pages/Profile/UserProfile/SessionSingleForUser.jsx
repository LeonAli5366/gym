/* eslint-disable no-unused-vars */
import React from "react";
import toast from "react-hot-toast";

const SessionSingleForUser = ({ session, setRefresh, refresh }) => {
  const { userEmail, coach, date, time, _id } = session;
  const workTime = session.coach.workTime;
  const handleUpdateUserSeassion = (event) => {
    event.preventDefault();
    const workTime = event.target.workTime.value;

    const updateData = {
      workTime,
      _id,
    };
    fetch(`http://localhost:5000/api/v1/booking/update`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Time updated successfully");
      });
  };
  return (
    <form
      onSubmit={handleUpdateUserSeassion}
      className=" flex flex-col items-start gap-5 border rounded bg-blue-500 p-10 text-white"
    >
      <div className="flex items-center gap-3">
        {coach?.photo ? (
          <img
            src={coach?.photo}
            alt=""
            className="size-16 rounded-full object-cover object-center"
          />
        ) : (
          <div className="size-16 rounded-full bg-white"></div>
        )}
        <h1 className="text-lg font-medium">
          {coach.firstName}
          {coach.lastName}
        </h1>
      </div>
      <div className="flex items-center gap-10">
        <h1>{date}</h1>
        <select
          name="workTime"
          className="py-2 px-2 text-black rounded outline-none"
        >
          {workTime.map((data, i) => (
            <option key={data} value={data}>
              {data}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full flex items-center gap-3 text-black font-medium">
        <button className="w-full py-2 bg-slate-100 rounded hover:bg-white">
          Update
        </button>
        <button className="w-full py-2 bg-slate-100 rounded hover:bg-white">
          Delete
        </button>
      </div>
    </form>
  );
};

export default SessionSingleForUser;
