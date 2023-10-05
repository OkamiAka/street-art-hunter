import { useNavigate } from "react-router-dom";
import stop from "../assets/stop.webp";

export default function Autre() {
  const nav = useNavigate();

  return (
    <div className="enCours">
      <img src={stop} alt="" />
      <p>il y a rien ici</p>
      <button type="button" className="retoure" onClick={() => nav("/")}>
        retoure
      </button>
    </div>
  );
}
