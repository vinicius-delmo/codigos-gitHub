import "./App.css";
import City from "./assets/city.jpg";
import CarDetails from "./components/CarDetails";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import Fragment from "./components/Fragment";

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>

      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name="Matheus" />
      <CarDetails brand="VW" km={20000} color="Prata" />
      <CarDetails brand="Ford" km={0} color="Vermelho" />
      <CarDetails brand="Toyota" km={10000} color="Preto" />
      <Fragment />
    </div>
  );
}

export default App;
