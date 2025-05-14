"use client";
import React from "react";
import Image from "next/image";
import { useState } from 'react';
import OfficerCarousel from "../components/OfficerCarousel";

interface Officer {
    image: string;
    name: string;
    position: string;
    focus: string[];
    socials: {
        instagram: string;
        linkedin: string;
        email: string;
    };
    quote: string;
}

interface OfficersData {
    [key: string]: Officer[];
}

const officersData: OfficersData = {
    Executive: [
      {
        image: "/images/officers/bobby.webp",
        name: "Bobby Flennoy",
        position: "Student Advisor",
        focus: ["Educate", "UX Design"],
        socials: {
          instagram: "https://instagram.com/flennoyba",
          linkedin: "https://linkedin.com/in/bobby-flennoy",
          email: "advisor@acmuta.org"
        },
        quote: "A great man once said, life is roblox"
      },
      {
        image: "/images/officers/devrat.webp",
        name: "Devrat Patel",
        position: "President",
        focus: ["Create", "Educate"],
        socials: {
          instagram: "https://instagram.com/devratpatel",
          linkedin: "https://linkedin.com/in/devratpatel",
          email: "president@acmuta.org"
        },
        quote: "Good morning pineapple, looking very good very niiiiice"
      },
      {
        image: "/images/officers/yash.webp",
        name: "Yash Rao",
        position: "Vice President",
        focus: ["Educate", "Outreach"],
        socials: {
          instagram: "https://instagram.com/yash.r.rao",
          linkedin: "https://linkedin.com/in/yash-rao",
          email: "vicepresident@acmuta.org"
        },
        quote: "He's just a chill guy!"
      }
    ],
    Create: [
        {
            image: "/images/officers/yash.webp",
            name: "Yash Rao",
            position: "Vice President",
            focus: ["Educate", "Outreach"],
            socials: {
              instagram: "https://instagram.com/yash.r.rao",
              linkedin: "https://linkedin.com/in/yash-rao",
              email: "vicepresident@acmuta.org"
            },
            quote: "He's just a chill guy!"
          },
          {
            image: "/images/officers/yash.webp",
            name: "Yash Rao",
            position: "Vice President",
            focus: ["Educate", "Outreach"],
            socials: {
              instagram: "https://instagram.com/yash.r.rao",
              linkedin: "https://linkedin.com/in/yash-rao",
              email: "vicepresident@acmuta.org"
            },
            quote: "He's just a chill guy!"
          },
          {
            image: "/images/officers/yash.webp",
            name: "Yash Rao",
            position: "Vice President",
            focus: ["Educate", "Outreach"],
            socials: {
              instagram: "https://instagram.com/yash.r.rao",
              linkedin: "https://linkedin.com/in/yash-rao",
              email: "vicepresident@acmuta.org"
            },
            quote: "He's just a chill guy!"
          }
    ],
    Educate: [],
    Marketing: [],
    Outreach: [],
    Research: []
  };

const committees = ['Executive', 'Create', 'Educate', 'Marketing', 'Outreach', 'Research'];


const OfficersSection = () => {
    const [selectedCommittee, setSelectedCommittee] = useState('Executive');

  return (
    <section id="officers" className="min-h-screen flex flex-col items-center justify-center text-primarytext text-center space-y-12">
        <div className="space-y-2">
            <div className="text-4xl font-bold">
                ACM Officers
            </div>
            <div className="text-md font-firaCode max-w-xl text-secondarytext">
                Introducing our board of officers for the 2024-2025 academic year! Take a look at the team and make sure to send a virtual wave 👋
            </div>
        </div>      
      <div className="flex gap-4">
        {committees.map((committee) => (
          <button
            key={committee}
            onClick={() => setSelectedCommittee(committee)}
            className={`px-4 py-2 rounded-full ${
              selectedCommittee === committee
                ? 'bg-white/[0.05] border border-white/[0.2]'
                : 'text-secondary hover:text-white'
            }`}
          >
            {committee}
          </button>
        ))}
      </div>
      
      <OfficerCarousel officers={officersData[selectedCommittee]} />

    </section>
  );
}

export default OfficersSection;