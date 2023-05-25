import CardBestSelling from "./CardBestSelling/CardBestSelling";
import Product from "./Product/Product";
import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";


type ProductType = {
  id: number;
  image: string;
  title: string;
  price: number;
};

const requester = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

const formatPrice = (price: number) =>
  price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "USD",
  });

const BestSelling = () => {
  const [products, setProducts] = useState([] as ProductType[]);

  useEffect(() => {
    async function getProductsList() {
      /**
      try {
        const response = await fetch("http://localhost:3030/products", {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
        console.log(response, "response");
        const data = await response.json();
        console.log(data, "data from API");
      } catch (error) {
        console.log(error, "error from API");
      }
      */

      try {
        const response = await requester("http://localhost:3030/products");
        const [product1, product2, product3] = response.data.filter(
          (product: any) =>
            product.rating.rate > 4.6 && product.rating.count > 100
        );

        setProducts([product1, product2, product3]);
      } catch (error) {
        console.log(error, "error from API");
      }
    }

    getProductsList();
  }, []);

  return (
    <div className="containerBestSelling">
      <div id="divLeft">
        <div id="divLeftProduct">
          <CardBestSelling />
        </div>
      </div>
      <div id="divRight">
        <div id="divRightProduct">
          {products.map(({ id, image, title, price }: ProductType) => (
            <Product
              key={id}
              id={id}
              img={image}
              title={title}
              price={formatPrice(price)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
