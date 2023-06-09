"use client";
import React, { useState } from "react";
import { Finished } from "./Finished";
import { NotFinished } from "./NotFinished";

export default function task() {
  const [activeVariant, setActiveVariant] = useState("notfinished");

  let selectedVariant;

  if (activeVariant === "finished") {
    selectedVariant = <Finished />;
  } else if (activeVariant === "notfinished") {
    selectedVariant = <NotFinished />;
  }

  const taskVariant = [
    { name: "Finished", value: "finished" },
    { name: "Not Finished", value: "notfinished" },
  ];
  return (
    <div className="w-full mt-7">
      <div className="flex justify-around space-x-4">
        {taskVariant.map((taskvariant) => (
          <div
            className={`w-full text-zinc-900 text-center pb-2 pt-2 font-bold cursor-pointer hover:bg-teal-100 ${
              activeVariant === taskvariant.value ? "bg-teal-300" : ""
            }`}
            onClick={() => setActiveVariant(taskvariant.value)}
            key={taskvariant.value}
          >
            {taskvariant.name}
          </div>
        ))}
      </div>
      <div className="m-4">{selectedVariant}</div>
    </div>
  );
}
