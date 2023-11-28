import { useEffect } from "react";
import { useApplicationManager } from "../../contexts/ApplicationContext";
import { motion } from "framer-motion";

const NavbarVisibleFullScreenPopup = () => {
  const { navbarVisibleFullScreenPopup, deactivateNavbarVisiblePopup } =
    useApplicationManager();
  // Adding ESC to disable the popup: Keyboard control -> Good UX
  useEffect(() => {
    // Add an event listener to listen for the ESC key press
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) {
        // Call the deactivateNavbarVisiblePopup function when ESC is pressed
        deactivateNavbarVisiblePopup();
      }
    };
    // Add the event listener when the component mounts
    document.addEventListener("keydown", handleKeyPress);
    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [deactivateNavbarVisiblePopup]);
  const childComponentVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.2 } },
  };

  if (!navbarVisibleFullScreenPopup.isActive) {
    return;
  }
  return (
    <motion.div
      className="w-screen h-screen fixed top-0 left-0 bg-[#0a0a0a4f] z-[100000] flex justify-center items-center overflow-y-scroll"
      onClick={deactivateNavbarVisiblePopup}
      initial={{ backdropFilter: "blur(0px)" }}
      animate={{ backdropFilter: "blur(15px)", transition: { duration: 0.15 } }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={childComponentVariants}
        className="absolute z-[150]"
        onClick={(e) => e.stopPropagation()}
      >
        {navbarVisibleFullScreenPopup.component}
      </motion.div>
    </motion.div>
  );
};

export default NavbarVisibleFullScreenPopup;
