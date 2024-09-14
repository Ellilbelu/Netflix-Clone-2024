import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/request.js";
import "./banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    (async () => {
      // promising to fetch the data form the source
      try {
        const request = await axios.get(requests.fetchNetflixOrginals);
        console.log(request);
        // selecting one random movie at every refresh/mount
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);
  console.log(movie);

  //a function for limiting the characters of the movie description
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    // stying the banner div
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* selecting the movie by its title or its name or orginal name */}
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button">My List</button>
          {/* rendering the truncate function about the description */}
        </div>
        <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner__fadeBottom" />
    </div>
  );
}

export default Banner;

// const [movie, setMovie] = useState([]);
// useEffect(() => {
//   async function fetchData() {
//     const request = await axios.get(requests.fetchNetflixOrginals);
//     console.log(request);
//     setMovie(
//       request.data.results[
//         Math.floor(Math.random() * request.data.results.length)
//       ]
//     );
//     return request;
//   }
//   fetchData();
// }, []);
// console.log(movie);
