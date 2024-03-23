/* eslint-disable no-unused-vars */
import React from "react";

const SessionSingleForUser = ({ session }) => {
  const { userEmail, coach, date, time } = session;
  console.log(session);
  const workTime = session.coach.workTime;
  return (
    <form className=" flex flex-col items-start gap-5 border rounded bg-blue-500 p-10 text-white">
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
        <select className="px-16 text-black rounded outline-none">
          {/* {workTime.map((data, i) => {console.log(data)})} */}
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
