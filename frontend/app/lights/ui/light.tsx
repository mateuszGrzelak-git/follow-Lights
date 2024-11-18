"use client"

import React, { useState } from 'react';

export default function Light()
{
    const [backgroundColor, setBackgroundColor] = useState<string>('white');
    const [index, setIndex] = useState<number>(0);
    
    function lightEvent()
    {
        if (index%2==0)
        {
            setBackgroundColor('black');
        }
        else
        {
            setBackgroundColor('white');
        }
        setIndex(prevIndex => prevIndex + 1);
    }
    
    return <div 
        id="light" 
        className="box-border h-32 w-32 p-4 border-4 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        style={{ backgroundColor }}
        onClick={lightEvent}
        
        ></div>;
    }