import React from "react";
import styles from "@/styles/404.module.scss";

export default function Custom404() {
  return (
    <div className={styles.error}>
      <img src="/404.png" alt="404" className={styles.error__image} />
      <div>404 | Halaman Tidak ditemukan</div>
    </div>
  );
}
