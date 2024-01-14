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
      <p className="text-sm text-slate-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        pariatur itaque consectetur nesciunt reprehenderit cumque, laboriosam
        sed quas accusantium nobis ullam, dolorem consequatur qui perspiciatis
        excepturi corrupti architecto nisi alias porro! Molestiae recusandae
        tenetur obcaecati nemo, eius modi.
      </p>
    </CardBody>
    <CardFooter className="flex-col items-start gap-2">
      <div
        className="flex gap-2 justify-center items-center cursor-pointer"
        onClick={() => navigator.clipboard.writeText("pedrojgomezdusa@gmail.com")}
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
