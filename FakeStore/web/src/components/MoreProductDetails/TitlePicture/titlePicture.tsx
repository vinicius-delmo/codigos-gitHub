import "./styles.css";

const TitlePicture = ({title, img}:any) => {
  return (
    <div id="titlePicture">
      <h1>{title}</h1>
      <img src={img} alt={title} />
    </div>
  );
};

export default TitlePicture;
