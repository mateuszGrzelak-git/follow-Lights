import React, { forwardRef, useImperativeHandle, useState } from 'react';

type LightHandle = {
    lightEvent: () => void;
    isOn: () => boolean;
};

type LightProps = {
    onStateChange?: (isOn: boolean) => void;
    onClick?: () => void;
};

const Light = forwardRef<LightHandle, LightProps>(({ onStateChange, onClick }, ref) => {
    const [isLightOn, setIsLightOn] = useState(false);

    useImperativeHandle(ref, () => ({
        lightEvent: () => {
            setIsLightOn((prev) => {
                const newState = !prev;
                queueMicrotask(() => onStateChange?.(newState));
                return newState;
            });

            if (!isLightOn) {
                setTimeout(() => {
                    setIsLightOn(false);
                    queueMicrotask(() => onStateChange?.(false));
                }, 500);
            }
        },
        isOn: () => isLightOn,
    }));

    const toggleLight = () => {
        setIsLightOn((prev) => {
            const newState = !prev;
            queueMicrotask(() => onStateChange?.(newState));
            return newState;
        });
        
        if (!isLightOn) {
            setTimeout(() => {
                setIsLightOn(false);
                queueMicrotask(() => onStateChange?.(false));
            }, 500);
        }

        onClick?.();
    };

    return (
        <div
            className="box-border h-32 w-32 p-4 border-4 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            style={{ backgroundColor: isLightOn ? 'white' : 'black' }}
            onClick={toggleLight}
        ></div>
    );
});

export default Light;
