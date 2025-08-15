'use client'

import Home from "../page";
import { User } from "./deserializeClass/User";
import { useEffect, useState } from "react";
import StartFrom5 from "./games/startFrom5";

export default function preCompetitive()
{
    const [opponent, setOpponent] = useState<User | null>(null);
    const [player, setPlayer] = useState<User | null>(null);

useEffect(() => {
    async function getOpponent() {
        try {
            const getOpponentRequest = await fetch(
                'http://127.0.0.1:5076/api/Opponent?id=50800da0-3f43-4b7d-b908-daf27fb5a275'
            );
            const getPlayerRequest = await fetch(
                'http://127.0.0.1:5076/api/User'
            );

            const opponentData = await getOpponentRequest.json();
            const playerData = await getPlayerRequest.json();

            console.log("Fetched opponent:", opponentData);
            console.log("Fetched player:", playerData);

            const newOpponent = new User();
            newOpponent.copyInto(opponentData);

            const newPlayer = new User();
            newPlayer.copyInto(playerData);

            console.log("Mapped opponent:", newOpponent);
            console.log("Mapped player:", newPlayer);

            setOpponent(newOpponent);
            setPlayer(newPlayer);
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    }

    getOpponent();
}, []);

    
    return <>
    <Home />
    <StartFrom5 />
    <p>
        opponent:{" "}
        <span className="Score">
            {opponent ? opponent.username : "Loading..."}
        </span>
    </p>
    <p>
        player:{" "}
        <span className="Score">
            {player ? player.username : "Loading..."}
        </span>
    </p>
    </>
}