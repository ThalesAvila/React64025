import { useState } from "react";

export default function ItemCounter() {
  const [count, setCount] = useState(1);
  return (
    <div className="w-[125px] h-9 flex justify-center items-center gap-3 bg-neutral-50 p-0.5 rounded-md border border-solid border-neutral-200">
      <button className="h-9 flex items-center bg-transparent">-</button>
      <span>{count}</span>
      <button className="h-9 flex items-center bg-transparent">+</button>
    </div>
  );
}
