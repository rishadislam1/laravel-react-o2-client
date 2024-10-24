
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { menuItems } from "./NavbarItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants} className="mt-20 ">
    {menuItems.map((menus,i) => (
      <MenuItem i={i} key={i} menus={menus} />
    ))}
    
  </motion.ul>
);
