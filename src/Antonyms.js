import React from "react";
import "./Antonyms.css";

export default function Antonyms(props) {
  if (props.antonyms) {
    return (
      <div className="Antonyms mt-2">
        <h2>Antonyms</h2>
        <ul>
          {props.antonyms.map(function (antonym, index) {
            return (
              <li key={index}>
                {antonym} {""}
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
