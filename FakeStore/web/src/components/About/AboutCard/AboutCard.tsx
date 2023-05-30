import "./styles.css";

const AboutCard = ({icon, title, subtitle}: any) => {
  return (
    <div id="AboutCard">
      <img src={icon} alt="" />
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default AboutCard;
