import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { ButtonCV } from "./button-cv";

export const CardProfile = () => {
  return (
    <Card>
      <CardHeader
        className="overflow-hidden bg-cover justify-center"
        style={{ backgroundImage: 'url("cover.avif")' }}
      >
        <div className="z-20 w-24 h-24 rounded-full border-3 border-white overflow-hidden ">
          <Image
            src="profile.jpeg"
            width={100}
            height={100}
            alt="Profile Photo Pedro J Gomez"
          />
        </div>
      </CardHeader>
      <CardBody>
        <div className="">
          <div className="">
            <h1 className="text-slate-800 font-semibold text-lg mb-2">
              Pedro J. Gomez
            </h1>
            <h3 className="text-slate-500 font-light text-tiny">
              Senior Frontend Developer
            </h3>
          </div>
        </div>
      </CardBody>

      <CardFooter>
        <ButtonCV />
      </CardFooter>
    </Card>
  );
};
