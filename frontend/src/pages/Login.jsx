import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const { setToken, setRole } = useAuth();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  return (
    <form
      className="form-login"
      onSubmit={(event) => {
        event.preventDefault();
        fetch(
          `${
            import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
          }/login`,
          {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              username: usernameRef.current.value,
              password: passwordRef.current.value,
            }),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.token !== null) {
              setToken(data.token);
              setRole(data.role);
              sessionStorage.setItem("role", data.role);
              sessionStorage.setItem("token", data.token);
              setIsError(false);
              navigate("/camera");
            } else {
              setIsError(true);
            }
          });
      }}
    >
      {" "}
      <div className="form-line">
        {" "}
        <label htmlFor="username">Nom d'utilisateur</label>{" "}
        <input ref={usernameRef} type="text" id="username" name="username" />{" "}
      </div>{" "}
      <div className="form-line">
        {" "}
        <label htmlFor="password">Mot de passe</label>{" "}
        <input
          ref={passwordRef}
          type="password"
          id="password"
          name="password"
        />{" "}
      </div>{" "}
      {isError && <p className="error-message">Mauvais identifiants</p>}
      <button type="submit">Jouer</button>{" "}
    </form>
  );
}
export default Login;
