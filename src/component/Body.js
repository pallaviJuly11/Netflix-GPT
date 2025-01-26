/** @format */

import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import {
  createBrowserRouter,
  useNavigate,
  useRevalidator,
} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { auth } from "../utills/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utills/userSlice";

function Body() {
  const dispatch = useDispatch();

  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={appRoutes}> </RouterProvider>
    </div>
  );
}

export default Body;
