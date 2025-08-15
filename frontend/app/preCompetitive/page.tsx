'use client'

import Home from "../page";
import { User } from "./deserializeClass/User";
import { useEffect } from "react";
import StartFrom5 from "./games/startFrom5";

export default function preCompetitive()
{
    useEffect(() => {
        async function getOpponent()
        {
            const getOpponentRequest = await fetch('http://127.0.0.1:5076/api/User')
            const getPlayerRequest = await fetch('http://127.0.0.1:5076/api/User')

            const opponentData = await getOpponentRequest.json();
            const playerData = await getPlayerRequest.json();


            var opponent = new User();
            opponent.copyInto(opponentData);

            var player = new User();
            player.copyInto(playerData);
        }
        
        getOpponent();
    }, []);
    
    return <>
    <Home />
    <StartFrom5 />
    </>
}