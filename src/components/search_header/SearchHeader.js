import styles from "./SearchHeader.module.css";
import React from "react";

const SearchHeader = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.image} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>

      <input className={styles.input} type="search" placeholder="Search" />

      <button className={styles.button} type="submit">
        <img
          className={styles.buttonImage}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
};

export default SearchHeader;
