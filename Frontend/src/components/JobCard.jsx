/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "./ui/avatar";
import { LOGO } from "@/utils/constant";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router";

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  // const jobId = "hellovishal";

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };
  return (
    <div className="p-5 rounded-md bg-white border border-gray-300 shadow-xl">
      <div className="flex items-center justify-between">
        <p className="font-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center">
        <Button className="   bg-white hover:bg-transparent">
          <Avatar>
            <AvatarImage
              className="w-8 h-8 rounded-full object-cover"
              src={job?.company?.logo}
            />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          {job?.position} Positons
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          {job?.salary}LPA
        </Badge>
      </div>
      <div className="flex items-center gap-2 mt-4 ">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          className=""
          variant="outline"
        >
          Details
        </Button>
        <Button
          className={"bg-[#683Ac2] hover:bg-[#683AC2] text-white "}
          variant="outline"
        >
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
