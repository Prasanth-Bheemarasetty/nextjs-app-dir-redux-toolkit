"use client";
import React from "react";
import { Provider } from "react-redux";
import "./auth.css";
import { authStore } from "./store";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={authStore}>
      <div
        style={{
          margin: "0px 0px",
        }}
      >
        <div
          id="auth-header"
          style={{
            padding: "15px 20px",
            boxShadow: "0 8px 6px -6px black",
            marginBottom: "20px",
          }}
        >
          <h2>Authentication</h2>
        </div>
        <div id="auth-body" style={{ margin: "0px 20px" }}>
          {children}
        </div>
      </div>
    </Provider>
  );
}
