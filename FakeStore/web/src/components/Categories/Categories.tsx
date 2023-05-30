import TitleSubtitle from "../About/TitleSubtitle/TitleSubtitle";
import CategorieCard from "./categorieCard/CategorieCard";

import "./styles.css";

const Categories = () => {
  return (
    <div id="categoriesContainer">
      <div id="categorieTitle">
        <div>
          <TitleSubtitle
            title="Categories"
            subtitle="Find what you are looking for"
          />
        </div>
      </div>
      <div id="categoriesCards">
        <div className="cardCategory">
          <CategorieCard
            image="./Categories/electronics.jpg"
            title="Electronics"
            subtitle="Technological innovation at the service of your lifestyle."
          />
        </div>
        <div className="cardCategory">
          <CategorieCard
            image="./Categories/jewel.jpg"
            title="Jewelery"
            subtitle="Timeless shine that enchants and enhances your beauty."
          />
        </div>
        <div className="cardCategory">
          <CategorieCard
            image="./Categories/mens.jpg"
            title="Men's clothing"
            subtitle="Sophisticated style for modern and elegant men."
          />
        </div>
        <div className="cardCategory">
          <CategorieCard
            image="./Categories/womens.jpg"
            title="Women's clothing"
            subtitle="Radiant elegance for empowered and independent women."
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
