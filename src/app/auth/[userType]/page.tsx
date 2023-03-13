"use client";
import { localStorageKeys } from "misc/LocalStorageKeys";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthStateType, authStoreActions } from "../store";

export default function SignUpPage({ params }: any) {
  // Hooks
  const dispatch = useDispatch();
  const router = useRouter();

  // Getting userName & userType from redux store
  const userName = useSelector((state: AuthStateType) => state.userName);
  const userType = useSelector((state: AuthStateType) => state.userType);

  // Setting userType in Redux
  useEffect(() => {
    dispatch(authStoreActions.setUserType(params.userType));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handling Signup
  const handleSignup = () => {
    // Store username, password & usertype into localstorage
    localStorage.setItem(localStorageKeys.userType, userType);
    localStorage.setItem(localStorageKeys.userName, userName);

    console.log(window.location.pathname);
    // Redirect to "/home"
    router.push("/home");
  };
  return (
    <Fragment>
      <div className="auth-container">
        <input
          className="auth-text-field"
          type="text"
          placeholder="Enter User name"
          value={userName}
          onChange={(event) => {
            dispatch(authStoreActions.setUserName(event.target.value));
          }}
        />
        <input
          className="auth-text-field"
          type="password"
          placeholder="Enter Password"
        />
        <input
          type="button"
          className="auth-button"
          value="Sign Up"
          onClick={handleSignup}
          style={{
            alignSelf: "flex-end",
          }}
        />
        <p>
          Already Signed Up? Go to{" "}
          <Link
            href={window.location.pathname + "/login"}
            style={{ textDecorationLine: "none" }}
          >
            Login
          </Link>
        </p>
      </div>
    </Fragment>
  );
}
