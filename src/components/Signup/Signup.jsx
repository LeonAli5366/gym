import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="w-full h-screen bg-black login">
      <div className="background sm:w-[430px] sm:h-[520px] w-[320px] h-[390px]">
        <motion.div
          initial={{ opacity: 0, y: -50, x: -50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="shape sm:size-[200px] size-[100px] sm:-top-[80px] sm:-left-[80px] -top-[50px] -left-[25px]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50, x: 50 }}
          whileInView={{ opacity: 1, x: 30, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="shape sm:size-[200px] size-[100px] sm:-bottom-[100px] sm:-right-[60px] -bottom-[50px] -right-[15px]"
        ></motion.div>
      </div>
      <form className="flex flex-col items-center justify-evenly text-white form sm:h-[580px] sm:w-[400px] w-[300px] h-[450px] gap-2">
        <h3 className="sm:text-[2rem] text-[1.5rem] font-medium">Signup Here</h3>

        <div className="w-full flex flex-col gap-1">
          <label htmlFor="firstname" className="cursor-pointer sm:text-base text-sm">
            FirstName
          </label>
          <input
            type="text"
            placeholder="firstname"
            id="firstname"
            className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="lastname" className="cursor-pointer sm:text-base text-sm">
            LastName
          </label>
          <input
            type="text"
            placeholder="lastname"
            id="lastname"
            className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="email" className="cursor-pointer sm:text-base text-sm">
            Email
          </label>
          <input
            type="text"
            placeholder="Email"
            id="username"
            className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
          />
        </div>

        <div className="w-full flex flex-col gap-1">
          <label htmlFor="password" className="cursor-pointer sm:text-base text-sm">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
          />
        </div>
        <h1 className="sm:text-sm text-xs flex items-center gap-1">
          Already have an account{" "}
          <Link
            to="/login"
            className="text-blue-400 hover:text-blue-500 cursor-pointer hover:underline transition-all duration-300"
          >
            Login Here!
          </Link>
        </h1>

        <button className="w-full bg-white text-black sm:py-2 py-1 mt-2 sm:text-lg text-base font-medium rounded hover:bg-slate-200">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Signup;
