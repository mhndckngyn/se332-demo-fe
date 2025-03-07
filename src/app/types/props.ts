import { ReactNode } from "react";
import { JobData } from "./data";

export type JobItemProps = {
  job: JobData;
  children: ReactNode;
}

export type JobInfoProps = {
  initialJob: JobData | null;
}
