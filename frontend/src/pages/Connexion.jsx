import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

import logo from "../assets/logo.png";

function Connexion() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="connexion">
      <img src={logo} alt="" />
      <div className="form-connexion">
        <div className="change-menu">
          <button type="button" onClick={() => setIsLogin(true)}>
            Login
          </button>
          <button type="button" onClick={() => setIsLogin(false)}>
            Register
          </button>
        </div>
        <div className="form-content">{isLogin ? <Login /> : <Register />}</div>
      </div>
    </div>
  );
}

export default Connexion;
