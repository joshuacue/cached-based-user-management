"use client";
import React from "react";

export function FilterButtons({
  onListTypeChange,
}: {
  onListTypeChange: (filter: string) => () => void;
}) {
  const filters = ["all", "favorites", "trash"];

  return (
    <div>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={onListTypeChange(filter)}
          className={`text-2 p-0.5 px-1 bg-gray-200 rounded-0.4`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
