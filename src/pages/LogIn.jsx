import React, { useRef, useState } from "react";
import Header from "../components/Header";
import { checkValid } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { LOGIN_BG_IMG, PHOTO_URL } from "../utils/variables";

const LogIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleFormValidation = async () => {
    setErrorMessage(checkValid(email.current.value, password.current.value));

    if (!isSignIn) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = userCredential.user;
        console.log(user);

        try {
          await updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: PHOTO_URL,
          });

          const {
            uid,
            displayName,
            email: userEmail,
            photoURL,
          } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              displayName: displayName,
              email: userEmail,
              photoURL: photoURL,
            })
          );
        } catch (error) {
          // Handle profile update error
          console.error(error);
          setErrorMessage(error.message);
        }
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "----" + errorMessage);
      }
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = userCredential.user;
        console.log(user);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "----" + errorMessage);
      }
    }
  };

  /* const handleFormValidation = () => {
    setErrorMessage(checkValid(email.current.value, password.current.value));

    if (errorMessage) return;

    if (!isSignIn) {
      try {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        ).then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: PHOTO_URL,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        });
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "----" + errorMessage);
      }
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "----" + errorMessage);
        });
    }
  }; */
  return (
    <div className="">
      <Header />
      <div className="h-screen">
        <img
          className="absolute brightness-75 bg-center bg-cover object-cover w-full h-screen sm:mt-20"
          src={LOGIN_BG_IMG}
          alt="Browse BG img"
        />
        <h1 className="absolute text-center w-full bg-black text-white  bg-opacity-75  z-10 sm:mt-24">
          {" "}
          Wellcome to Netflix-GPT{" "}
        </h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          action="submit"
          className="absolute flex flex-col w-full sm:w-4/12  gap-5 bg-black  p-3 justify-center items-center mx-auto right-0 left-0 my-16 bg-opacity-75 rounded-md h-auto sm:mt-28 sm:gap-3"
        >
          <h1 className="text-white w-8/12 text-3xl font-bold my-5">
            {isSignIn ? "Sign In" : "Sign up"}
          </h1>
          {!isSignIn && (
            <input
              className="ring-1 ring-gray-400 w-8/12 h-10 bg-gray-900 bg-opacity-60 rounded-md px-5 py-7 hover:ring-4 text-white"
              ref={name}
              type="text"
              name=""
              id=""
              placeholder="Enter Name"
            />
          )}
          <input
            className="ring-1 ring-gray-400 w-8/12 h-10 bg-gray-900 bg-opacity-60 rounded-md px-5 py-7 hover:ring-4 text-white"
            ref={email}
            value="samuel9094@gmail.com"
            type="email"
            placeholder="Email or Mobile Number"
          />
          <input
            className="ring-1 ring-gray-400 w-8/12 h-10 bg-gray-900 bg-opacity-60 rounded-md px-5 py-7 hover:ring-4 text-white"
            ref={password}
            type="password"
            value="Samuel9094@"
            placeholder="password"
          />
          {!isSignIn && (
            <input
              className="ring-1 ring-gray-400 w-8/12 h-10 bg-gray-900 bg-opacity-60 rounded-md px-5 py-7 hover:ring-4 text-white"
              type="password"
              name=""
              id=""
              placeholder="Confirm password"
            />
          )}

          <p className="text-red-600 text-xs font-extrabold w-8/12">
            {errorMessage}
          </p>
          <button
            type="submit"
            onClick={handleFormValidation}
            className=" w-8/12 h-10 text-white bg-red-500 rounded-md font-bold"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-white font-semibold text-start w-8/12 hover:cursor-pointer bg-slate-900 "
            onClick={toggleForm}
          >
            {isSignIn
              ? " New to Netflix-Gpt? Sign up"
              : "Allredy user? Sign in"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
