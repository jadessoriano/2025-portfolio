import React from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";

function SideContent() {
  return (
    <div className="bg-zinc-300/50 max-w-[500px] w-full h-auto flex items-center">
      <div className="flex flex-col justify-between h-[calc(100vh-50px)] w-full ">
        <div className="p-4 flex flex-col">
          <h1 className="font-bold text-2xl m-0 p-0">Aaron Jay</h1>
          <p className="m-0">Front End Engineer</p>
          <p className="max-w-xs">
            I build fast, accessible, and visually precise experiences for the
            modern web.
          </p>
        </div>

        <footer className="p-4">
          <div className="socials flex items-center gap-2">
            <BsFacebook className="w-5 h-5" />
            <BsLinkedin className="w-5 h-5" />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default SideContent;
