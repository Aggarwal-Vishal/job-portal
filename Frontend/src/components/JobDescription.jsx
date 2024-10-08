/* eslint-disable no-unused-vars */
import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Navbar from "./ui/shared/Navbar";

const JobDescription = () => {
  const isApplied = true;
  return (
    <div className="max-w-6xl mx-auto my-10 mt-0">
      <div className=" ">
        <Navbar />
      </div>
      <div className="flex items-center justify-between mt-8">
        <div>
          <h1 className="font-bold text-xl ">Frontend Developer</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className={"text-blue-700 font-bold"} variant="ghost">
              12 Positions
            </Badge>
            <Badge className={"text-[#F83002] font-bold"} variant="ghost">
              Part Time
            </Badge>
            <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
              24LPA
            </Badge>
          </div>
        </div>
        <Button
          disabled={isApplied}
          className={`rounded-full ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#7209b7] hover:bg-[#5f32ad]"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      <h1 className="font-semibold border-b-2 border-b-gray-300 py-4">
        Job Description
      </h1>
      <div>
        <h1 className="font-bold my-2">
          Role :
          <span className=" font-normal mx-2 text-gray-800">
            Frontend Developer
          </span>
        </h1>
        <h1 className="font-bold my-2">
          Location :
          <span className=" font-normal mx-2 text-gray-800">Hyderabad</span>
        </h1>
        <h1 className="font-bold my-2">
          Description :
          <span className=" font-normal mx-2 text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            aliquam.
          </span>
        </h1>
        <h1 className="font-bold my-2">
          Experience :
          <span className=" font-normal mx-2 text-gray-800">2yrs</span>
        </h1>
        <h1 className="font-bold my-2">
          Salary :<span className=" font-normal mx-2 text-gray-800">12LPA</span>
        </h1>
        <h1 className="font-bold my-2">
          Total Applicants :
          <span className=" font-normal mx-2 text-gray-800">4</span>
        </h1>
        <h1 className="font-bold my-2">
          Posted Date :
          <span className=" font-normal mx-2 text-gray-800">17-07-2024</span>
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
