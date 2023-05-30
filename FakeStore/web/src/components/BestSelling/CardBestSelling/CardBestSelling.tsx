import "./styles.css";
const CardBestSelling = () => {
  return (
    <div className="cardContainer">
      <div><h1>Best Selling Products</h1></div>
      <div><p>The easiest way to buy your favorite products</p> </div>
      <a href="/products">
      <button><span>See more</span> <img src="./BestSelling/arrow.svg" alt="" /></button></a>
    </div>
  );
};

export default CardBestSelling;
