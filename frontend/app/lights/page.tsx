"use client";

import React, { useRef, useState } from "react";
import Light from "./ui/light";

type LightHandle = {
  lightEvent: () => void;
  isOn: () => boolean;
};

const count = 9;

export default function Lights() {
  const lightsRef = useRef<(LightHandle | null)[]>([]);
  const [sequence, setSequence] = useState<number[]>([]);
  const [playerSequence, setPlayerSequence] = useState<number[]>([]);
  const [message, setMessage] = useState<string>("Press start to begin");
  const [gameActive, setGameActive] = useState(false);
  const [score, setScore] = useState(0);

  const generateSequence = () => {
    const newSequence = [...sequence, Math.floor(Math.random() * count)];
    setSequence(newSequence);
    playSequence(newSequence);
  };

  const playSequence = (seq: number[]) => {
    setGameActive(false);
    seq.forEach((lightIndex, i) => {
      setTimeout(() => {
        lightsRef.current[lightIndex]?.lightEvent();
      }, i * 1000);
    });

    setTimeout(() => {
      setGameActive(true);
      setMessage("Your turn!");
    }, seq.length * 1000);
  };

  const handleLightClick = (index: number) => {
    if (!gameActive) return;

    const newPlayerSequence = [...playerSequence, index];
    setPlayerSequence(newPlayerSequence);

    if (newPlayerSequence[newPlayerSequence.length - 1] !== sequence[newPlayerSequence.length - 1]) {
      setMessage("Wrong! Your score: " + score);
      saveScoreToJson(score);
      setScore(0);
      resetGame();
      return;
    }

    if (newPlayerSequence.length === sequence.length) {
      setMessage("Great! Next round...");
      setPlayerSequence([]);
      setScore((prev) => prev + 1);
      setTimeout(generateSequence, 1000);
    }
  };

  const resetGame = () => {
    setSequence([]);
    setPlayerSequence([]);
    setGameActive(false);
  };

  const startGame = () => {
    resetGame();
    setMessage("Observe!");
    generateSequence();
  };

  const saveScoreToJson = (finalScore: number) => {
    const json = JSON.stringify({ score: finalScore }, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "score.json";
    link.click();

    URL.revokeObjectURL(url);
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
            onClick={() => handleLightClick(index)}
          />
        ))}
      </div>

      <button onClick={startGame} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Start
      </button>

      <p className="mt-4 text-xl font-bold">{message}</p>
      <p className="mt-2 text-lg">Score: {score}</p>
    </React.Fragment>
  );
}
