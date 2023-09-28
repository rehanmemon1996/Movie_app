import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import axios from "axios";
import MovieList from "../../components/movieList/movieList";
import Header from "../../components/header/Header";
// import Header from "../../components/header/Header"; // Import the Header component

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); // Add a state for search query

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }, [])

//     const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

  
//   let [datas,setdata]=useState([])
//   let [loading,setloading]=useState(false)
//   useEffect(()=>{
//     let config = {
//       method: 'get',
//       maxBodyLength: Infinity,
//       url: 'https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US',
//       headers: { }
//     };
    
//     axios.request(config)
//     .then((data) => {
//       console.log(JSON.stringify(data));
//       setPopularMovies(data.results)
//     //   setdata(response.data.data)
//       setloading(true)
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   },[loading])

//   const handlechange = (e) => {
//     const searchTerm = e.target.value.toLowerCase();

//     // console.log(searchTerm)
//     if(datas.length>=0){
//       const results = datas.filter((item) =>
//       item.name.toLowerCase().includes(searchTerm)
//     );
//     setSearchTerm(e.target.value);
//     setSearchResults(results);
//     }}
    const handleSearch=(e)=>{
        setSearchQuery(e.target.value)
        console.log(searchQuery)
    }

    return (
        <>
         <Header/>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    showStatus={false}
                >
                    {popularMovies.map(movie => (
                        <Link key={movie.id} style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} >
                            <div className="posterImage">
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt={movie.original_title} />
                            </div>
                            <div className="posterImage__overlay">
                                <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
                                <div className="posterImage__runtime">
                                    {movie ? movie.release_date : ""}
                                    <span className="posterImage__rating">
                                        {movie ? movie.vote_average : ""}
                                        <i className="fas fa-star" />{" "}
                                    </span>
                                </div>
                                <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                            </div>
                        </Link>
                    ))}
                </Carousel>
                <br />
                <br />
                <div className="search-bar" style={{width:50+'%',marginLeft:25+"%",color:"black"}}>
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e)}
                />
                {/* <button onClick={handleSearch}>Search</button> */}
            </div>
                {/* Pass the search query to the MovieList component */}
                {/* <Header onSearch={setSearchQuery} /> */}
                <MovieList searchQuery={searchQuery} />
            </div>
        </>
    )
}

export default Home;
