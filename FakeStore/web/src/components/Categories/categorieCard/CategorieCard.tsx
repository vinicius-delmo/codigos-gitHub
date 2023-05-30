import "./styles.css";
import { Link } from "react-router-dom";

const CategorieCard = ({ image, title, subtitle }: any) => {


  return (
    <Link className="link-styled" to={`/products?category=${title}`}>
      <div id="categorieCard">
        <img src={image} alt="" id="categorieImage" />
        <h3>{title}</h3>
        <p>{subtitle}.</p>
        <ul>
          <li id="buttonExplore">
            <span>Explore</span> <img src="./Categories/arrow.svg" alt="" />
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default CategorieCard;
