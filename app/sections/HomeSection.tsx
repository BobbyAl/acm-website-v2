"use client";
import React from "react";
import Image from "next/image";
import Divider from "../components/Divider";


const HomeSection = () => {

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center text-primary bg-radial-glow">
        <div className="flex flex-col justify-center items-center space-y-36">
        <div className="flex flex-col items-center space-y-8">
            <div><Image src='/logos/acm-logo.svg' alt='acm logo' width={256} height={256} /></div>
            <div className="flex items-center justify-center text-6xl font-bold">
                ASSOCIATION FOR COMPUTING MACHINERY
            </div>
            <div className="max-w-4xl px-8 text-center font-fira-code text-xl">
                The University of Texas at Arlington’s Largest Computer Science Student Organization
            </div>
            <div className="flex flex-row space-x-8">
                <div className="flex text-primary bg-white/[0.2] text-blue-950 border border-white/[0.5] space-x-2 py-2 px-4 rounded-lg">
                    <a href='https://mavorgs.campuslabs.com/engage/organization/acm/' target="_blank" rel="noopener noreferrer" className="font-bold">
                        Pre-order Sweatshirts
                    </a>
                </div>
                <div className="flex text-primary bg-mavgrades-radial-gradient border border-white/[0.5] space-x-2 py-2 px-4 rounded-lg">
                    <a href='https://mavorgs.campuslabs.com/engage/organization/acm/' target="_blank" rel="noopener noreferrer" className="font-bold">
                        Officer Applications
                    </a>
                </div>
            </div>
        </div>
      </div>
      {/*<Divider />*/}
    </section>
  );
}

export default HomeSection;