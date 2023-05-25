import "./styles.css";

const TitleSubtitle = (props: any) => {
  const {title, subtitle } = props
  return (
    <div id="TitleSubtitle">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default TitleSubtitle;
