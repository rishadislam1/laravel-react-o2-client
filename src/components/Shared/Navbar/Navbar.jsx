import { motion } from "framer-motion";
import logo from '../../../assets/img/LOGO.png';
import { NavLink } from "react-router-dom";
import './Navbar.css';
import './style.css';
import { CiSearch, CiUser } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { useRef } from "react";
import { useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { menuItems } from "./NavbarItem";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

// Define the menu items as an array of objects


const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  // Map over the menuItems array to generate the NavLinks
  const menus = menuItems.map(({ to, label }) => (
    <NavLink
      key={to}
      to={to}
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      <li>{label}</li>
    </NavLink>
  ));

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        transition={{ duration: 1.6 }} 
        className="position-fixed top-0 left-0 w-full z-50 bg-white shadow-md flex items-center justify-between py-5 px-10"
      >
        <div>
          <img src={logo} alt="Logo" className="w-24" />
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-5">
            {menus}
          </ul>
        </div>
        <div className="flex gap-4">
          <CiSearch className="cursor-pointer" />
          <CiUser className="cursor-pointer" />
          <MdFavoriteBorder className="cursor-pointer" />
          <LuShoppingBag className="cursor-pointer" />
        </div>
      </motion.div>
      
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="md:hidden"
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </>
  );
};

export default Navbar;
