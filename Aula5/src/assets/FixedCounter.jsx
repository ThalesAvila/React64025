import { useState } from 'react';

export default function FixedCounter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          // n: 95 => n + 1 = 96
          setNumber((n) => n + 1);
          // n: 96 => n + 1 = 97
          setNumber((n) => n + 1);
          // n: 97 => n + 1 = 98
          setNumber((n) => n + 1);
          setNumber(90);
        }}
      >
        +3
      </button>
    </>
  );
}
