import React from "react";

export default function Button(type) {
  return (
    <div>
      <button
        className="bg-teal-600 text-white hover:bg-teal-300 p-[10px] h-[45px] aspect-square rounded-r-lg"
        type={type}
      >
        Add
      </button>
    </div>
  );
}
