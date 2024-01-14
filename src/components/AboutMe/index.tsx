"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiCopy } from "react-icons/bi";

const rrss = [
  {
    icon: <FaLinkedin size={24} />,
    href: "https://www.linkedin.com/in/pedrojgomezd/",
  },
  {
    icon: <FaInstagram size={24} />,
    href: "https://www.instagram.com/pedroj.gd/",
  },

  {
    icon: <FaGithub size={24} />,
    href: "https://github.com/pedrojgomezd",
  },
];

export const AboutMe = () => (
  <Card>
    <CardHeader className="font-bold text-slate-700">About me</CardHeader>
    <CardBody>
      <div>
        <p className="text-sm text-slate-500">
          I began my career as a developer over 10 years ago. Throughout this
          time, I have learned that talent alone is not enough; perseverance,
          discipline, and continuous learning are key. Currently, I hold the
          position of Senior Frontend Developer. Although at times I doubt my
          ability to fulfill this role, I remind myself of the attributes I
          mentioned. In addition to my professional career, I am a friend,
          husband, and father.
        </p>
        <p className="text-sm text-slate-500">
          These roles in my life provide daily motivation for me to work hard
          and constantly improve my skills.
        </p>
      </div>
    </CardBody>
    <CardFooter className="flex-col items-start gap-2">
      <div
        className="flex gap-2 justify-center items-center cursor-pointer"
        onClick={() =>
          navigator.clipboard.writeText("pedrojgomezdusa@gmail.com")
        }
      >
        <p>pedrojgomezdusa@gmail.com</p> <BiCopy size={18} />
      </div>
      <div className="flex gap-2">
        {rrss.map(({ href, icon }) => (
          <Link key={href} className="text-slate-700" href={href}>
            {icon}
          </Link>
        ))}
      </div>
    </CardFooter>
  </Card>
);
