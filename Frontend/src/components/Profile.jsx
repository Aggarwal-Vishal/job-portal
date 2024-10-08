/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "./ui/shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { LOGO } from "@/utils/constant";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";

const Skills = ["html", "css", "javascript", "ReactJs"];
const isResume = true;
const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={LOGO} alt="profile" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perspiciatis, earum.
              </p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right"
            variant="outline"
          >
            <Pen />
          </Button>
        </div>
        <div className="p-4 space-y-2">
          <div className="flex items-center gap-3">
            <Mail />
            <span>test@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Contact />
            <span>1234567890</span>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-lg my-4">Skills</h1>
          <div className="flex items-center gap-2">
            {Skills.length !== 0 ? (
              Skills.map((item, index) => <Badge key={index}>{item}</Badge>)
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center p-4 space-y-2 ">
          <Label className="font-bold text-md">Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href="https://youtube.com/"
              className="text-blue-500 hover: underline-offset-2"
            >
              Vishal Aggarwal
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg m-5">Applied Jobs</h1>
        {/* Application Table */}
        <AppliedJobTable />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
