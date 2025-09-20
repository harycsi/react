//Függvény, ami jsx-et ad vissza
//JSX = HTML + JAVASCRIPT
//Mivel komponens mindig nagy betűvel kell kezdeni --> Foxterrier

import Paragraph from "./components/Paragraph";
import Vizsla from '../src/images/vizsla.webp';

function FoxterrierAlkalmazas() {
  return (
    <>
      <Paragraph description="Vizsla leírása" title="Vizsla">
      <img src={Vizsla} />
      <div>
        Ez itt a gyerek elem
      </div>
      </Paragraph>
      <Paragraph description="Labrador leírása" title="Labrador"/>
      <Paragraph description="Foxterrier leírása" title="Foxterrier"/>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem inventore nam repellat enim nobis harum similique molestias, totam accusamus ea ullam reprehenderit animi! Reiciendis, nam odit sequi eaque ex eligendi?</p>
    </>
  );
}

export default FoxterrierAlkalmazas;