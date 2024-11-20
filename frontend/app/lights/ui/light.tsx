import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';

type LightHandle = {
    lightEvent: () => void;
};

const Light = forwardRef<LightHandle, any>((props, ref) => {
    const [backgroundColor, setBackgroundColor] = useState<string>('white');
    const lightRef = useRef<HTMLDivElement>(null);

    // Umożliwienie wywołania metody lightEvent z rodzica
    useImperativeHandle(ref, () => ({
        lightEvent: () => {
            // Przełączanie koloru
            setBackgroundColor(prevColor => (prevColor === 'white' ? 'black' : 'white'));
        }
    }));

    return (
        <div
            ref={lightRef}
            className="box-border h-32 w-32 p-4 border-4 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            style={{ backgroundColor }}
            onClick={() => setBackgroundColor(prevColor => (prevColor === 'white' ? 'black' : 'white'))} // Przełączanie koloru na kliknięcie
        >
            {/* Opcjonalnie możesz dodać inne elementy */}
        </div>
    );
});

export default Light;