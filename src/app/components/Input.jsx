import React from "react";

export default function Input({ value, onChange }) {
  return (
    <input
      placeholder="Add Your Task..."
      className="border border-zinc-500 p-[10px] rounded-l-lg w-full h-[45px] text-black"
      value={value}
      onChange={onChange}
    />
  );
}
