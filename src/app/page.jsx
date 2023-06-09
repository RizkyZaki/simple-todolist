"use client";
import Image from "next/image";
import Input from "./components/Input";
import Button from "./components/Button";
import Task from "./Task/task";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const [add, setAdd] = useState();
  const data = [];
  const onSubmit = (e) => {
    e.preventDefault();
    if (add) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Add New Task",
      });
      // const value = {
      //   value: add,
      //   variant: "not",
      // };
      data.push(add);
      localStorage.setItem("task", JSON.stringify(data));
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "error",
        title: "Task Required",
      });
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-slate-100 w-[850px] p-10 rounded-md">
        <div className="flex gap-4">
          <p className="font-bold text-4xl  text-slate-900">Your TodoList</p>
          <Image src="/icon.png" alt="icon" width={35} height={35}></Image>
        </div>
        <form className="mt-6 flex place-self-center" onSubmit={onSubmit}>
          <Input value={add} onChange={(e) => setAdd(e.target.value)} />
          <Button type="submit" />
        </form>
        <div className="mt-6">
          <Task />
        </div>
      </div>
    </main>
  );
}
