import React from "react";
export default function Card(props) {
  return (
    <div className="mystyle">
      <h2>{props.name}</h2>
      <img className="round" src={props.img} alt="logo" height="100px" />
      <p>{props.no}</p>
    </div>
  );
}
