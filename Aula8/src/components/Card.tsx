import React from "react";

type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="flex flex-col gap-16 m-4 py-24 px-4 md:px-24 h-full bg-white rounded-md">
      {children}
    </div>
  );
}
