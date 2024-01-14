import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { ReactNode } from "react";

interface CardAsideProps {
  title: string;
  children: ReactNode;
}

export const CardAside = ({ children, title }: CardAsideProps) => (
  <Card>
    <CardHeader className="text-slate-700 font-bold">{title}</CardHeader>
    <CardBody>{children}</CardBody>
  </Card>
);
