import Benefits from "@/app/components/Benefit";
import JobList from "@/app/components/JobList";
import { CiCircleCheck } from "react-icons/ci";
const JobDetail = () => {
  const applied = 5;
  const capacity = 10;
  const progress = (applied / capacity) * 100;
  return (
    <div className="bg-[#F8F8FD] min-h-screen py-6">
      <div className="">
        <div className="bg-white p-4 rounded-sm max-w-[1200px] mx-auto flex justify-between items-center border border-[#D6DDEB]">
          <div className="flex items-center">
            <div className="bg-blue-500 text-white text-xl font-bold p-3 rounded-lg">S</div>
            <div className="ml-3">
              <h2 className="text-xl font-bold text-[#25324B]">Social Media Assistant</h2>
              <p className="text-gray-500">Stripe · Paris, France · Full-Time</p>
            </div>
          </div>
          <button className="btn btn-primary">Apply</button>
        </div>

        <div className="bg-white py-4 mt-[24px]">
          <div className="max-w-[1200px] mx-auto mt-4 flex ">
            <div className="w-3/5">
              <div className="mb-4">
              <h3 className="text-lg font-semibold">Description</h3>
              <p className="text-gray-700">
                Stripe is looking for a Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community, and incentivizing others to engage on our channels.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold">Responsibilities</h3>
              <ul className="pl-6 text-gray-700">
                <li className="flex items-center"><CiCircleCheck className="text-[#56CDAD] mr-2"/>Community engagement to ensure active representation online</li>
                <li className="flex items-center"><CiCircleCheck className="text-[#56CDAD] mr-2"/>Focus on social media content development and publication</li>
                <li className="flex items-center"><CiCircleCheck className="text-[#56CDAD] mr-2"/>Marketing and strategy support</li>
                <li className="flex items-center"><CiCircleCheck className="text-[#56CDAD] mr-2"/>Stay on top of trends on social media platforms</li>
                <li className="flex items-center"><CiCircleCheck className="text-[#56CDAD] mr-2"/>Engage with online communities</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold">Who You Are</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li className="flex items-center"><CiCircleCheck className="text-[#56CDAD] mr-2"/> You get energy from people and building a great work environment</li>
                <li className="flex items-center"><CiCircleCheck className="text-[#56CDAD] mr-2"/> You have a sense for beautiful spaces and office experiences</li>
                <li className="flex items-center"><CiCircleCheck className="text-[#56CDAD] mr-2"/> You're a confident office manager, ready for added responsibilities</li>
                <li className="flex items-center"><CiCircleCheck className="text-[#56CDAD] mr-2"/> You're detail-oriented and creative</li>
                <li className="flex items-center"><CiCircleCheck className="text-[#56CDAD] mr-2"/> You're a growth marketer and know how to run campaigns</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold">Nice-To-Haves</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li className="flex items-center"><CiCircleCheck className="text-[#56CDAD] mr-2"/>Fluent in English</li>
                <li className="flex items-center"><CiCircleCheck className="text-[#56CDAD] mr-2"/>Project management skills</li>
                <li className="flex items-center"><CiCircleCheck className="text-[#56CDAD] mr-2"/>Copy editing skills</li>
              </ul>
            </div>
            </div>

            <div className="w-2/5 ml-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">About this role</h3>
                <div className="p-4 bg-gray-50 rounded-lg w-full my-4 shadow-md">
                  <p className="text-sm font-semibold">
                    <span className="text-black">{applied} applied</span> of {capacity} capacity
                  </p>
                  <div className="w-full h-2 bg-gray-200 rounded-md mt-2">
                    <div
                      className="h-full bg-teal-500 rounded-md"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
                <p className="flex justify-between mt-4 text-[#515B6F]"><p>Apply Before:</p> July 31, 2021</p>
                <p className="flex justify-between mt-4 text-[#515B6F]"><p>Job Posted On:</p> July 1, 2021</p>
                <p className="flex justify-between mt-4 text-[#515B6F]"><p>Job Type:</p> Full-Time</p>
                <p className="flex justify-between mt-4 text-[#515B6F]"><p>Salary:</p> $75k-$85k USD</p>
              </div>

            <div className="mt-4 p-4">
              <h3 className="text-lg font-semibold">Categories</h3>
              <div className="flex space-x-2 mt-2">
                <span className="bg-[#EB85331A] text-[#FFB836] font-bold px-4 py-2 rounded-full ">Marketing</span>
                <span className="bg-[#56CDAD1A] text-[#56CDAD] font-bold px-4 py-2 rounded-full ">Design</span>
              </div>
            </div>

            <div className="mt-4 p-4">
              <h3 className="text-lg font-semibold">Required Skills</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-[#F8F8FD] text-[#4640DE] px-4 py-2 rounded-full">Project Management</span>
                <span className="bg-[#F8F8FD] text-[#4640DE] px-4 py-2 rounded-full">Copywriting</span>
                <span className="bg-[#F8F8FD] text-[#4640DE] px-4 py-2 rounded-full">Social Media Marketing</span>
                <span className="bg-[#F8F8FD] text-[#4640DE] px-4 py-2 rounded-full">English</span>
                <span className="bg-[#F8F8FD] text-[#4640DE] px-4 py-2 rounded-full">Copy Editing</span>
              </div>
            </div>
            </div>
        </div>
            <Benefits/>
            <JobList/>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
