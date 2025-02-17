import { Outlet } from "react-router-dom";
import Navbar from "../components/layoutCp/Navbar";
import Footer from "../components/layoutCp/Footer";
import React from "react";

export const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="sticky top-0 z-40 w-full">
        <Navbar />
      </div>
      <div className="flex-grow w-full min-h-screen flex justify-center items-start">
        <div className="w-[95%] h-full">
          <Outlet />
        </div>
      </div>
      <div className="w-full bg-white">
        <Footer />
      </div>
    </div>
  );
};
