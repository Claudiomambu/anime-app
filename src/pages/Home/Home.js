import React, { useState, useEffect } from "react";
import "./Home.css";
import "../../components/Topbar/Topbar";
import Topbar from "../../components/Topbar/Topbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [anime, setAnime] = useState([]);

  const navigate = useNavigate();

  const getDataAnime = async () => {
    const url = "https://kitsu.io/api/edge/anime";
    const listAnime = await axios.get(url);

    return listAnime.data.data;
  };

  useEffect(() => {
    getDataAnime().then((result) => {
      setAnime(result);
    });
  }, []);

  const DaftarAnime = () => {
    const handleDetail = (url) => {
      navigate(`/${url.id}/Detail`, { state: url });
    };

    return anime.map((url, i) => {
      // console.log({ dataURL: url });
      return (
        <div onClick={() => handleDetail(url)}>
          <div className="A-wrap" key={i}>
            <img
              className="A-gambar"
              src={url.attributes.posterImage.small}
              alt="description"
            />
            <div className="A-judulInggris">{url.attributes.titles.en_jp}</div>
            <div className="A-judulJepang">{url.attributes.titles.ja_jp}</div>
            <div className="A-rating">{url.attributes.averageRating}%</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="Home">
      <header className="Home-header">
        <Topbar />
        <div className="A-container">
          <DaftarAnime />
        </div>
      </header>
    </div>
  );
}

export default Home;
