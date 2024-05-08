import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, json } from "react-router-dom";

export default function Signup() {
  const [formdata, setFormdata] = useState({});
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      })
      const data = await res.json;
    } catch (error) {}
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-8">
        {/* Left Div */}
        <div className="flex-1">
          <Link to={"/"} className=" font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded">
              Hamza's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In commodi
            eos quisquam pariatur, eum tempore.
          </p>
        </div>

        {/* Right Div */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="your username"></Label>
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              ></TextInput>
            </div>
            <div>
              <Label value="your email"></Label>
              <TextInput
                type="email"
                placeholder="email@company.co"
                id="email"
                onChange={handleChange}
              ></TextInput>
            </div>
            <div>
              <Label value="your password"></Label>
              <TextInput
                type="password"
                placeholder="password"
                id="password"
                onChange={handleChange}
              ></TextInput>
            </div>
            <Button
              gradientDuoTone={"purpleToPink"}
              content="Signup"
              type="submit"
            >
              Signup
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>have an account?</span>
            <Link to={"/signin"}>Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
