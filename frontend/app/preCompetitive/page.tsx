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

            var opponent = new User();
            opponent.copyInto(getOpponentRequest);

            var player = new User();
            player.copyInto(getPlayerRequest);
        }
        
        getOpponent();
    }, []);
    
    return <>
    <Home />
    <StartFrom5 />
    </>
}