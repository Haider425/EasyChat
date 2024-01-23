import React, { useEffect } from "react";
import { userAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {currentUser, signInWithGoogle} = userAuth();
  console.log(currentUser);
  
  const handleLogin = async () => {

    try{
      await signInWithGoogle();
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    if(currentUser){
      navigate("/chat");
    }
  }, [currentUser]);



  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there! 👋🏻</h1>
          <p className="py-6">
           Join our chat app for easy and enjoyable 
           conversations. Connect effortlessly and 
           share ideas without any hassle. Let's chat!
          </p>
          <button onClick={handleLogin} className="btn btn-primary text-xl">Log In 🔒</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
