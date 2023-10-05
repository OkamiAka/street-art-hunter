import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function StreetArtList() {
  const nav = useNavigate();
  const [streetArts, setStreetArts] = useState([]);
  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
      }/street-arts`
    )
      .then((response) => response.json())
      .then((data) => {
        setStreetArts(data);
      });
  }, []);

  return (
    <div className="gallery">
      {/* <Link to="/street-arts-pending">
        ⇨Allez aux street arts en attente de validation⇦
      </Link> */}
      <h1>street-arts list</h1>
      <section>
        {streetArts.map((streetArt) => (
          <Link
            key={streetArt.id}
            to={`/street-arts/${streetArt.id}/${streetArt.longitude}/${streetArt.latitude}`}
          >
            <figure>
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}${streetArt.image}`}
                alt="streetart"
              />

              <figcaption>
                <p>{streetArt.name}</p>

                <p>{streetArt.artistName}</p>

                <p>{streetArt.score} points</p>
              </figcaption>
            </figure>
          </Link>
        ))}
      </section>
      <button type="button" className="retoure" onClick={() => nav("/menu")}>
        retoure a la menu
      </button>
    </div>
  );
}
