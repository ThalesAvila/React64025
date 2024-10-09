import React from "react";
import { Link } from "react-router-dom";

export default function ProductLink({ id, title }) {
  return (
    <div className="cursor-pointer">
      <Link to={`/product/${id}`}>{title}</Link>
    </div>
  );
}
