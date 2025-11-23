"use client";

import { useState, useEffect } from "react";
import ImageCard from "./ImageCard";

const WORDS_URL =
  "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt";

export default function ImagesGame() {
  const [images, setImages] = useState<{ word: string, url: string }[]>([]);

  useEffect(() => {
    async function fetchWordsAndSetImages() {
      const res = await fetch(WORDS_URL);
      const text = await res.text();
      const allWords = text
        .split("\n")
        .map((w) => w.trim())
        .filter((w) => w.length > 2 && w.length < 10); // możesz filtrować długość!

      // Losujemy 8 niepowtarzalnych słów
      const selected: string[] = [];
      while (selected.length < 8) {
        const idx = Math.floor(Math.random() * allWords.length);
        const word = allWords[idx];
        if (!selected.includes(word)) {
          selected.push(word);
        }
      }

      setImages(
        selected.map((word) => ({
          word,
          url: `https://picsum.photos/200/128?random=${Math.random()}`,
        }))
      );
    }

    fetchWordsAndSetImages();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Memory League — Images</h1>
      <p className="mb-4 opacity-70">Losowe angielskie słowa z publicznego słownika i losowe obrazki.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, idx) => (
          <ImageCard key={idx} src={img.url} label={img.word} />
        ))}
      </div>
    </div>
  );
}
