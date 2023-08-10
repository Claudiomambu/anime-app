import React from "react";
import "./Card.css";
import axios from "axios";

function Card() {
  const [anime, setAnime] = useState([]);

  const getDataAnime = async () => {
    const url = "https://kitsu.io/api/edge/anime";
    const listAnime = await axios.get(url);
    // console.log("responData:", listAnime.data);
    return listAnime.data.data;
  };

  // useEffect(() => {
  //   setAnime(getDataAnime());
  // }, []);

  useEffect(() => {
    getDataAnime().then((data) => {
      setAnime(data);
    });
  }, []);

  console.log({ dataAnime: anime });

  {
    anime.map((key) => (
      <div className="A-wrap">
        <img className="A-gambar" src={key.posterImage} />
        <div className="A-judulInggris">{key.titles}</div>
        <div className="A-judulJepang">kimetsu no yaiba</div>
        <div className="A-rating">{key.averangeRating}</div>
      </div>
    ));
  }

  //   const DaftarAnime = () => {
  //     return anime.map((url, i) => {
  //       return (
  //         <div className="A-wrap" key={i}>
  //           <img className="A-gambar" src={url.posterImage} />
  //           <div className="A-judulInggris">{url.titles}</div>
  //           <div className="A-judulJepang">kimetsu no yaiba</div>
  //           <div className="A-rating">{url.averangeRating}</div>
  //         </div>
  //       );
  //     });
  //   };
}

export default Card;
