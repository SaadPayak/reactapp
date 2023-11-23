import React from "react";
import { motion } from "framer-motion";

const GreetUser = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="text-4xl font-light"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      Welcome <span className="text-pink-primary font-normal">Meera</span>!
    </motion.div>
  );
};

export default GreetUser;
