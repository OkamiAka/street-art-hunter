import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import MapStreetArt from "./MapStreetArt";

export default function InfoAdminStreetArt() {
  const nav = useNavigate();
  const { token } = useAuth();
  const [streetArt, setStreetArt] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? `http://localhost:5000`
      }/street-arts/${id}`,
      {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setStreetArt(data);
      });
  }, []);
  return (
    <div className="show-art">
      <figure>
        <img
          src={`${import.meta.env.VITE_BACKEND_URL ?? `http://localhost:5000`}${
            streetArt.image
          }`}
          alt=""
          className="img-info-street-art"
        />
        <figcaption>
          {streetArt.name && <p>{streetArt.name}</p>}
          {streetArt.creation_date}
          <p>Score : {streetArt.score} point</p>
          {streetArt.creation_date && (
            <p>Date de creation : {streetArt.creation_date}</p>
          )}
          {streetArt.artistName && (
            <p>
              Artiste :{" "}
              <Link to={`/street-arts/artists/${streetArt.id_artist}`}>
                {streetArt.artistName}
              </Link>
            </p>
          )}
          {/* <p>Géolocalisation :</p> */}
        </figcaption>
        <section className="map-container">
          <MapStreetArt className="map-street-art" />
        </section>
      </figure>
      <button
        type="button"
        className="retoure"
        onClick={() => nav("/street-arts")}
      >
        retoure a la list
      </button>
    </div>
  );
}
