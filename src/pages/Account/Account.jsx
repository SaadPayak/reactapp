import React from "react";
import { useUser } from "../../contexts/UserContext";
import app from "../../backend/Firebase/firebase";
import { getAuth } from "firebase/auth";

const Account = () => {
  const { setUser } = useUser();
  const auth = getAuth(app);
  return (
    <div className="w-full min-h-screen ">
      <button
        onClick={() => {
          try {
            auth.signOut();
            setUser(null);
          } catch (e) {
            console.log(e);
          }
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Account;
