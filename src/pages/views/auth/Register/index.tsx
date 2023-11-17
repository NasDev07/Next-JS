import Link from "next/link";
import React from "react";

export default function RegisterViews() {
  return (
    <div>
      <h1>Register Page</h1>
      Sudah punya akun <Link href={"/auth/login"}>disini</Link>
    </div>
  );
}
