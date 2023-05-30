import TitleSubtitle from "../About/TitleSubtitle/TitleSubtitle";
import Product from "../BestSelling/Product/Product";
import SearchProduct from "./SearchProduct/SearchProduct";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { getProductsList } from "../../services/products";
import FilterProducts from "./FilterProducts/FilterProducts";
import { useSearchParams } from "react-router-dom";
import EmptyState from "../EmptyState/EmptyState";

type ProductType = {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
};

const formatPrice = (price: number) =>
  price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "USD",
  });

const AllProducts = () => {
  //JS
  const [searchParams] = useSearchParams();
  const paramCategory = searchParams.get("category")?.toLowerCase() || "";

  const [products, setProducts] = useState([] as ProductType[]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState(paramCategory);
  const [showEmptyState, setShowEmptyState] = useState(false);

  useEffect(() => {
    getProductsList()
      .then((resp: any) => {
        setProducts(resp);
      })
      .catch((error: any) => {
        console.log(error, "error from API");
      });
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleOnChangeCategory = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchCategory(event.target.value);
  };
  
  if(products){
    
  }
  let filteredProducts = products;

  if (searchTerm) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

  if (searchCategory) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.category.toLowerCase() === searchCategory.toLowerCase();
    });
  }

  useEffect(() => {
    setShowEmptyState(filteredProducts.length === 0);
  }, [filteredProducts]);


  //HTML
  return (
    <div id="allProductsContainer">
      <div id="allProductsSearchandFilter">
        <div id="search">
          <SearchProduct
            type="text"
            placeholder="Looking for a product?"
            img="/Products/magnifyingGlass.svg"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div id="filter">
          <FilterProducts
            onChange={handleOnChangeCategory}
            value={searchCategory}
          />
        </div>
      </div>
      <TitleSubtitle title="Products" />
      <div className="product-grid">
      {showEmptyState ? (
          <EmptyState/>
        ) : (
          <div className="product">
            {filteredProducts.map(({ id, image, title, price }: ProductType) => (
              <Product
                key={id}
                id={id}
                img={image}
                title={title}
                price={formatPrice(price)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
