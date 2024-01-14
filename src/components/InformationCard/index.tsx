"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { CardAside } from "../CardAside";

const informations: { [key: string]: string } = {
  location: "Dallas TX",
  experience: "+9 years",
  relocation: "Yes",
};

export const InformationCard = () => {
  return (
    <CardAside title="Information">
      <div className="flex gap-2 flex-col">
        {Object.keys(informations).map((key) => (
          <div className="flex justify-between text-sm" key={key}>
            <p className="capitalize text-slate-400">{key}</p>
            <p className="text-slate-700 font-semibold">{informations[key]}</p>
          </div>
        ))}
      </div>
    </CardAside>
  );
};
