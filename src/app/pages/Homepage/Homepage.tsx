import { JobItems } from "@/mocks/JobItems.ts";
import JobSection from "./partials/JobSection.tsx";
import Search from "./partials/Search.tsx";

export default function Homepage() {
  const jobs = JobItems;

  return (
    <div className="flex-1" >
      <Search />
      <JobSection initialJobs={jobs}/>
    </div>
  )
}
