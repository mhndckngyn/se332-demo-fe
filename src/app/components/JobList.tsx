const jobs = [
  {
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp",
  },
  {
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Fransisco, USA",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp",
  },
  {
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp",
  },
  {
    title: "HR Manager",
    company: "Packer",
    location: "Lucern, Switzerland",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp",
  },
];

interface JobType {
    title: string,
    company: string,
    location: string,
    logo: string
}

const JobCard = ({ job } : {job : JobType}) => {
  return (
    <div className="bg-white p-6 rounded-2xl border-gray-300 border flex items-center gap-4">
      <img src={job.logo} alt={job.company} className="w-10 h-10" />
      <div>
        <h3 className="text-lg font-semibold">{job.title}</h3>
        <p className="text-gray-500 text-sm">{job.company} • {job.location}</p>
        <div className="flex gap-2 mt-2">
          <span className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded-lg">Full-Time</span>
          <span className="bg-yellow-100 text-yellow-700 px-2 py-1 text-xs rounded-lg">Marketing</span>
          <span className="bg-purple-100 text-purple-700 px-2 py-1 text-xs rounded-lg">Design</span>
        </div>
      </div>
    </div>
  );
};

const JobList = () => {
  return (
    <div className="py-12 px-12 max-w-6xl mx-auto">
      <h2 className="text-3xl text-[#25324B] font-bold mb-4 text-center">Similar Jobs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
      <div className="mt-4 text-right">
        <a href="#" className="text-blue-500 font-medium hover:underline">Show all jobs →</a>
      </div>
    </div>
  );
};

export default JobList;
