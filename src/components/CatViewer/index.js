import React from "react";
import "./index.css";

export default function CatViewer(props) {
  let cat = props.catDetails;

  return (
    <div className="cat_card">
      <div className="cat_image">
        <div className="overlay" onClick={props.onClick}></div>
        <img src={cat.url} alt=""/>
      </div>
      <div className="padded-small" style={{ position : 'relative' }}>
        <small className="muted-text">Name</small>
        <h3>{cat.name}</h3>
        <small className="muted-text">Hobbies</small>
        <h3>{cat.hobbies}</h3>
        <div style={{ position: "absolute", bottom: 0 }}>
          <p className="muted-text">{cat.clickCount} clicks</p>
        </div>
      </div>
    </div>
  );
}