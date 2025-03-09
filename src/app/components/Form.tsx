import React, { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  jobTitle: string;
  linkedin: string;
  portfolio: string;
  additionalInfo: string;
  resume: FileList;
}

interface IProps {
  setOpenForm: Dispatch<SetStateAction<boolean | undefined>>;
}

const JobApplicationForm: React.FC<IProps> = ({ setOpenForm }) => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted", data);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-[600px] overflow-y-scroll min-w-md mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">Submit your application</h2>
        <FaTimes
          onClick={() => setOpenForm((prevState) => !prevState)}
          className="text-xl cursor-pointer opacity-50 hover:opacity-100 duration-150"
        />
      </div>
      <div className="flex items-center my-8">
        <div className="bg-blue-500 text-white text-xl font-bold p-3 rounded-lg">S</div>
        <div className="ml-3">
          <h2 className="text-xl font-bold text-[#25324B]">Social Media Assistant</h2>
          <p className="text-gray-500">Stripe · Paris, France · Full-Time</p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input {...register("fullName")} type="text" className="mt-1 w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input {...register("email")} type="email" className="mt-1 w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input {...register("phone")} type="tel" className="mt-1 w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Current or Previous Job Title</label>
          <input {...register("jobTitle")} type="text" className="mt-1 w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">LinkedIn URL</label>
          <input {...register("linkedin")} type="url" className="mt-1 w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Portfolio URL</label>
          <input {...register("portfolio")} type="url" className="mt-1 w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Additional Information</label>
          <textarea {...register("additionalInfo")} className="mt-1 w-full p-2 border border-gray-300 rounded-md"></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Attach your resume</label>
          <input {...register("resume")} type="file" className="mt-1 w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">Submit Application</button>
      </form>
    </motion.div>
  );
};

export default JobApplicationForm;
