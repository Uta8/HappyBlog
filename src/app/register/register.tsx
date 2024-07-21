import { useEffect, useRef, useState } from "react";

type Props = {
  nameList: string[];
  username: string;
  setUsername: any;
};

export default function RegsiterInner({
  nameList,
  username,
  setUsername,
}: Props) {
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();

  const idRef = useRef<number>();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("api/register", {
        method: "POST",
        body: JSON.stringify({
          name: username,
          type: "Search",
        }),
      });
      return await res.json();
    }
    if (username !== "") {
      fetchData().then((data) => {
        setUsername(data[0].name);
        setPassword(data[0].password);
        setEmail(data[0].email);
        idRef.current = data[0].id;
      });
    }
  }, [setUsername, username]);

  const onSaveClick = async (event: any) => {
    event.preventDefault();

    const res = await fetch("api/register", {
      method: "POST",
      body: JSON.stringify({
        id: idRef.current,
        username,
        password,
        email,
        type: "UPDATE",
      }),
    });
  };

  return (
    <form className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">NameList</span>
        </label>
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={(event) => setUsername(event.target.value)}
        >
          <option disabled selected>
            Pick your name
          </option>
          {nameList.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="email"
          className="input input-bordered"
          required
          onChange={(event) => setUsername(event.target.value)}
          value={username}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="email"
          className="input input-bordered"
          required
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          className="input input-bordered"
          required
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />

        <button className="btn btn-primary" onClick={onSaveClick}>
          Save
        </button>
      </div>
    </form>
  );
}
