"use client";

import { localStorageKeys } from "misc/LocalStorageKeys";
import React, { Fragment } from "react";

export default function HomePage() {
  let userName = localStorage.getItem(localStorageKeys.userName);
  let userType = localStorage.getItem(localStorageKeys.userType);

  return (
    <Fragment>
      <h1>
        Welcome {userName} : {userType}
      </h1>
    </Fragment>
  );
}
