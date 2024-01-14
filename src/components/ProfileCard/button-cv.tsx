"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";

import { useState } from "react";
import { VscCloudDownload } from "react-icons/vsc";

export const ButtonCV = () => {
  const [downloading, setDownloading] = useState(false);

  const handleClickDownload = () => {
    setDownloading(true);

    setTimeout(() => setDownloading(false), 2000);
  };

  return (
    <Button
      fullWidth
      color="primary"
      endContent={<VscCloudDownload size={24} />}
      isLoading={downloading}
      onClick={handleClickDownload}
    >
      <Link href={"/PedroJGomezCV.pdf"} download target="_blank">
        Download CV
      </Link>
    </Button>
  );
};
