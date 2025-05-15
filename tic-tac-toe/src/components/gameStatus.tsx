"use client"

import { StatusType } from "@/types/logic";
import { JSX, useState } from "react";

type GameStatusProps = {
  className?: string;
}

export default ({ className = "" }: GameStatusProps): JSX.Element => {
  const [status, setStatus] = useState<StatusType>("X to move.");

  return (
    <p className={className}>{status}</p>
  );
};