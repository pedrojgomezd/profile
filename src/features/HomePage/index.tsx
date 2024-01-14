"use client";


import { AboutMe } from "@pedro/components/AboutMe";
import { Experiences } from "@pedro/components/Experiences";
import { InformationCard } from "@pedro/components/InformationCard";
import { CardProfile } from "@pedro/components/ProfileCard";
import { SkilsCard } from "@pedro/components/SkilsCard";


export const HomePage = () => {
  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="lg:grid lg:grid-cols-4 gap-5">
        <div className="flex flex-col gap-4 mb-4">
          <CardProfile />
          <InformationCard />
          <SkilsCard />
        </div>
        <div className="col-span-3 gap-4 flex flex-col">
          <AboutMe />
          <Experiences />
        </div>
      </div>
    </div>
  );
};
