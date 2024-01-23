import React from "react";
import { userAuth } from "../context/AuthContext";

const Navbar = () => {
  const {currentUser, logout} = userAuth();

  const handleLogout = async () => {
    try{
      await logout();
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className="navbar fixed z-10 bg-primary text-primary-content">
      <div className="containerWrap flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">EasyChat</a>
        {currentUser ? <button onClick={handleLogout} className="btn btn-active">Logout 🔓</button> : ""}
      </div>
    </div>
  );
};

export default Navbar;
