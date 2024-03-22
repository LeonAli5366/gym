import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const times = [
  {
    value: "12PM - 1PM",
  },
  {
    value: "1PM - 2PM",
  },
  {
    value: "2PM - 3PM",
  },
  {
    value: "3PM - 4PM",
  },
  {
    value: "4PM - 5PM",
  },
  {
    value: "5PM - 6PM",
  },
  {
    value: "6PM - 7PM",
  },
  {
    value: "7PM - 8PM",
  },
  {
    value: "8PM - 9PM",
  },
  {
    value: "9PM - 10PM",
  },
  {
    value: "10PM - 11PM",
  },
  {
    value: "11PM - 12AM",
  },
  {
    value: "12AM - 1AM",
  },
  {
    value: "1AM - 2AM",
  },
  {
    value: "2AM - 3AM",
  },
  {
    value: "3AM - 4AM",
  },
  {
    value: "4AM - 5AM",
  },
  {
    value: "5AM - 6AM",
  },
  {
    value: "6AM - 7AM",
  },
  {
    value: "7AM - 8AM",
  },
  {
    value: "8AM - 9AM",
  },
  {
    value: "9AM - 10AM",
  },
  {
    value: "10AM - 11AM",
  },
  {
    value: "11AM - 12PM",
  },
];

const Coach = () => {

  return (
    <div className="w-full h-screen bg-black login">
      <div className="background sm:w-[430px] sm:h-[520px] w-[320px] h-[350px]">
        <motion.div
          initial={{ opacity: 0, y: -50, x: -50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="shape sm:size-[200px] size-[100px] sm:-top-[80px] sm:-left-[80px] -top-[50px] -left-[25px]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50, x: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="shape sm:size-[200px] size-[100px] sm:-bottom-[80px] sm:-right-[80px] -bottom-[50px] -right-[25px]"
        ></motion.div>
      </div>
      <form className="flex flex-col items-center justify-evenly text-white form sm:h-auto sm:w-auto w-[300px] h-[350px] sm:gap-3 gap-2">
        <h3 className="sm:text-[2rem] text-[1.5rem] font-medium">
          Become a Coach
        </h3>

        <div className="w-full flex items-center gap-3">
          <div className="w-full flex flex-col gap-1">
            <label className="cursor-pointer sm:text-base text-sm">
              FirstName
            </label>
            <input
              type="text"
              disabled
              placeholder="first name"
              className="sm:py-2 sm:px-5 py-1 disabled:cursor-not-allowed outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="cursor-pointer sm:text-base text-sm">
              LastName
            </label>
            <input
              type="text"
              disabled
              placeholder="last name"
              className="sm:py-2 sm:px-5 py-1 disabled:cursor-not-allowed outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="cursor-pointer sm:text-base text-sm">Email</label>
          <input
            type="email"
            placeholder="Email"
            disabled
            className="sm:py-2 py-1 disabled:cursor-not-allowed outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
          />
        </div>
        <div className="w-full flex items-center gap-3">
          <div className="w-full flex flex-col gap-1">
            <label className="cursor-pointer sm:text-base text-sm">Age</label>
            <input
              type="number"
              placeholder="age"
              className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="cursor-pointer sm:text-base text-sm">
              Height
            </label>
            <input
              type="number"
              placeholder="height in cm"
              className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="cursor-pointer sm:text-base text-sm">Phone</label>
          <input
            type="number"
            placeholder="phone"
            className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label>Gender</label>
          <select
            name=""
            id=""
            className="w-full py-3 bg-[rgba(255,255,255,0.07)] outline-none rounded pl-2"
          >
            <option value="male" className="text-black">
              Male
            </option>
            <option value="female" className="text-black">
              Female
            </option>
          </select>
        </div>

        <div className="w-full flex flex-col gap-2">
          <h1 className="text-lg">Set Time</h1>
          <div className="grid grid-cols-3 gap-2">
            {times.map((time, i) => (
              <div key={i} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  value={time.value}
                  className="size-5"
                />
                <label htmlFor="">{time.value}</label>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full bg-white text-black sm:py-2 py-1 mt-2 font-medium rounded hover:bg-slate-200">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Coach;
