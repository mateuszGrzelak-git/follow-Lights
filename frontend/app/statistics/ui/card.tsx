// src/components/Card.tsx
import React from 'react';

// Typowanie propsów komponentu Card
interface CardProps {
  title: string;
  value: string | number;  // Może być tekst lub liczba
}

const Card: React.FC<CardProps> = ({ title, value }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
    </div>
  );
}

export default Card;