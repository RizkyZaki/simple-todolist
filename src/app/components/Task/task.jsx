import React from "react";

export default function task() {
  return (
    <div className="w-full mt-7">
      <div className="flex justify-around space-x-4">
        <div className="w-full bg-teal-200">
          <h2 className="text-zinc-900 text-center pb-2 pt-2 font-bold">
            Not Finished
          </h2>
          <div className="h-[6px] bg-teal-400 rounded-lg"></div>
        </div>
        <div className="w-full ">
          <h2 className="text-zinc-900 text-center pb-2 pt-2 font-bold">
            Finished
          </h2>
          <div className="h-[6px] bg-teal-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
