"use client";
import React from "react";
import Image from "next/image";

const MavGradesSection = () => {
  return (
    <section id="mavgrades" className="flex flex-col items-center justify-center text-primarytext text-center space-y-12">
      <div className="space-y-2">
        <div className="text-4xl font-bold">MavGrades</div>
        <div className="text-md font-firaCode max-w-xl text-secondarytext">Built to empower <span className="text-primarytext font-bold">UTA Students</span> to make informed decisions when registering for classes. View grade distribution of any UTA course since 2017.</div>
      </div>
      <div className="border border-white/[0.2] rounded-xl h-[80vh] w-[80vw] p-4" style={{ maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"}}> 
        <div className='border border-white/[0.2] rounded-xl h-full w-full py-12 px-24'>
          <div className="flex justify-center rounded bg-mavgrades-gradient border border-white/[0.2] ">
            <Image src='/images/gradedistribution.svg' alt='MavGrades Distribution' width={996} height={634}/>
          </div>
        </div>
      </div>
      <div className="flex space-x-8">
        <div className="flex flex-col items-center max-w-sm">
            <div className="bg-white/[0.2] border border-white/[0.2] rounded py-2 px-2">
                <Image src='/icons/video-icon.svg' alt='video icon' width={12} height={12}/>
            </div>
            <div className="max-w-sm"><b>Grade Distribution.</b> MavGrades can be used to view the grade distribution of any course you need. </div>
        </div>
        <div className="flex flex-col items-center max-w-sm">
            <div className="bg-white/[0.2] border border-white/[0.2] rounded py-2 px-2 inline-block">
                <Image src='/icons/video-icon.svg' alt='video icon' width={12} height={12}/>
            </div>
            <div><b>Professor Comparison.</b> MavGrades allows you to compare professors’ grade distribution to make the best decisions.</div>
        </div>
        <div className="flex flex-col items-center max-w-sm">
            <div className="bg-white/[0.2] border border-white/[0.2] rounded py-2 px-2">
                <Image src='/icons/video-icon.svg' alt='video icon' width={12} height={12}/>
            </div>
            <div><b>Join Over 1,000 Students.</b> MavGrades is being used by thousands of UTA students already! You should too.</div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Image src='/logos/acm-logo.svg' alt='acm-logo' width={36} height={36}/>
        <div className="text-secondary">Developed by the <span className="text-primary">ACM Create Team</span>. Have questions? Want to join the team?</div>
      </div>
    </section>
  );
}

export default MavGradesSection;