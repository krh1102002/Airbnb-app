"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Heading from "./components/Heading";
import Button from "./components/Button";
import Image from "next/image";

import NoData from "../public/assets/no-data.png";
interface EmptyStateProps {
  title?: string;
  subTitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No Exact Matches",
  subTitle = "Try Changing or removing some of your filters!",
  showReset,
}) => {
  const router = useRouter();

  return (
    <div className="h-[60vh] flex flex-col items-center justify-center gap-2">
      <Image src={NoData} alt="No data available" />
      <Heading center title={title} subTitle={subTitle} />
      <div className="w-48 mt-4">
        {showReset && (
          <Button label="Remove all filters" onClick={() => router.push("/")} />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
