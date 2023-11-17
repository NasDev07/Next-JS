import { useRouter } from "next/router";
import { type } from "os";
import React, { useEffect, useState } from "react";

type productType = {
  id: number;
  name: string;
  price: number;
  size: string;
};

export default function ProductPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((response) => {
        setProducts(response.data);
        // console.log(response.data);
      });
  });

  return (
    <div>
      <h1>Product Page</h1>
      {products.map((product: productType) => {
        return <div key={product.id}>{product.name}</div>;
      })}
    </div>
  );
}
