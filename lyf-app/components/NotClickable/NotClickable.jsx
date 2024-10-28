"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useGlobalContext } from "@/app/Context/store";

const NotClickable = () => {
  const { openNotClickable, setOpenNotClickable, notClickableText } =
    useGlobalContext();
  return (
    <Dialog open={openNotClickable}>
      <DialogContent onClick={() => setOpenNotClickable(false)}
       className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Sorry this button is for demo purposes only!
            <span className="text-black block">{notClickableText}</span>
          </DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button
            className="bg-white text-black"
            onClick={() => setOpenNotClickable(false)}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NotClickable;
