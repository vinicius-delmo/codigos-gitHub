import DetailsProduct from "./DetailsProduct/DetailsProduct";
import TitlePicture from "./TitlePicture/titlePicture";
import "./styles.css";

const MoreProductDetails = () => {
  return (
    <div id="productDetailsContainer">
      <div id="productDetailsLeft">
        <div id="TitlePicture">
          <TitlePicture />
        </div>
      </div>

      <div id="productDetailsRight">
        <div id="DetailsProduct"><DetailsProduct /></div>
        
      </div>
    </div>
  );
};

export default MoreProductDetails;
