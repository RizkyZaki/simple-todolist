import { CheckCircleIcon } from "@heroicons/react/24/solid";

export const Finished = () => {
  return (
    <ul className="text-black mt-10">
      <li className="flex justify-between">
        Test <CheckCircleIcon className="w-6 h-6" />
      </li>
    </ul>
  );
};
