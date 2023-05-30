import TitlePicture from "./TitlePicture/titlePicture";
import "./styles.css";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Price from "./DetailsProduct/Price/Price";
import Rating from "./DetailsProduct/Rating/Rating";
import Details from "./DetailsProduct/Details/Details";
import requester from "../../services/api";
import EmptyState from "../EmptyState/EmptyState";

type ProductType = {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
  description: string;
  rating: any;
};

const formatPrice = (price: number) =>
  price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "USD",
  });

const MoreProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    async function getProductsList() {
      try {
        const response = await requester(
          "http://localhost:3030/products/" + id
        );
        setProduct(response.data);
      } catch (error) {
        console.log(error, "error from API");
      }
    }

    getProductsList();
  }, [id]);

  if (!product) {
    return (
      <div>
        <EmptyState />
      </div>
    );
  }
  const calculateStars = (response: any) => {
    const width = 100 - response.rating.rate * 20;
    return width;
  };

   

  return (
    <div id="productDetailsContainer">
      <div id="productDetailsLeft">
        <div id="TitlePicture">
          <TitlePicture title={product?.title} img={product?.image} />
        </div>
      </div>

      <div id="productDetailsRight">
        <div id="DetailsProduct">
          <div className="containerInformationsProduct displayRow">
            <div className="starsContainer">
              <img src="/star.png" alt="" />
              <div
                className="cover"
                style={product && { width: `${calculateStars(product)}%` }}
              ></div>
            </div>
            <Rating count={product?.rating.count} title={product?.title} />
          </div>

          <Price title={formatPrice(product?.price)} subtitle={product?.title} description={product?.description}/>
          <Details
            category={product?.category}
            rate={product?.rating.rate}
            count={product?.rating.count}
          />
        </div>
      </div>
    </div>
  );
};

export default MoreProductDetails;
