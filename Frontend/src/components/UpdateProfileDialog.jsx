/* eslint-disable no-unused-vars */
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const UpdateProfileDialog = ({ open, setOpen }) => {
  //   return (
  // <div>
  //   <Dialog open={open}>
  //     <DialogContent
  //       className="sm:max-w-[425px]"
  //       onInteractOutside={() => setOpen(false)}
  //     >
  //       <DialogHeader>
  //         <DialogTitle>Edit Profile</DialogTitle>
  //       </DialogHeader>
  //       <form>
  //         <div className=" grid gap-4 py-4 ">
  //           <div className="grid grid-cols-4 items-center gap-4">
  //             <Label htmlFor="name" classname="text-right">
  //               Name
  //             </Label>
  //             <Input id="name" name="name" classname="" />
  //           </div>
  //           <div className="grid grid-cols- items-center gap-4">
  //             <Label htmlFor="bio" classname="text-right">
  //               Bio
  //             </Label>
  //             <Input id="bio" name="bio" classname="" />
  //           </div>
  //           <div className="grid grid-cols- items-center gap-4">
  //             <Label htmlFor="email" classname="text-right">
  //               E-Mail
  //             </Label>
  //             <Input id="email" name="email" classname="" />
  //           </div>
  //           <div className="grid grid-cols- items-center gap-4">
  //             <Label htmlFor="name" classname="text-right">
  //               Phone Number
  //             </Label>
  //             <Input id=" PhoneNumber" name=" PhoneNumber" classname="" />
  //           </div>
  //           <div className="grid grid-cols- items-center gap-4">
  //             <Label htmlFor="Skills" classname="text-right">
  //               Skills
  //             </Label>
  //             <Input id="Skills" name="Skills" classname="" />
  //           </div>
  //           <div className="grid grid-cols- items-center gap-4">
  //             <Label htmlFor="file" classname="text-right">
  //               Resume
  //             </Label>
  //             <Input
  //               id="file"
  //               name="file"
  //               type="file"
  //               accept="application/pdf"
  //               classname=""
  //             />
  //           </div>
  //         </div>
  //       </form>

  //     </DialogContent>
  //   </Dialog>
  // </div>
  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              E-Mail
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Bio
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Phone Number
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Skills
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="file" className="text-right">
              Resume
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              type="file"
              accept="application/pdf"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter className="grid place-items-center">
          <Button type="submit" className="">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

//   );
// };

export default UpdateProfileDialog;
