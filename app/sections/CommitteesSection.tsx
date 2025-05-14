"use client";
import React from "react";
import Image from "next/image";
import Card from "../components/Cards";

const CommitteesSection = () => {
  return (
    <section id="committees" className="flex flex-col items-center justify-center text-primarytext text-center space-y-12">
        <div className="space-y-2">
            <div className="text-4xl font-bold">
                Committees
            </div>
            <div className="text-md font-firaCode max-w-xl text-secondarytext">
                An overview of the committees ACM currently maintains, along with recent news and events the committees are doing.
            </div>
        </div>
        <div className="flex flex-row justify-between w-full px-24">
            {/*left*/}
            <div className="flex flex-row space-x-4 items-center">
                <div className="border border-white/[0.2] bg-white/[0.1] rounded px-4">Create</div>
                <div className="border border-white/[0.2] bg-white/[0.1] rounded px-4">Educate</div>
                <div className="border border-white/[0.2] bg-white/[0.1] rounded px-4">Outreach</div>
                <div className="border border-white/[0.2] bg-white/[0.1] rounded px-4">Research</div>
            </div>
            {/*right*/}
            <div className="text-right max-w-md">
                <div className="text-4xl">ACM Create</div>
                <div className="text-secondary">The ACM Create team is dedicated to developing industry-applicable skills and technological knowledge through semester-long projects. </div>
            </div>
        </div>
        <div className="flex flex-row justify-between w-full px-24">
            <Card
                owner={{
                    image: "/logos/acm-logo.svg",
                    name: "ACM Create",
                    role: "Newsletter"
                }}
                title="ACM Create Expanding Reach"
                body="The ACM Create team has revitalized the ACM community through semester long group projects. Encouraging the development of industry-relevant skills and effective teamwork abilities. This serves as a new frontier for ACM and the broader CS community here at UTA."
                learnMoreLink="#home"
                className="bg-create-gradient"
                />
            <Card
                owner={{
                    image: "/logos/acm-logo.svg",
                    name: "MavGrades",
                    role: "Newsletter"
                }}
                title="Introducing MavGrades!"
                body="MavGrades is now here! This tool, created by the ACM Create team enables students to make data-driven decision for course registration. Using MavGrades, students are able to view the grade distribution of any class or section they need."
                learnMoreLink="#home"
                className="bg-mavgrades-radial-gradient"
            />
            <Card isEmpty/>
        </div>
    </section>
  );
}

export default CommitteesSection;