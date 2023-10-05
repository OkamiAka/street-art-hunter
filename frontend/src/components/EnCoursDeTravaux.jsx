import { useNavigate } from "react-router-dom";
import travaux from "../assets/travaux.gif";

export default function EnCoursDeTravaux() {
  const nav = useNavigate();

  return (
    <div className="enCours">
      <img src={travaux} alt="" />
      <p>
        En cours de développement
        <br />
        Veuillez revenir plus tard
      </p>
      <button type="button" className="retoure" onClick={() => nav("/menu")}>
        retoure au menu
      </button>
    </div>
  );
}
