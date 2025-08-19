"use client";
import React, { useState } from "react";

const loginPerson = async (username: string, password: string) => {
  if (!username || !password) {
    console.error("Invalid user data provided for login.");
    return;
  }

  try {
    const response = await fetch("http://127.0.0.1:5076/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept": "*/*"
      },
      body: JSON.stringify({ username, password }), // ważne: username zamiast login
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Login successful:", data);
      return data;
    } else {
      console.error("Error:", data);
    }
  } catch (error) {
    console.error("Failed to send data to the server:", error);
  }
};

export default function HeroLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = await loginPerson(username, password);
    if (result) {
      setIsLogged(true);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p>Zaloguj się by rywalizować w trybie online!</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="input input-bordered"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
            {isLogged && (
              <p className="text-green-500 mt-2">
                Logowanie zakończone pomyślnie!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
