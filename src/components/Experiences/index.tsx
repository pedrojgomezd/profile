"use client";

import {
  IoLocationOutline,
  IoCalendarClearOutline,
  IoCodeWorking,
} from "react-icons/io5";

import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Image
} from "@nextui-org/react";

const experiences = [
  {
    position: "Sr Developer Frontend",
    logo: "printi_logo.jpeg",
    bussines: "Printi",
    location: "Brasil",
    start: "Agosto 2022",
    end: "",
    description: `
    Printi is a company within the Cimpress group and is the largest graphic company in Brazil. Currently, I am working with them as a Senior Frontend Developer, utilizing skills in ReactJS, NextJS, and other frontend technologies.`,
    skills: ["ReactJs", "nextJs"],
    jornal: "Full Time",
  },
  {
    position: "Sr Developer Frontend",
    logo: "fortbrasil.png",
    bussines: "FortBrasil",
    location: "Brasil",
    start: "Septiembre 2021",
    end: "Julio 2022",
    description: `
    FortBrasil is a popular credit card management company in the northern region of Brazil. I was able to participate in the development of new features and maintenance using skills in React Native, as well as other web applications developed in ReactJS.`,
    skills: ["PHP", "ReactJs", "ReactNative", "NodeJs"],
    jornal: "Full Time",
  },
  {
    position: "Sr Developer Frontend",
    logo: "delvelcode.jpeg",
    bussines: "Develcode",
    location: "Brasil",
    start: "Febrero 2021",
    end: "Febero 2022",
    description: `I was able to collaborate on the development, maintenance, and creation of new features for the mobile apps of the two largest pharmacies in Brazil. Utilizing skills in React Native development and integration with other native services.`,
    skills: ["React Native", "ReactJs", "Firebase"],
    jornal: "Full Time and Part Time",
  },
  {
    position: "Sr Developer Frontend",
    logo: "exactus.png",
    bussines: "Exactus",
    location: "Brasil",
    start: "Enero 2019",
    end: "Enero 2020",
    description: `In my experience working with exactus, I have been able to contribute with the creation of about 4 applications made with ReactNative, which are an extension of the ERP systems they have. Currently I support and continue to contribute to these developments.`,
    skills: ["VueJs", "ReactJs", "ReactNative"],
    jornal: "Full Time and Part Time",
  },
  {
    position: "Full Stack Developer",
    logo: "konecta.jpeg",
    bussines: "Konecta",
    location: "Colombia",
    start: "Marzo 2019",
    end: "Febrero 2020",
    description: `Development of applications for the use of the marketing campaigns used by the company's clients, these were created with PHP, React, DB2.`,
    skills: ["PHP", "ReactJs", "DB2"],
    jornal: "Full Time",
  },
  {
    position: "Web Developer",
    logo: "medialfa.jpeg",
    bussines: "Medialfa SAS",
    location: "Colombia",
    start: "Febrero 2018",
    end: "Febrero 2019",
    description: `System migration used by the clinical center, mainly using Laravel and VueJs technologies among others such as PusherJs. `,
    skills: ["PHP", "VueJs", "SQLServer"],
    jornal: "Full Time",
  },
];

export const Experiences = () => (
  <Card>
    <CardHeader className="font-bold text-slate-700">Experience</CardHeader>
    <CardBody>
      <div className="flex flex-col gap-8">
        {experiences.map(
          ({
            bussines,
            description,
            end,
            jornal,
            location,
            logo,
            skills,
            start,
            position,
          }) => (
            <div
              key={bussines}
              className="lg:flex gap-4 border-b-1 border-slate-200 pb-8 last:pb-0 last:border-b-0"
            >
              <div className="w-16 h-16 overflow-hidden rounded-md mb-2">
                <Image alt={bussines} src={logo} className="w-16" width={40} height={40} />
              </div>
              <div className="">
                <div className="mb-2">
                  <div className="flex justify-between mb-1">
                    <p className="text-medium font-semibold text-slate-700">
                      {position}
                    </p>
                    <Chip size="sm" color="primary" variant="flat">
                      {jornal}
                    </Chip>
                  </div>
                  <div>
                    <div className="md:flex justify-between">
                      <div className="flex gap-2">
                        <div className="flex items-center gap-1 text-slate-400 text-sm">
                          <IoCodeWorking size={18} /> {bussines}
                        </div>
                        <div className="flex items-center text-slate-400 text-sm">
                          <IoLocationOutline size={18} /> {location}
                        </div>
                      </div>
                      <div className="flex gap-1 items-center text-slate-400 text-sm">
                        <IoCalendarClearOutline size={18} /> {start} - {end}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-md text-slate-500">{description}</p>
                <div className="flex gap-1 mt-2">
                  {skills.map((skill) => (
                    <Chip
                      key={skill}
                      size="sm"
                      color="secondary"
                      variant="flat"
                    >
                      {skill}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </CardBody>
  </Card>
);
