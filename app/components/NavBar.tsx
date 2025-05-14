"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-10 w-full flex justify-center z-10">
    {/* OUTER RECTANGLE OF NAVBAR */}
      <div className="w-3/5 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 rounded-[20px] border border-white/[0.2] shadow-md backdrop-blur-[20px] bg-mavgrades-radial-gradient">
        {/* left */}
        <div>
          <a href='#home'><Image src='/logos/acm-logo.svg' alt='acm logo' width={48} height={48}/></a>
        </div>

        {/* middle */}
        <div className="flex">
          <ul className="flex space-x-16 text-secondary font-bold text-lg">
            <li> <a href='#about' className="hover:text-white">About</a></li>
            <li> <a href='#committees' className="hover:text-white">Committees</a></li>
            <li> <a href='#events' className="hover:text-white">Events</a></li>
            <li> <a href='#contact' className="hover:text-white">Contact us</a></li>
          </ul>
        </div>

        {/* right */}
        <div className="border border-white/[0.5] hover:bg-white/[0.3] border-0.2 rounded-[10px] bg-mavgrades-gradient/[0.2] py-1 px-4 text-lg text-white font-bold transition-colors">
          <a href='https://mavorgs.campuslabs.com/engage/organization/acm/' target="_blank" rel="noopener noreferrer">
            Apply
          </a>
        </div>
      </div>
    </nav>
    );
  }
export default Navbar;