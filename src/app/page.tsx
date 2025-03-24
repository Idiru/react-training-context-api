"use client"

import { useColorContext } from "./contexts/ColorContext";

export default function Home() {

  const { color, toggleColor } = useColorContext() //Context called with the custom Hook 

  return (
    <div className={color === "light" ? "bg-white text-black" : "bg-black text-white"}>
      <button onClick={() => toggleColor()}>toggle</button>
    </div>
  );
}
