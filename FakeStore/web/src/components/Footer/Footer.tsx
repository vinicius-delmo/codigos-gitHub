import FooterLeft from "./FooterLeft/FooterLeft";
import FooterRight from "./FooterRight/FooterRight";
import "./styles.css";

const Footer = () => {
  return (
    <>
    <footer>
      <div id="socialMediaAndDescription">
        <div id="footerLeft">
          <FooterLeft />
        </div>
      </div>

      <div id="moreInformations">
        <div id="footerRight">
        <div className="footerColumn">
          <FooterRight
            title="Information"
            firstSubTitle="About"
            secondSubTitle="Product"
            thirdSubTitle="Blog"
          />
        </div>
        <div className="footerColumn">
          <FooterRight
            title="Company"
            firstSubTitle="Community"
            secondSubTitle="Career"
            thirdSubTitle="Our Story"
          />
        </div>
        <div className="footerColumn">
          <FooterRight
            title="Contact"
            firstSubTitle="Getting Start"
            secondSubTitle="Pricing"
            thirdSubTitle="Resources"
          />
        </div>

        </div>
      </div>
    </footer>
      </>
  );
};

export default Footer;
