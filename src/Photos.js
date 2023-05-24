import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                <img src={photo.src.tiny} alt={photo.alt} key={index} />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
