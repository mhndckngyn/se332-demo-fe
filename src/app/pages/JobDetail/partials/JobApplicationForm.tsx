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
        <h2 className="text-lg font-semibold text-gray-800">Ứng tuyển vị trí</h2>
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
          <label className="block text-sm font-medium text-gray-700">Họ tên</label>
          <input {...register("fullName")} type="text" className="input mt-1.5 w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Địa chỉ email</label>
          <input {...register("email")} type="email" className="input mt-1.5 w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Số điện thoại</label>
          <input {...register("phone")} type="tel" className="input mt-1.5 w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Trang cá nhân LinkedIn</label>
          <input {...register("linkedin")} type="url" className="input mt-1.5 w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Thông tin thêm</label>
          <textarea {...register("additionalInfo")} className="textarea mt-1.5 w-full"></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">CV của bạn (*.pdf)</label>
          <input {...register("resume")} type="file" className="file-input mt-1.5 w-full" />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Nộp đơn ứng tuyển</button>
      </form>
    </motion.div>
  );
};

export default JobApplicationForm;
