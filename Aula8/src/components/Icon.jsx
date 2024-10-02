import React from "react";

export default function Icon({ children }) {
  return (
    <div className="flex justify-center items-center w-12 h-12 bg-white text-indigo-700 rounded-full drop-shadow">
      {children}
    </div>
  );
}
