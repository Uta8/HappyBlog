"use client";

import { Condiment } from "next/font/google";
import { ChangeEvent, useState } from "react";

export default function FunTest() {
  const [text, setText] = useState<string>();
  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }
  const handleOnClick = async () => {
    const condition = {
      userName: text,
    };
    const textNew = await fetch("api/practice", {
      method: "POST",
      body: JSON.stringify({ condition }),
    });

    const textNow = await textNew.text();
    console.log(textNow);
  };

  return (
    <>
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input
          type="text"
          className="grow"
          placeholder="Username"
          onChange={handleOnChange}
        />
      </label>
      <button className="btn" onClick={handleOnClick}>
        完成
      </button>
    </>
  );
}
