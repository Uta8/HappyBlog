"use client";

import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onLoginClick = async (event: any) => {
    event.preventDefault();

    const data = await fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify({
        condition: {
          email,
          password,
        },
      }),
    });
    const reader = await data.body?.getReader().read();
    const newValue = new TextDecoder().decode(reader?.value);

    console.log(newValue, "newValue");
  };

  return (
    <div className="hero min-h-full bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl front-bold">Login now!</h1>
          <p className="py-6">
            111111111111111111111111111111111111111111111111111111111111111111111111111
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                onChange={(data) => {
                  setEmail(data.target.value);
                }}
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
                onChange={(data) => {
                  setPassword(data.target.value);
                }}
                value={password}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forget password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={onLoginClick}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
