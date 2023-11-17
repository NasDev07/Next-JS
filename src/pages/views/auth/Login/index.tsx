import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./Login.module.css";

export default function LoginViews() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/product");
  };

  return (
    <div className={styles.login}>
      <h1 className="text-3xl font-bold">Login Page</h1>
      <button onClick={() => handleLogin()}>Login</button>
      Belum punya akun <Link href={"/auth/register"}>disini</Link>
    </div>
  );
}
