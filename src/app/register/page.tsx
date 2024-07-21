"use client";

import { useEffect, useState } from "react";
import RegsiterInner from "./register";

export default function Regsiter() {
  const [username, setUsername] = useState<string>("");
  const [usernames, setUsernames] = useState<string[]>([]);

  useEffect(() => {
    fetch("api/register", {
      method: "GET",
    }).then((data) => {
      data.json().then((json_res) => {
        setUsernames(json_res.users.map((item: { name: any }) => item.name));
      });
    });
  }, []);

  console.log("usernames ", usernames);

  return (
    <RegsiterInner
      nameList={usernames}
      username={username}
      setUsername={setUsername}
    />
  );
}
