import React, { forwardRef, useImperativeHandle, useState } from 'react';

type LightHandle = {
    lightEvent: () => void;
    isOn: () => boolean;
};

type LightProps = {
    onStateChange?: (isOn: boolean) => void;
};

const Light = forwardRef<LightHandle, LightProps>(({ onStateChange }, ref) => {
    const [isLightOn, setIsLightOn] = useState(false);

    useImperativeHandle(ref, () => ({
        lightEvent: () => {
            setIsLightOn((prev) => {
                const newState = !prev;
                queueMicrotask(() => onStateChange?.(newState)); // Wywołanie po zakończeniu bieżącego renderowania
                return newState;
            });
        },
        isOn: () => isLightOn,
    }));

    const toggleLight = () => {
        setIsLightOn((prev) => {
            const newState = !prev;
            queueMicrotask(() => onStateChange?.(newState)); // Wywołanie po zakończeniu bieżącego renderowania
            return newState;
        });
    };

    return (
        <div
            className="box-border h-32 w-32 p-4 border-4 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            style={{ backgroundColor: isLightOn ? 'yellow' : 'white' }}
            onClick={toggleLight}
        ></div>
    );
});

export default Light;
