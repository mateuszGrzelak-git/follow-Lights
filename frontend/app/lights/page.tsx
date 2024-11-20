"use client";

import React, { useRef } from 'react';
import Light from './ui/light';

// Typ dla referencji komponentów Light
type LightHandle = {
    lightEvent: () => void;
};

const count = 9;

export default function Lights() {
    const lightsRef = useRef<(LightHandle | null)[]>(Array(count).fill(null));

    // Funkcja zapalająca wszystkie lampki
    const turnOnAllLights = () => {
        lightsRef.current.forEach((light) => {
            if (light) {
                light.lightEvent(); // Wywołanie lightEvent dla każdej lampki
            }
        });
    };

    return (
        <React.Fragment>
            <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: count }).map((_, index) => {
                    const lightRef = React.createRef<LightHandle>();
                    lightsRef.current[index] = lightRef.current; // Przechowywanie referencji
                    return (
                        <Light
                            key={index}
                            ref={lightRef} // Przekazanie ref bezpośrednio
                        />
                    );
                })}
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