
import React from "react";
import "../styles-sheet/Testimonio.css"



export function Testimonio (props) {
  return (
    <div className="contenedor-testimonio">

      <img 
      className="imagen-testimonio" 
      src={require(`../images/testimonio-${props.image}.jpg`)}
       alt="image de emma" />

      <div className="contenedor-texto-testimonio">

        <p className="nombre-testimonio"> <strong>{props.name}</strong> en {props.city} </p>

        <p className="cargo-testimonio"> {props.cargo} en <strong>{props.company}</strong> </p>

        <p className="texto-testimonio"> "{props.Testimonio}" </p>

      </div>

    </div>
  );
}

;



