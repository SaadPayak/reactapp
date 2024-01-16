import React from "react";
import { motion } from "framer-motion";
import { useUser } from "../../contexts/UserContext";

const GreetUser = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const { user } = useUser();

  return (
    <motion.div
      className="text-4xl font-light"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      Welcome <span className="text-pink-primary font-normal">{user.name}</span>
      !
    </motion.div>
  );
};

export default GreetUser;
