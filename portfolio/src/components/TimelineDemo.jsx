import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Education",
      content: (
        <div>
          <div className="mb-2 text-lg font-bold text-neutral-800 md:text-xl dark:text-neutral-100">University of Central Florida</div>
          <div className="mb-1 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">Bachelor of Science in Information Technology</div>
          <div className="mb-1 text-xs font-normal text-neutral-600 md:text-sm dark:text-neutral-400">Orlando, FL &nbsp;|&nbsp; 2021-2024</div>
          <div className="mt-6 mb-2 text-lg font-bold text-neutral-800 md:text-xl dark:text-neutral-100">Palm Beach State College</div>
          <div className="mb-1 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">Associate in Arts</div>
          <div className="mb-2 text-xs font-normal text-neutral-600 md:text-sm dark:text-neutral-400">2019-2021</div>
        </div>
      ),
    },
    {
      title: "Experience",
      content: (
        <div>
          <div className="mb-2 text-lg font-bold text-neutral-800 md:text-xl dark:text-neutral-100">UCF Foundation, Inc.</div>
          <div className="mb-1 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">Technical Analyst</div>
          <div className="mb-1 text-xs font-normal text-neutral-600 md:text-sm dark:text-neutral-400">Orlando, FL &nbsp;|&nbsp; Aug 2023– Dec 2024</div>
          <div className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Provided IT support and automation for 300+ employees, managed user accounts and group policies, and improved onboarding and ticketing processes.
          </div>
          <div className="mb-2 text-lg font-bold text-neutral-800 md:text-xl dark:text-neutral-100">Target</div>
          <div className="mb-1 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">Tech Consultant</div>
          <div className="mb-1 text-xs font-normal text-neutral-600 md:text-sm dark:text-neutral-400">West Palm Beach, FL &nbsp;|&nbsp; Oct 2019– July 2021</div>
          <div className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Delivered technical support and solutions for PC and mobile devices, ensuring smooth operations and improved customer satisfaction.
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
