
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

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

// eslint-disable-next-line react/prop-types
export const MenuItem = ({ i, menus }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* <div className="icon-placeholder" style={style} /> */}
      { /* eslint-disable-next-line react/prop-types */}
      <Link to={menus.to} className="text-placeholder p-5 flex mt-3 items-center ms-5" style={style}>{menus.label}</Link>
    </motion.li>
  );
};
