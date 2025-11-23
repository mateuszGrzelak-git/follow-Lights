"use client";
import PlayingCard from "./PlayingCard";
import { CardCode, ALL_CARDS } from "./cardUtils";

interface RecallFormProps {
  guesses: (CardCode | null)[];
  onChange: (idx: number, val: CardCode) => void;
  disabled?: boolean;
}

export default function RecallForm({ guesses, onChange, disabled }: RecallFormProps) {
  return (
    <div className="w-full max-w-3xl max-h-[60vh] overflow-y-auto bg-base-200 rounded-xl p-4 shadow-inner">
      <div className="space-y-3">
        {guesses.map((guess, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 border-b border-base-300 pb-2 last:border-b-0"
          >
            <span className="w-10 font-bold">{idx + 1}.</span>
            <select
              className="select select-sm select-bordered flex-1"
              value={guess ?? ""}
              onChange={e => onChange(idx, e.target.value as CardCode)}
              disabled={disabled}
              aria-label={`Guess card at position ${idx + 1}`}
            >
              <option value="">-- select card --</option>
              {ALL_CARDS.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
            {guess && (
              <div className="w-[70px]">
                <PlayingCard card={guess} height="70px" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
