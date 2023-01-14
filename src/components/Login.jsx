import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      Login
      <div>
        <Link to={"/chat"}>Chat</Link>
      </div>
    </div>
  );
}

export default Login;
