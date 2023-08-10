import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import "./Detail.css";
import { Link, useLocation } from "react-router-dom";

function Detail() {
  const location = useLocation();
  const anime = location.state;

  console.log("dataAnime", anime);

  return (
    <div className="Detail">
      <header className="Detail-header">
        <Topbar />
        <div className="container">
          <div className="grid1">
            <div className="grid-item">
              <img
                className="responsive-img"
                src={anime.attributes.posterImage.medium}
                alt="descriptions"
              />
            </div>
          </div>
          <div className="grid2">
            <div className="grid-item">
              <div className="D-JudulInggris">
                {anime.attributes.titles.en_jp}
              </div>
              <div className="D-JudulJepang">
                {anime.attributes.titles.ja_jp}
              </div>
              <div className="Detail-Rating">
                Rating : {anime.attributes.averageRating}%
              </div>
              <div className="synopsisStyle">Synopsis:</div>
              <div className="synopsis">{anime.attributes.synopsis}</div>

              <Link to={"/"}>
                <button className="Back">Back</button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Detail;
