"use client";
import React, { useState } from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-full bg-black/[0.2] border-t">
            <div className="flex flex-col px-12 py-2">
                <div className="flex flex-row justify-between items-center p-12">
                    {/*left*/}
                    <div>
                        <Image src='/logos/acm-logo.svg' alt='acm logo' width={48} height={48}/>
                    </div>

                    {/*middle*/}
                    <div className="grid grid-cols-3 gap-32 text-secondary">
                        <div className="flex flex-col">
                            <h3 className="font-bold text-primary">Reach Out</h3>
                            <a href="/">About us</a>
                            <a href="/contact">Contact us</a>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-bold text-primary">Learn More</h3>
                            <a href="/committees">Committees</a>
                            <a href="/events">Events</a>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-bold text-primary">Join Us</h3>
                            <a href="https://mavorgs.campuslabs.com/engage/organization/acm/" target="_blank" rel="noopener noreferrer">Apply</a>
                        </div>
                    </div>

                    {/*right*/}
                    <div className="flex flex-row space-x-4 text-primary">
                        <a href="https://github.com/acmuta" target="_blank" rel="noopener noreferrer"><Image src='/logos/github.svg' alt="GitHub" width={36} height={36}/></a>
                        <a href="https://discord.gg/MdyAfWhM" target="_blank" rel="noopener noreferrer"><Image src='/logos/discord.svg' alt="Discord" width={36} height={36}/></a>
                        <a href="https://www.instagram.com/acmuta/" target="_blank" rel="noopener noreferrer"><Image src='/logos/instagram.svg' alt="Instagram" width={36} height={36}/></a>
                        <a href="https://www.linkedin.com/company/acmuta/mycompany/" target="_blank" rel="noopener noreferrer"><Image src='/logos/linkedin.svg' alt="Linkedin" width={36} height={36}/></a>
                        <a href="https://www.youtube.com/@acmuta" target="_blank" rel="noopener noreferrer"><Image src='/logos/youtube.svg' alt="Youtube" width={36} height={36}/></a>
                    </div>
                </div>

                <div className="flex justify-center text-secondary">
                    &copy; {new Date().getFullYear()} Association for Computing Machinery @ University of Texas at Arlington. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
export default Footer;
