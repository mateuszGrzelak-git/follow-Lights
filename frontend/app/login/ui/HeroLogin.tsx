"use client";
import React, { useState } from "react";

const loginPerson = async (login: string, password: string) => {
  if (!login || !password) {
      console.error("Invalid user data provided for login.");
      return;
  }

  try {
      const response = await fetch("/api/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ login, password }),
      });

      const data = await response.json();

      if (response.ok) {
          console.log("File saved successfully:", data.message);
      } else {
          console.error("Error:", data.error);
      }
  } catch (error) {
      console.error("Failed to send data to the server:", error);
  }
};

export default function HeroLogin(){
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLogged(true);
    await loginPerson(login,password);
  };
    return <>
      <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p>
          Zaloguj się by rywalizować w trybie online!
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Login</span>
            </label>
            <input 
            type="login" 
            placeholder="login" 
            className="input input-bordered" 
            required
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input 
            type="password" 
            placeholder="password" 
            className="input input-bordered" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
    </>
}