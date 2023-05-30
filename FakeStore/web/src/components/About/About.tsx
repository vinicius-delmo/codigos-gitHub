import AboutCard from "./AboutCard/AboutCard";
import TitleSubtitle from "./TitleSubtitle/TitleSubtitle";
import "./styles.css";

const About = () => {
  return (
    <div className="aboutContainer">
      <div id="aboutHeader">
        <TitleSubtitle
          title="About us"
          subtitle="Buy now and experience the wonders of our products."
        />
      </div>
      <div id="aboutCards">
        <AboutCard icon="./About/cart.svg" title="Large Assortment" subtitle="We offer different types of products, listed in several categories. "/>
        <AboutCard icon="./About/box.svg" title="Fast & Free Shipping" subtitle="4-day or less delivery time, free shipping and an expedited delivery option."/>
        <AboutCard icon="./About/phone.svg" title="24/7 Support" subtitle="Answers to any business related inquiry 24/7 and in real-time."/>
      </div>
    </div>
  );
};

export default About;
