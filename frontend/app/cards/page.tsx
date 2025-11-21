"use client";

import dyn from "next/dynamic"; // ← zmieniona nazwa

export const dynamic = "force-dynamic"; // ← OK

const Card = dyn(
  () => import("@heruka_urgyen/react-playing-cards/lib/FcB"),
  { ssr: false }
);

export default function Cards() {
  return (
    <div className="p-8">
      <Card card="Qs" height="220px" />
    </div>
  );
}
