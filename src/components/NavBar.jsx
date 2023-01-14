import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <h1>Menu</h1>
      <Link to={"/login"}>Login</Link>
      <Link to={"/chat"}>Chat</Link>
    </div>
  );
}

export default NavBar;
