/* eslint-disable no-unused-vars */
import { Search } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./button";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };
  return (
    <div className="text-center">
      <span className="px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
        No-1 Job Hunt Website
      </span>
      <h1 className="text-5xl font-bold p-6">
        Search, Apply & <br />
        Get Your <span className=" text-[#6A38C2] ">Dream Job</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        minus qui autem.
        <div className="flex w-[40%] mt-6 shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto ">
          <input
            type="text"
            placeholder="Find your dream Jobs"
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-r-full bg-[#6A38C2]"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </p>
    </div>
  );
};

export default HeroSection;
