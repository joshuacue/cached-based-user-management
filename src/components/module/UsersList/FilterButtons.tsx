"use client";
import React from "react";

export interface FilterButtonsProps {
  onListTypeChange: (filter: string) => () => void;
  currentFilter?: string;
}

const getRoundedClassName = (index: number, arrayLength: number) => {
  if (index === 0) return `rounded-tl-0.4`;
  if (index === arrayLength - 1) return `rounded-tr-0.4`;
  return ``;
};

export function FilterButtons({
  onListTypeChange,
  currentFilter,
}: FilterButtonsProps) {
  const filters = ["all", "favorites", "trash"];

  return (
    <div className={``}>
      {filters?.map((filter, index, arr) => (
        <button
          key={filter}
          onClick={onListTypeChange(filter)}
          className={`text-2 p-0.5 px-1 bg-gray-100 capitalize hover:opacity-80 ${
            currentFilter === filter ? `bg-gray-200` : ``
          } ${getRoundedClassName(index, arr.length)}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
