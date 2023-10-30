import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MenubarItemMobile = ({
  icon,
  title,
  id,
  setSelectedMenubarItemId,
  isSelected = false,
}) => {
  const itemVariants = {
    hidden: { opacity: 0, x: -10 * id },
    visible: { opacity: 1, x: 0 },
  };
  const itemTransition = {
    duration: 0.4,
    ease: "easeOut",
  };

  let itemTailwind =
    "w-full h-10 mb-3 text-gray-300 overflow-hidden flex justify-center items-center cursor-pointer relative border-l-4 border-transparent";
  if (isSelected) {
    itemTailwind =
      "w-full h-10 mb-3 text-gray-300 overflow-hidden flex justify-center items-center cursor-pointer relative border-l-4 border-pink-primary text-pink-secondary font-bold";
  }

  return (
    <motion.div
      className={itemTailwind}
      variants={itemVariants}
      transition={itemTransition}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={() => {
        setSelectedMenubarItemId(id);
      }}
    >
      <motion.div className="h-full w-[20%] flex justify-center items-center">
        <FontAwesomeIcon icon={icon} flip="horizontal" />
      </motion.div>
      <motion.div className="relative h-full w-[80%] flex justify-start items-center">
        <h1>{title}</h1>
      </motion.div>
    </motion.div>
  );
};
