import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Login() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/product");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => handleLogin()}>Login</button>
      Belum punya akun <Link href={"/auth/register"}>disini</Link>
    </div>
  );
}
