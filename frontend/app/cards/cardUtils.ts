export type Suit = "s" | "h" | "d" | "c";
export type Rank = "A" | "K" | "Q" | "J" | "10" | "9" | "8" | "7" | "6" | "5" | "4" | "3" | "2";
export type CardCode = `${Rank}${Suit}`;

export const SUITS: Suit[] = ["s", "h", "d", "c"];
export const RANKS: Rank[] = [
  "A", "K", "Q", "J",
  "10", "9", "8", "7", "6", "5", "4", "3", "2"
];

export const ALL_CARDS: CardCode[] = SUITS.flatMap(
  (suit) => RANKS.map((rank) => `${rank}${suit}` as CardCode)
);

export function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
