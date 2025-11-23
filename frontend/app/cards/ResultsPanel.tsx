"use client";
import PlayingCard from "./PlayingCard";
import { CardCode } from "./cardUtils";

interface ResultsPanelProps {
  sequence: CardCode[];
  guesses: CardCode[];
  correct: number;
  memorizeTimeSeconds: string | null;
  onRestart: () => void;
}

export default function ResultsPanel(props: ResultsPanelProps) {
  const {
    sequence, guesses, correct, memorizeTimeSeconds, onRestart
  } = props;

  return (
    <div className="w-full max-w-3xl flex flex-col items-center gap-4">
      <h2 className="text-2xl font-semibold">Result</h2>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Correct from start</div>
          <div className="stat-value">{correct}</div>
          <div className="stat-desc">
            out of {sequence.length} cards in correct order
          </div>
        </div>
        <div className="stat">
          <div className="stat-title">Memorize time</div>
          <div className="stat-value">
            {memorizeTimeSeconds ? `${memorizeTimeSeconds}s` : "—"}
          </div>
          <div className="stat-desc">
            from start of Memorize to Recall
          </div>
        </div>
      </div>
      <details className="collapse bg-base-200 rounded-box w-full">
        <summary className="collapse-title font-medium">
          Show correct sequence and your answers
        </summary>
        <div className="collapse-content">
          <div className="space-y-3 mt-2">
            {sequence.map((correctCard, index) => {
              const guess = guesses[index];
              const isCorrect = guess === correctCard;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 border-b border-base-300 pb-2 last:border-b-0"
                >
                  <span className="w-8 font-bold">{index + 1}.</span>
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-sm opacity-70">Correct:</span>
                    <PlayingCard card={correctCard} height="70px" />
                  </div>
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-sm opacity-70">Your answer:</span>
                    <PlayingCard card={guess} height="70px" />
                  </div>
                  <span
                    className={
                      "badge " +
                      (isCorrect ? "badge-success" : "badge-error")
                    }
                  >
                    {isCorrect ? "OK" : "WRONG"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </details>
      <div className="flex gap-3 mt-4">
        <button className="btn btn-primary" onClick={onRestart}>
          Play again
        </button>
      </div>
    </div>
  );
}
