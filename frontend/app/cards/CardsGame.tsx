"use client";
import { useState, useMemo } from "react";
import PlayingCard from "./PlayingCard";
import ResultsPanel from "./ResultsPanel";
import { ALL_CARDS, CardCode, shuffle } from "./cardUtils";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";

// ==== CONFIG =====
const CARDS_TO_MEMORIZE = 16; // <--- change here: 4, 10, 16, 20, 52 etc.
let THEME = "light"; // or "dark"
// ==================

type Phase = "memorize" | "recall" | "result";

export default function CardsGame() {
  const [phase, setPhase] = useState<Phase>("memorize");
  const [sequence, setSequence] = useState<CardCode[]>(() =>
    shuffle(ALL_CARDS).slice(0, CARDS_TO_MEMORIZE)
  );
  const [recallOrder, setRecallOrder] = useState<CardCode[]>([]);
  const [memorizeStart, setMemorizeStart] = useState<number>(() => Date.now());
  const [memorizeEnd, setMemorizeEnd] = useState<number | null>(null);
  const [score, setScore] = useState<number | null>(null);

  // UI theme switch (light/dark)
  const themeClass = THEME === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900";

  // memorize phase
  const goToRecall = () => {
    setMemorizeEnd(Date.now());
    setRecallOrder(shuffle(sequence)); // shuffled for recall phase
    setPhase("recall");
  };

  // drag handler
  function handleDragEnd(result: DropResult) {
    if (!result.destination) return;
    const items = Array.from(recallOrder);
    const [removed] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, removed);
    setRecallOrder(items);
  }

  // scoring
  const checkResult = () => {
    let correct = 0;
    for (let i = 0; i < sequence.length; i++) {
      if (recallOrder[i] === sequence[i]) correct++;
      else break; // stop at first mistake
    }
    setScore(correct);
    setPhase("result");
  };

  const memorizeTimeSeconds = useMemo(() => {
    if (!memorizeStart || !memorizeEnd) return null;
    return ((memorizeEnd - memorizeStart) / 1000).toFixed(1);
  }, [memorizeStart, memorizeEnd]);

  const restart = () => {
    setPhase("memorize");
    const newSeq = shuffle(ALL_CARDS).slice(0, CARDS_TO_MEMORIZE);
    setSequence(newSeq);
    setRecallOrder([]);
    setScore(null);
    setMemorizeStart(Date.now());
    setMemorizeEnd(null);
  };

  return (
    <div className={`min-h-screen p-8 flex flex-col items-center gap-6 transition-colors duration-300 ${themeClass}`}>
      <h1 className="text-3xl font-bold text-center mb-2">
        Memory League – Cards <span className="opacity-60">({CARDS_TO_MEMORIZE} cards)</span>
      </h1>

      {/* Memorize Phase */}
      {phase === "memorize" && (
        <div className="w-full flex flex-col items-center gap-4">
          <h2 className="text-2xl font-semibold mb-2">
            Memorize phase
          </h2>
          <p className="text-center max-w-2xl mb-2">
            Memorize the <b>exact order</b> of all {CARDS_TO_MEMORIZE} cards. When you're ready, click <b>Go to Recall</b>.
          </p>
          <div className="w-full max-w-5xl bg-base-200 rounded-xl p-4 shadow-inner overflow-x-auto mb-2">
            <div className="flex gap-2">
              {sequence.map((code, idx) => (
                <div key={idx} className="shrink-0">
                  <PlayingCard card={code} height="100px" />
                </div>
              ))}
            </div>
          </div>
          <button className="btn btn-primary mt-4" onClick={goToRecall}>
            Go to Recall
          </button>
        </div>
      )}

      {/* Recall Phase (Drag and Drop) */}
      {phase === "recall" && (
        <div className="w-full flex flex-col items-center gap-4">
          <h2 className="text-2xl font-semibold mb-2">
            Recall phase (drag & drop)
          </h2>
          <p className="text-center max-w-2xl mb-2">
            Drag and drop the cards to arrange them in the order you memorized.<br />
            The first card should be on the left.
          </p>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="cards" direction="horizontal">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="flex gap-2 bg-base-200 rounded-xl p-4 shadow-inner overflow-x-auto"
                  style={{ minHeight: 120, minWidth: 80 * CARDS_TO_MEMORIZE, maxWidth: "100vw" }}
                >
                  {recallOrder.map((card, idx) => (
                    <Draggable key={card} draggableId={card + idx} index={idx}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`transition-shadow ${snapshot.isDragging ? "ring-2 ring-primary" : ""}`}
                        >
                          <PlayingCard card={card} height="100px" />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <button
            className="btn btn-primary mt-2"
            onClick={checkResult}
            disabled={recallOrder.length !== sequence.length}
          >
            Check result
          </button>
          {recallOrder.length !== sequence.length && (
            <p className="text-sm opacity-70">
              All cards must be placed to check your result.
            </p>
          )}
        </div>
      )}

      {/* Result phase */}
      {phase === "result" && score !== null && (
        <ResultsPanel
          sequence={sequence}
          guesses={recallOrder}
          correct={score}
          memorizeTimeSeconds={memorizeTimeSeconds}
          onRestart={restart}
        />
      )}
    </div>
  );
}
