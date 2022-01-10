import React from "react";
import "../App.css";

function Book(props) {

  return (
    <div className="bookCont">

      <div class="bookSect">

        <h1 className="bookTitle">{props.title}</h1>
          <img src={props.image} className="bookImage" alt="Book Cover"/>
          <p className="bookDesc">{props.description}</p>

        </div>

      </div>
  );

}


export default Book;
