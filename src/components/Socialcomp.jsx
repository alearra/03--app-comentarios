import React from "react";
import "../styles-sheet/Socialcomp.css";

export function Socialcomp() {
  return (
    <div className="contenedor-principal">
      <div className="social">
        <a
          href="https://www.linkedin.com/in/alejandro-arra-92b305242/"
          class="fa-brands fa-linkedin"
          target="_blank"
        ></a>
        <a
          href="https://github.com/alearra"
          class="fa-brands fa-github"
          target="_blank"
        ></a>
        <a
          href="https://twitter.com/_alearra"
          class="fa-brands fa-square-twitter"
          target="_blank"
        ></a>
        <a
          href="https://www.instagram.com/alejandroarra"
          class="fa-brands fa-square-instagram"
          target="_blank"
        ></a>
      </div>

      <div className="developer">
        <h4>
          {" "}
          Developer by{" "}
          <a href="https://www.linkedin.com/in/alejandro-arra-92b305242/">
            {" "}
            alearra{" "}
          </a>
        </h4>
      </div>
    </div>
  );
}
