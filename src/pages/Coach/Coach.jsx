import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      <form className="flex flex-col items-center justify-evenly text-white form sm:h-auto sm:w-[400px] w-[300px] h-[350px] sm:gap-3 gap-2">
        <h3 className="sm:text-[2rem] text-[1.5rem] font-medium">
          Become a Coach
        </h3>

        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="email"
            className="cursor-pointer sm:text-base text-sm"
          >
            FirstName
          </label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="email"
            className="cursor-pointer sm:text-base text-sm"
          >
            LastName
          </label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="email"
            className="cursor-pointer sm:text-base text-sm"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="email"
            className="cursor-pointer sm:text-base text-sm"
          >
            Age
          </label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="email"
            className="cursor-pointer sm:text-base text-sm"
          >
            Height
          </label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="email"
            className="cursor-pointer sm:text-base text-sm"
          >
            Phone
          </label>
          <input
            type="email"
            placeholder="Email"
            id="email"
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

        <button className="w-full bg-white text-black sm:py-2 py-1 mt-2 font-medium rounded hover:bg-slate-200">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Coach;
