import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { allSongs } from "../data/Songs/songs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import app from "../backend/Firebase/firebase";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { formatToDDMonYYYY } from "../utils/functions/formatToDDMonYYYY";
const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const firestore = getFirestore(app);

  const [likedSongs, setLikedSongs] = useState([]);
  const [history, setHistory] = useState([]);
  const [historyDates, setHistoryDates] = useState([]);

  const [forYou, setForYou] = useState([]);
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    let forYouArray = [];
    let generatedIndexes = [];
    while (forYouArray.length < 3) {
      const randomIndex = Math.floor(Math.random() * allSongs.all.length);
      let indexAlreadyGenerated = false;
      for (let i of generatedIndexes) {
        if (i === randomIndex) {
          indexAlreadyGenerated = true;
        }
      }
      if (!indexAlreadyGenerated) {
        forYouArray.push(allSongs.all[randomIndex]);
        generatedIndexes.push(randomIndex);
      }
    }
    let recommendedArray = [];
    generatedIndexes = [];
    while (recommendedArray.length < 3) {
      const randomIndex = Math.floor(Math.random() * allSongs.all.length);
      let indexAlreadyGenerated = false;
      for (let i of generatedIndexes) {
        if (i === randomIndex) {
          indexAlreadyGenerated = true;
        }
      }
      if (!indexAlreadyGenerated) {
        recommendedArray.push(allSongs.all[randomIndex]);
        generatedIndexes.push(randomIndex);
      }
    }
    setForYou(forYouArray);
    setRecommended(recommendedArray);
  }, []);

  useEffect(() => {
    if (user) {
      setLikedSongs(user.likedSongs.likedSongIds);
      setHistory(user.history.songIds);
      setHistoryDates(user.history.dates);
    }
  }, [user]);

  useEffect(() => {
    const auth = getAuth(app);
    const firestore = getFirestore(app);
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        if (!user) {
          const usersCollectionRef = collection(firestore, "Users");
          const q = query(
            usersCollectionRef,
            where("email", "==", auth.currentUser.email)
          );
          const userQuerySnapshot = await getDocs(q);
          if (!userQuerySnapshot.empty) {
            const userDocSnapshot = userQuerySnapshot.docs[0];

            const userData = {
              ...userDocSnapshot.data(),
            };
            setUser(userData);
          }
        }
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, [user]);

  async function addToLikedSongs(id) {
    const addedSong = allSongs.all.find((song) => song.songId === id);
    toast.custom((t) => <CustomToast t={t} addedSong={addedSong} />, {
      id: id,
      duration: 3000,
    });
    setLikedSongs([...likedSongs, id]);
    try {
      // Query to find user by email
      const usersCollectionRef = collection(firestore, "Users");
      const q = query(usersCollectionRef, where("email", "==", user.email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Assuming only one user per email (you can handle multiple results differently if needed)
        const userId = querySnapshot.docs[0].id;

        // Reference the user's document by its ID
        const userDocRef = doc(firestore, "Users", userId);
        // Update the likedSongIds array using FieldValue.arrayUnion
        await updateDoc(userDocRef, {
          "likedSongs.likedSongIds": arrayUnion(id),
        });

        console.log("Song added to likedSongs array successfully");
      } else {
        console.log("User not found");
      }
    } catch (error) {
      console.error("Error adding song to likedSongs array:", error);
    }
  }

  async function removeFromLikedSongs(id) {
    setLikedSongs(likedSongs.filter((songId) => songId !== id));
    try {
      const usersCollectionRef = collection(firestore, "Users");
      const q = query(usersCollectionRef, where("email", "==", user.email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userId = querySnapshot.docs[0].id;

        const userDocRef = doc(firestore, "Users", userId);
        await updateDoc(userDocRef, {
          "likedSongs.likedSongIds": arrayRemove(id),
        });

        console.log("Song remove to likedSongs array successfully");
      } else {
        console.log("User not found");
      }
    } catch (error) {
      console.error("Error removing song to likedSongs array:", error);
    }
  }

  async function updateHistory(songId) {
    console.log([...history, songId]);
    console.log([...historyDates, formatToDDMonYYYY(new Date())]);
    setHistory([...history, songId]);
    setHistoryDates([...historyDates, formatToDDMonYYYY(new Date())]);
    try {
      // Query to find user by email
      const usersCollectionRef = collection(firestore, "Users");
      const q = query(usersCollectionRef, where("email", "==", user.email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Assuming only one user per email (you can handle multiple results differently if needed)
        const userId = querySnapshot.docs[0].id;

        // Reference the user's document by its ID
        const userDocRef = doc(firestore, "Users", userId);
        // Update the likedSongIds array using FieldValue.arrayUnion
        await updateDoc(userDocRef, {
          "history.songIds": arrayUnion(songId),
        });
        await updateDoc(userDocRef, {
          "history.dates": arrayUnion(String(new Date())),
        });

        console.log("Song added to history array successfully");
      } else {
        console.log("User not found");
      }
    } catch (error) {
      console.error("Error adding song to history array:", error);
    }
  }

  async function updateName(newName) {
    try {
      // Query to find user by email
      const usersCollectionRef = collection(firestore, "Users");
      const q = query(usersCollectionRef, where("email", "==", user.email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Assuming only one user per email (you can handle multiple results differently if needed)
        const userId = querySnapshot.docs[0].id;

        // Reference the user's document by its ID
        const userDocRef = doc(firestore, "Users", userId);
        // Update the likedSongIds array using FieldValue.arrayUnion
        await updateDoc(userDocRef, {
          name: newName,
        });
        console.log("Name updated successfully");
      } else {
        console.log("User not found");
      }
    } catch (error) {
      console.error("Error updating Name:", error);
    }
  }
  const value = {
    user,
    setUser,
    likedSongs,
    setLikedSongs,
    history,
    setHistory,
    historyDates,
    setHistoryDates,
    addToLikedSongs,
    removeFromLikedSongs,
    updateHistory,
    updateName,
    forYou,
    recommended,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const CustomToast = ({ t, addedSong }) => {
  return (
    <motion.div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-black-secondary shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      initial={{ opacity: 0, y: -50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <img
              className="h-11 w-11 rounded-md"
              src={addedSong.coverImage}
              alt=""
            />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-300">
              {addedSong.title}
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Added to your liked songs ✅
            </p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center text-gray-500 p-5">
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={faX}
          onClick={() => toast.dismiss(t.id)}
        />
      </div>
    </motion.div>
  );
};
