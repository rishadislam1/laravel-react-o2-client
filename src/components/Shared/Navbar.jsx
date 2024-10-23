import { motion } from "framer-motion"
import logo from '../../assets/img/LOGO.png'
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const menus = <><NavLink
    to="/"
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : ""
    }
  ><li>Home</li></NavLink>

  <NavLink
    to="/about"
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : ""
    }
  ><li>About Us</li></NavLink>

<NavLink
    to="/shop"
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : ""
    }
  ><li>Shop</li></NavLink>
   
   <NavLink
    to="/contact"
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : ""
    }
  ><li>Contact</li></NavLink>

<NavLink
    to="/faq"
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : ""
    }
  ><li>FAQ</li></NavLink>
  </>
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1.6}} className="position-fixed top-0 left-0 w-full z-50 bg-white shadow-md p-5" >
            <div>
                <img src={logo} alt="" className="w-24" />
            </div>
            <div>
                <ul className="flex gap-5">
                    {menus}
                </ul>
            </div>
        </motion.div>
    );
};

export default Navbar;