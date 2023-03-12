import Link from "next/link";
import { Fragment } from "react";
import styles from "./RootPage.module.css";

export default function RootPage() {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "space-around",
          width: "40%",
          height: "100vh",
        }}
        className={styles["root-page"]}
      >
        <Link href="auth/freelancer" className={styles["nav-button"]}>
          I am a Freelancer
        </Link>
        <Link href="auth/client" className={styles["nav-button"]}>
          I am a Client
        </Link>
      </div>
    </Fragment>
  );
}
