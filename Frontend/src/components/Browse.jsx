/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Navbar from "./ui/shared/Navbar";
import JobCard from "./JobCard";
import { useDispatch, useSelector } from "react-redux";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { setSearchedQuery } from "@/redux/jobSlice";

// const randomJobs = [1, 2, 3, 4, 5, 6];

const Browse = () => {
  const dispatch = useDispatch();
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  });
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">
          Search Results ({allJobs.length})
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {allJobs.map((job) => {
            return <JobCard key={job._id} job={job} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
