import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/card";
import Header from "../header/Header";
import { useLocation } from 'react-router-dom';

const MovieList = ({ searchQuery }) => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
let loction=useLocation()
  useEffect(() => {
    console.log(loction.pathname)
    getData();

  }, [type, searchQuery]);

  const getData = () => {
    const apiUrl = searchQuery
      ? `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${searchQuery}`
      : `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <>
    {loction.pathname==='/home'?
    
    <div className="movie__list">
      <h2 className="list__title">
        {searchQuery
          ? `Search Results for "${searchQuery}"`
          : (type ? type : "POPULAR").toUpperCase()}
      </h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Cards movie={movie} />
        ))}
      </div>
    </div>:
    
    <>
    <Header/>
    <div className="movie__list">
      <h2 className="list__title">
        {searchQuery
          ? `Search Results for "${searchQuery}"`
          : (type ? type : "POPULAR").toUpperCase()}
      </h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Cards movie={movie} />
        ))}
      </div>
    </div>



    </>
    
    }

    </>
  );
};

export default MovieList;
