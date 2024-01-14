"use client";
import { Chip } from "@nextui-org/react";
import { CardAside } from "../CardAside";

const skills = [
  { label: "ReactJs" },
  { label: "NextJs" },
  { label: "Node" },
  { label: "ReactNative" },
];

export const SkilsCard = () => {
  return (
    <CardAside title="Skills">
      <div className="flex gap-2 flex-wrap">
        {skills.map(({ label }) => (
          <Chip size="sm" key={label}>
            {label}
          </Chip>
        ))}
      </div>
    </CardAside>
  );
};
