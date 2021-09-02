import React from "react";
// import ReactPlayer from "react-player";
import YouTube from "react-youtube";

const Trailer = ({ location: { state }, history, match, movie }) => {
  return (
    <div>
      <h1 style={{ color: "#92FE9D" }}>Movie Trailer</h1>
      <h2 style={{ color: "#00C9FF" }}>{state.movie.name}</h2>

      <YouTube videoId={state.movie.video} />

      <button onClick={() => history.goBack()}>Previous page</button>
      <button onClick={() => history.push("/")}>Home</button>
    </div>
  );
};

export default Trailer;
