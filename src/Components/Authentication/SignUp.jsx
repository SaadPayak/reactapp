import React, { useState } from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import { useUser } from "../../contexts/UserContext";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const SignUp = ({
  auth,
  setIsSignIn,
  firestore,
  authRequestSent,
  setAuthRequestSent,
}) => {
  const { setUser } = useUser();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const parentVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const childVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSignUp = async () => {
    if (!email || !password || !name) {
      toast.error("All fields required");
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("Email is not valid ");
      return;
    }
    if (password.length < 6) {
      toast.error("Password too short");
      return;
    }
    try {
      setAuthRequestSent(true);
      await createUserWithEmailAndPassword(auth, email, password);

      const usersCollection = collection(firestore, "Users");
      await addDoc(usersCollection, {
        name: name,
        email: email,
        joined: String(new Date()),
        likedSongs: {
          likedSongIds: [],
        },
        playlists: {},
        history: {
          songIds: [],
          dates: [],
        },
      });

      setUser({
        name: name,
        email: email,
        joined: String(new Date()),
        likedSongs: {
          likedSongIds: [],
        },
        playlists: {},
        history: {
          songIds: [],
          dates: [],
        },
      });
      setAuthRequestSent(false);
    } catch (error) {
      if (String(error).includes("auth/email-already-in-use")) {
        toast.error("Email already in use");
      } else {
        toast.error("Error");
      }
      setAuthRequestSent(false);
    }
  };

  return (
    <motion.div
      className="w-[300px] sm:w-[400px] h-[85%] bg-[#0f0f0f] rounded-lg overflow-hidden"
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <Header />
      <motion.div
        className="w-full h-[70%] flex  justify-evenly items-center flex-col px-14 "
        variants={childVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="w-full flex flex-col justify-center items-center">
          <div className=" w-full  mb-4">
            <input
              className="w-full h-10 bg-transparent border-b-[1px] outline-none text-gray-400 px-2 text-base border-[#181818] placeholder:text-[#434343]"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className=" w-full  mb-4">
            <input
              className="w-full h-10 bg-transparent border-b-[1px] outline-none text-gray-400 px-2 text-base border-[#181818] placeholder:text-[#434343]"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className=" w-full ">
            <input
              className="w-full  h-10 bg-transparent border-b-[1px] outline-none text-gray-400 px-2 text-base border-[#181818] placeholder:text-[#434343] "
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full">
          <button
            className="w-full h-10 bg-pink-primary text-white rounded-sm mb-5"
            onClick={handleSignUp}
          >
            SIGN UP
          </button>
          <button
            onClick={() => setIsSignIn(true)}
            className="w-full h-10 border-[1px] border-pink-primary text-white rounded-sm  font-light"
          >
            SIGN IN
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SignUp;
