import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const [name] = useState("João");
  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for TRUE sim</p>}
      {!x && <p>Agr x é false</p>}
      {name === "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encotnrado</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;
