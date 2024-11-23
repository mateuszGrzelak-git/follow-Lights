"use client";

import React, { useRef, useEffect } from 'react';
import Light from './ui/light';

type LightHandle = {
    lightEvent: () => void;
};

const count = 9;

export default function Lights() {
    const lightsRef = useRef<(LightHandle | null)[]>([]);

    useEffect(() => {
        lightsRef.current = Array(count).fill(null);
    }, []);

    const turnOnAllLights = () => {
        lightsRef.current.forEach((light) => {
            if (light) {
                light.lightEvent();
            }
        });
    };

    return (
        <React.Fragment>
            <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: count }).map((_, index) => (
                    <Light
                    key={index}
                    ref={(el) => {
                        lightsRef.current[index] = el;
                    }}
                />
                
                ))}
            </div>

            <button
                onClick={turnOnAllLights}
                className="mt-4 p-2 bg-blue-500 text-white rounded"
            >
                Turn On All Lights
            </button>

            <p className="text-9xl/[300px]">Wynik</p>
        </React.Fragment>
    );
}
