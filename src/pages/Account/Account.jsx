import React, { useEffect } from "react";
import { useUser } from "../../contexts/UserContext";
import app from "../../backend/Firebase/firebase";
import { getAuth } from "firebase/auth";
import Avatar from "../../Components/Account/Avatar";
import Details from "../../Components/Account/Details";
import { useApplicationManager } from "../../contexts/ApplicationContext";

const Account = () => {
  const { setSelectedMenubarItemId } = useApplicationManager();

  useEffect(() => {
    setSelectedMenubarItemId(10);
  }, [setSelectedMenubarItemId]);

  const { user } = useUser();
  const { activatePopupCenter } = useApplicationManager();
  return (
    <div className=" flex w-full min-h-screen flex-col p-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl text-white font-light">
          <span className="text-pink-primary font-medium">{user.name}'s</span>{" "}
          Account
        </h1>
      </div>
      {/* Avatar */}
      <div className="mt-10">
        <Avatar
          image="https://i.ytimg.com/vi/7udSzXYWOd0/hq720.jpg?sqp=-oaymwEYCJUDENAFSFryq4qpAwoIARUAAIhC0AEB&rs=AOn4CLCOC6fH67x3HSQJvqVJMhwrSXURhQ"
          name={user.name}
        />
      </div>
      {/* Details  */}
      <div className="mt-10">
        <Details
          name={user.name}
          email={user.email}
          joined={new Date(user.joined)}
        />
      </div>
      <div className="mt-10">
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-md"
          onClick={() => {
            activatePopupCenter(<ConfirmLogout />);
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Account;

const ConfirmLogout = () => {
  const { deactivatePopupCenter } = useApplicationManager();
  const { setUser } = useUser();
  const logout = () => {
    const auth = getAuth(app);
    try {
      auth.signOut();
      setUser(null);
    } catch (e) {
      console.log(e);
    } finally {
      deactivatePopupCenter();
    }
  };
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[350px] h-60 rounded-md bg-[#131313] font-lexend flex flex-col justify-center items-center"
    >
      <h1 className="text-white text-xl mb-5">Confirm Logout?</h1>
      <div>
        <span
          onClick={deactivatePopupCenter}
          className="mr-4 text-[#5c5c5c] text-sm underline cursor-pointer"
        >
          Cancle
        </span>
        <span
          onClick={logout}
          className="py-2 px-4 text-sm bg-red-600 text-white rounded-md cursor-pointer"
        >
          Logout
        </span>
      </div>
    </div>
  );
};
