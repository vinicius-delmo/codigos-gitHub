
import AboutCard from "./AboutCard/AboutCard";
import TitleSubtitle from "./TitleSubtitle/TitleSubtitle";
import "./styles.css";

const About = () => {
  return (
    <div className="aboutContainer">
      <div id="aboutHeader">
        <TitleSubtitle title="About us" subtitle="Order now and appreciate the beauty of nature"/>
      </div>
      <div id="aboutCards"><AboutCard/><AboutCard/><AboutCard/></div>
    </div>
  );
};

export default About;
