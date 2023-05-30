import "./styles.css";

interface SearchProductProps {
    type: string;
    placeholder: string;
    img: string;
    value: string
    onChange: any

  }

const SearchProduct: React.FC<SearchProductProps> = ({ type, placeholder, img, value, onChange}) => {
  return (
    <div className="Searchproduct">
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
      <button>
        <img src={img} alt="" />
      </button>
    </div>
  );
};

export default SearchProduct;
