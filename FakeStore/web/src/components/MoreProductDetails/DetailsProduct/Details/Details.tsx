import "./styles.css";

const Details = () => {
  return (
    <div id="Details">
      {/* Alterar para grid ou tabela */}
      {/* <div className="titleDescription">
        <h1>Marca</h1><p>Marca</p></div>
      <div className="titleDescription"><h1>Materiais</h1><p>Materiais</p></div>
      <div className="titleDescription"><h1>Dimensões do produto</h1><p>Dimensões do produto</p></div>
      <div className="titleDescription"><h1>Tipo de montagem</h1><p>Tipo de montagem</p></div>
      <div className="titleDescription"><h1>Tipo de acabamento</h1><p>Tipo de acabamento</p></div> */}
      <table>
  <tr>
    <td>
      <h1>Marca</h1>
    </td>
    <td>
      <p>Marca</p>
    </td>
  </tr>
  <tr>
    <td>
      <h1>Materiais</h1>
    </td>
    <td>
      <p>Materiais</p>
    </td>
  </tr>
  <tr>
    <td>
      <h1>Dimensões do produto</h1>
    </td>
    <td>
      <p>Dimensões do produto</p>
    </td>
  </tr>
  <tr>
    <td>
      <h1>Tipo de montagem</h1>
    </td>
    <td>
      <p>Tipo de montagem</p>
    </td>
  </tr>
  <tr>
    <td>
      <h1>Tipo de acabamento</h1>
    </td>
    <td>
      <p>Tipo de acabamento</p>
    </td>
  </tr>
</table>

      
    </div>
  );
};

export default Details;
