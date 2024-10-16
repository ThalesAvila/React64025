import React from "react";
import { Link } from "react-router-dom";

export default function ProductLink({ id, name }) {
  return (
    <div className="cursor-pointer">
      <Link to={`/product/${id}`}>{name}</Link>
    </div>
  );
}
