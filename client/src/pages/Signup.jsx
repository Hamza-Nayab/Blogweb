import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
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
          <form className="flex flex-col gap-4">
            <div>
              <Label value="your username"></Label>
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
              ></TextInput>
            </div>
            <div>
              <Label value="your email"></Label>
              <TextInput type="text" placeholder="email@company.com" id="email"></TextInput>
            </div>
            <div>
              <Label value="your password"></Label>
              <TextInput
                type="text"
                placeholder="password"
                id="password"
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
