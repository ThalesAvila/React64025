import React from "react";

type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="flex justify-center items-center gap-1.5 bg-indigo-700 hover:bg-indigo-800 px-4 py-2.5 rounded text-white">
      {children}
    </button>
  );
}
