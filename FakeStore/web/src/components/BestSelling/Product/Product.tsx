
import "./styles.css";
import { Link } from "react-router-dom";

type Props = {
  id:number;
  img: string;
  title: string;
  price: string;
}

const Product = (props: Props) => {
  const {id, img, title, price} = props

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',

  };

  return (
    <Link to={`/product/${id}`} style={linkStyle}>
      <div id="productContainer">
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
    </Link>
  );
};

export default Product;
