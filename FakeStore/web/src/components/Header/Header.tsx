import "./styles.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container">
      <div id="logo">FAKESTORE</div>
      <div id="firstMenu">
        <nav>
          <ul>
            <li><Link to='/' className="link-styled">Home</Link></li>
            <li><Link to='/products' className="link-styled">Products</Link></li>
           {/*  <li><Link to='/categories' className="link-styled">Categories</Link></li> */}
            <li><Link to='/contacts' className="link-styled">Contacts</Link></li>
          </ul>
        </nav>
      </div>
      <div id="secondMenu">
        <nav>
          <ul>
            <button><img src="./Header/shoppingCart.svg" alt="Carrinho de compras" /></button>
            <button> <img src="./Header/user.svg" alt="" /></button>
            <li>
              <img src="./Header/divider.svg" alt="" />
            </li>
            <button><img src="./Header/filter.svg" alt="" /></button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
