"use client";

import React, { useRef, useState } from 'react';
import Light from './ui/light';

type LightHandle = {
    lightEvent: () => void;
    isOn: () => boolean;
};

const count = 9;

export default function Lights() {
    const lightsRef = useRef<(LightHandle | null)[]>([]);
    const [activeCount, setActiveCount] = useState(0);

    const turnOnAllLights = () => {
        let turnedOnCount = 0;

        lightsRef.current.forEach((light) => {
            if (light) {
                if (!light.isOn()) {
                    light.lightEvent();
                    turnedOnCount++;
                }
            }
        });

        setActiveCount((prev) => prev + turnedOnCount);
    };

    const updateActiveCount = (isOn: boolean) => {
        setActiveCount((prev) => (isOn ? prev + 1 : prev - 1));
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
                        onStateChange={updateActiveCount}
                    />
                ))}
            </div>

            <button
                onClick={turnOnAllLights}
                className="mt-4 p-2 bg-blue-500 text-white rounded"
            >
                Turn On All Lights
            </button>

            <p className="mt-4 text-xl font-bold">Wynik: {activeCount}</p>
        </React.Fragment>
    );
}
