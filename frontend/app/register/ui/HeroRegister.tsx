"use client";
import React, { useState } from "react";

const registerPerson = async (username: string, email: string, password: string) => {
    if (!username || !email || !password) {
        console.error("Invalid user data provided for registration.");
        return;
    }

    try {
        const response = await fetch("http://127.0.0.1:5076/api/User", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accept": "*/*"
            },
            body: JSON.stringify({
                username,   // zamiast login
                email,
                password,
                active: true
            }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log("User registered successfully:", data);
        } else {
            console.error("Error while registering user:", data);
        }
    } catch (error) {
        console.error("Failed to send data to the server:", error);
    }
};

export default function Register() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        await registerPerson(username, email, password);
        setIsRegistered(true);
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Zarejestruj się by rywalizować w trybie online!</p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
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
                                Register
                            </button>
                        </div>
                        {isRegistered && (
                            <p className="text-green-500 mt-2">
                                Rejestracja zakończona pomyślnie!
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
