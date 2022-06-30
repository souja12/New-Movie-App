import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import MovieListHeading from "./MovieListHeading";
import SearchBox from "./SearchBox";
import AddFavourites from "./AddFavourites";
import RemoveFavourites from "./RemoveFavourites";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Database from "./data";
import "../App.css";
import styled from "styled-components";

const CoverImage = styled.img`
  object-fit: cover;
  height: 350px;
  padding: 5px;
`;
var movies = Object.keys(Database);

export default function Home() {
  const [userGenre, setgenre] = useState("Horror");

  function OnClickHandler(item) {
    setgenre(item);
  }
  return (
    <div className="App">
      <h2 className="head">
        <b> MOVIE RECOMMENDATION FOR YOU</b>
      </h2>
      <div className="bgm1">
        <h4 style={{ color: " blue " }}>
          <b>Select Your favorite genre</b>
        </h4>
        <div>
          {movies.map((item) => (
            <button className="btn" onClick={() => OnClickHandler(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="body1">
        <ul
          className="ul"
          style={{
            paddingInlineStart: "0",
          }}
        >
          {Database[userGenre].map((movie) => (
            <li className="li">
              <div className="div1" key={movie.Title}>
                <b> {movie.Title}</b>
              </div>
              {/* <div className="div2" key={movie.Year}>
                  <b> Year:{movie.Year} </b>
                </div> */}
              <div className="div2" key={movie.Year}>
                <CoverImage src={movie?.Poster} alt={movie?.Title} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
