import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { useContext } from "react";
import { AuthContex } from "../../Context/UserContext";
const Navbar = () => {
  const { user } = useContext(AuthContex);
  return (
    <>
      <nav className="w-full sm:flex items-center justify-center fixed top-0 left-0 pt-5 z-[999] hidden">
        <div className="glassEffect max-w-[1440px] w-full mx-auto flex items-center justify-between py-3 z-[10] px-10 rounded-full text-blue-800 font-medium">
          <Link to="/" className="text-lg">
            logo
          </Link>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex items-center gap-5 text-lg"
          >
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/session">Session</NavLink>
            {user?.role ? (
              <>
                <NavLink to="/coach">Become a Coach</NavLink>
                <NavLink to="/profile">Profile</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login">Login</NavLink>
              </>
            )}
          </motion.div>
        </div>
      </nav>
      <Sidebar />
    </>
  );
};

export default Navbar;
