declare module "@heruka_urgyen/react-playing-cards/lib/FcB" {
  import React from "react";

  export interface CardProps {
    card: string;
    height?: string;
    back?: boolean;
    front?: boolean;
    className?: string;
    style?: React.CSSProperties;
  }

  const Card: React.FC<CardProps>;
  export default Card;
}

declare module "@heruka_urgyen/react-playing-cards/lib/TcN" {
  export { default } from "@heruka_urgyen/react-playing-cards/lib/FcB";
}

declare module "@heruka_urgyen/react-playing-cards/lib/TcB" {
  export { default } from "@heruka_urgyen/react-playing-cards/lib/FcB";
}

declare module "@heruka_urgyen/react-playing-cards/lib/FcN" {
  export { default } from "@heruka_urgyen/react-playing-cards/lib/FcB";
}

declare module "@heruka_urgyen/react-playing-cards" {
  export { default } from "@heruka_urgyen/react-playing-cards/lib/FcB";
}
