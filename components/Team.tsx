import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  linkedinUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO and Founder",
    bio: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    imageSrc: "/assets/team/Picture.png",
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Director of Operations",
    bio: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    imageSrc: "/assets/team/Picture-1.png",
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    bio: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    imageSrc: "/assets/team/Picture-2.png",
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: 4,
    name: "Emily Johnson",
    role: "PPC Manager",
    bio: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    imageSrc: "/assets/team/Picture-3.png",
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: 5,
    name: "Brian Williams",
    role: "Social Media Specialist",
    bio: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    imageSrc: "/assets/team/Picture-4.png",
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: 6,
    name: "Sarah Kim",
    role: "Content Creator",
    bio: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    imageSrc: "/assets/team/Picture-5.png",
    linkedinUrl: "https://linkedin.com",
  },
];

export default function Team() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionHeading
        badge="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white border border-[#191A23] rounded-[35px] sm:rounded-[45px] p-8 sm:p-9 shadow-positivus hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#191A23] transition-all duration-200 flex flex-col justify-between"
          >
            {/* Top section: Avatar, Info, and LinkedIn button */}
            <div>
              <div className="flex items-start justify-between relative">
                <div className="flex items-end gap-4">
                  {/* Photo with rounded/star shape background */}
                  <div className="relative w-[88px] h-[88px] sm:w-[96px] sm:h-[96px] shrink-0">
                    <Image
                      src={member.imageSrc}
                      alt={member.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#191A23]">
                      {member.name}
                    </h3>
                    <p className="text-base text-gray-700">{member.role}</p>
                  </div>
                </div>

                {/* LinkedIn Icon */}
                <Link
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 hover:opacity-80 transition-opacity"
                  aria-label={`${member.name} LinkedIn Profile`}
                >
                  <Image
                    src="/assets/dark_social_icon.svg"
                    alt="LinkedIn"
                    width={34}
                    height={34}
                    className="w-full h-full"
                  />
                </Link>
              </div>

              {/* Divider */}
              <div className="border-t border-[#191A23] my-6" />

              {/* Bio */}
              <p className="text-sm sm:text-base text-[#191A23] leading-relaxed">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Action Button at bottom */}
      <div className="mt-10 sm:mt-12 flex justify-end">
        <button
          type="button"
          className="w-full sm:w-auto px-12 py-4 bg-[#191A23] text-white rounded-[14px] text-lg font-normal hover:bg-[#B9FF66] hover:text-[#191A23] transition-all duration-300 shadow-positivus-sm hover:shadow-none cursor-pointer"
        >
          See all team
        </button>
      </div>
    </section>
  );
}
