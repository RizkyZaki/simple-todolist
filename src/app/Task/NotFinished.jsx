import { StopCircleIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

export const NotFinished = () => {
  const fetchTask = () => {
    const listTask = localStorage.getItem("task");
    console.log(listTask);
  };

  useEffect(() => {
    fetchTask();
  }, []);
  return (
    <ul className="text-black mt-10">
      <li className="flex justify-between">
        Belum <StopCircleIcon className="w-6 h-6" />
      </li>
    </ul>
  );
};
