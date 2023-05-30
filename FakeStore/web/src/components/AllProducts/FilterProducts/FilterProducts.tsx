import React, { useEffect, useState } from "react";
import "./styles.css";
import requester from "../../../services/api";

const FilterProducts = ({ onChange, value }: any) => {
  console.log(value, "value");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const response: any = await requester(
          "http://localhost:3030/products/categories"
        );

        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
      console.log(categories);
    }
    getCategories();
  }, [categories]);

  return (
    <div className="containerSelect">
      <select id="FilterProducts" value={value} onChange={onChange}>
        {categories &&
          categories.map((value: string, index: number) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
      </select>
      <button>
        <img src="/Products/arrowBottom.svg" alt="" />
      </button>
    </div>
  );
};

export default FilterProducts;
