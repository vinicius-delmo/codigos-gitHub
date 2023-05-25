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
        <CategorieCard />
        <CategorieCard />
        <CategorieCard />
      </div>
    </div>
  );
};

export default Categories;
