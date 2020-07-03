import React, { Fragment } from "react";
import Header from "./Header";
import Head from "next/head";
import styles from "./Layout.module.css";

const Layout = ({ children }) => (
  <Fragment>
    <Head>
      <title>Scott Plybon Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;700;900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Header />
    <main className={styles.main}>{children}</main>
  </Fragment>
);

export default Layout;
