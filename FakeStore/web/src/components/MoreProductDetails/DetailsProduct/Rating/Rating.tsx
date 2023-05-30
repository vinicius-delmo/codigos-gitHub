import "./styles.css";

const Rating = ({count, title}: any) => {
  return (
    <div id="rating">
      <h2>Marca: {title}</h2>
      <div id="ratingBottom">
        <div id="ratingCount">{count} avaliações de clientes</div>
      </div>
    </div>
  );
};

export default Rating;
