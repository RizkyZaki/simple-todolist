import Image from "next/image";
import Input from "./components/Input";
import Button from "./components/Button";
import Task from "./components/Task/task";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-slate-100 w-[850px] p-10 rounded-md">
        <div className="flex gap-4">
          <p className="font-bold text-4xl  text-slate-900">Your TodoList</p>
          <Image src="/icon.png" alt="icon" width={35} height={35}></Image>
        </div>
        <div className="mt-6 flex place-self-center">
          <Input />
          <Button />
        </div>
        <div className="mt-6">
          <Task />
        </div>
      </div>
    </main>
  );
}
