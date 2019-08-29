import React from "react";

export default function ListOfNames(props) {
  console.log(props);
  return (
    <div>
      <div className="person-information">
        <h1>
          {`${props.pbdata[props.pbIndex].name.first} ${props.pbdata[props.pbIndex].name.last}`}
        </h1>
        <h2>
          From: {props.pbdata[props.pbIndex].city},{" "}
          {props.pbdata[props.pbIndex].country}
        </h2>
        <h2>Job Title: {props.pbdata[props.pbIndex].title}</h2>
        <h2>Employer: {props.pbdata[props.pbIndex].employer}</h2>
        <h2>Favorite Movies: {props.pbdata[props.pbIndex].favoriteMovies}</h2>
      </div>
      <div className="page-number">{props.pbdata[props.pbIndex].id}</div>
    </div>
  );
}
