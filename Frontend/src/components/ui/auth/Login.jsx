// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../label";
import { Input } from "../input";
import { RadioGroup } from "../radio-group";
import { Button } from "../button";
import { Link } from "react-router-dom";

const Login = () => {
  // const [input, setInput] = useState({
  //   fullname: "",
  //   email: "",
  //   phoneNumber: "",
  //   password: "",
  //   role: "",
  //   file: "",
  // });

  // const changeEventHandler = (e) => {
  //   setInput({ ...input, [e.target.name]: e.target.value });
  // };
  // const changeFileHandler = (e) => {
  //   setInput({ ...input, file: e.target.files?.[0] });
  // };
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label>E-Mail</Label>
            <Input type="email" placeholder="vishal@gmail.com" />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input type="password" placeholder="Test123!" />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input accept="image/*" type="file" className="cursor-pointer" />
            </div>
          </div>
          <Button type="submit" className="w-full my-4">
            Login
          </Button>
          <span className="text-sm">
            Dont have an account?
            <Link to="/login" className="text-blue-600 p-2">
              Signup
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
