import React, { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { HEADER_LOGO } from "../utils/variables";
import { toggleGptsearchView } from "../redux/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const userCredential = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // it unSubscribe when component is unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptsearchView());
  };
  return (
    <div className=" flex flex-col  border-b-[1px] sm:flex-row   items-center w-screen px-12 py-2 bg-black    z-10 sm:absolute  ">
      <div>
        <div>
          <img
            className="w-64  sm:w-48 h-20 sm:h-auto"
            src={HEADER_LOGO}
            alt="Logo"
          />
        </div>
      </div>
      {userCredential && (
        <div className="flex gap-5 justify-between w-full sm:justify-end ">
          <div className="flex flex-col  items-center justify-center gap-1">
            <img
              className="w-8 h-8 rounded-full"
              src={userCredential?.photoURL}
              alt=""
            />
            <p className="text-xs text-center  text-white font-extrabold">
              {userCredential?.displayName}
            </p>
          </div>
          <button
            onClick={handleGptSearchClick}
            className="text-white font-extrabold  bg-blue-950 rounded-lg px-1 "
          >
            {showGptSearch ? "HomePage" : "GTP-Search"}
          </button>
          <button
            className="text-red-600 font-extrabold"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
