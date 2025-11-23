"use client";
import dyn from "next/dynamic";

interface Props {
  card: string;
  height?: string;
  className?: string;
}

const PlayingCard = dyn<Props>(
  () => import("@heruka_urgyen/react-playing-cards/lib/FcB"),
  { ssr: false }
);

export default PlayingCard;
