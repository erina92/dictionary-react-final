import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms mt-2">
        <h2>Synonyms</h2>
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return (
              <li key={index}>
                {synonym} {""}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
