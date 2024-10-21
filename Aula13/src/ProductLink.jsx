import React from "react";
import { Link } from "react-router-dom";

export default function ProductLink({ id, name, image, price }) {
  return (
    <Link to={`/product/${id}`} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-white">{name}</h3>
      <p className="mt-1 text-lg font-medium text-white">
        ${Number(price)?.toFixed(2)}
      </p>
    </Link>
  );
}
