
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

// eslint-disable-next-line react/prop-types
export const MenuItem = ({ menus }) => {
  const style = { border: `1px solid black` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* <div className="icon-placeholder" style={style} /> */}
      { /* eslint-disable-next-line react/prop-types */}
      <Link to={menus.to} className="text-placeholder p-5 flex mt-3 items-center ms-5 bg-white" style={style}>{menus.label}</Link>
    </motion.li>
  );
};
