import React from "react";

type IconProps = {
  children: React.ReactNode;
};

export default function Icon({ children }: IconProps) {
  return (
    <div className="flex justify-center items-center w-12 h-12 bg-white text-indigo-700 rounded-full drop-shadow">
      {children}
    </div>
  );
}
