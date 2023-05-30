import "./styles.css";

const Details = ({category, rate, count}:any) => {
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
      <h1>Category</h1>
    </td>
    <td>
      <p>{category}</p>
    </td>
  </tr>
  <tr>
    <td>
      <h1>Rate</h1>
    </td>
    <td>
      <p>{rate}</p>
    </td>
  </tr>
  <tr>
    <td>
      <h1>Count</h1>
    </td>
    <td>
      <p>{count}</p>
    </td>
  </tr>
</table>

      
    </div>
  );
};

export default Details;
