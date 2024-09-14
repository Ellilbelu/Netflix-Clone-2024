import React, { useState } from "react";
import Row from "../Row/Row";
import requests from "../../utils/request";
function RowList() {
  const [activeTrailer, setactiveTrailer] = useState();
  // passing row titles and movie urls using props

  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOrginals}
        isLargeRow={true}
        activeTrailer={activeTrailer}
        setactiveTrailer={setactiveTrailer}
      />
      <Row
        title="Tranding Now"
        fetchUrl={requests.fetchTranding}
        activeTrailer={activeTrailer}
        setactiveTrailer={setactiveTrailer}
      />
      <Row
        title="Top Rated Movies"
        fetchUrl={requests.fetchTopRatedMovies}
        activeTrailer={activeTrailer}
        setactiveTrailer={setactiveTrailer}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        activeTrailer={activeTrailer}
        setactiveTrailer={setactiveTrailer}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        activeTrailer={activeTrailer}
        setactiveTrailer={setactiveTrailer}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        activeTrailer={activeTrailer}
        setactiveTrailer={setactiveTrailer}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        activeTrailer={activeTrailer}
        setactiveTrailer={setactiveTrailer}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        activeTrailer={activeTrailer}
        setactiveTrailer={setactiveTrailer}
      />
      <Row
        title="Tv Shows"
        fetchUrl={requests.fetchTvShow}
        activeTrailer={activeTrailer}
        setactiveTrailer={setactiveTrailer}
      />
    </>
  );
}

export default RowList;
