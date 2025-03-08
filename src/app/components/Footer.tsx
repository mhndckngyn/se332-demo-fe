import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-white text-xl font-semibold">Jobly</h2>
          <p className="mt-2">Great platform for the job seeker that passionate about startups. Find your dream job easier.</p>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold">About</h3>
          <ul className="mt-2 space-y-2">
            <li>Companies</li>
            <li>Pricing</li>
            <li>Terms</li>
            <li>Advice</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold">Resources</h3>
          <ul className="mt-2 space-y-2">
            <li>Help Docs</li>
            <li>Guide</li>
            <li>Updates</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold">Get job notifications</h3>
          <p className="mt-2">The latest job news, articles, sent to your inbox weekly.</p>
          <div className="mt-4 flex">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full px-4 py-2 rounded-l-md bg-gray-800 text-white border border-gray-700 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p>2021 © Jobly. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer" />
          <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" />
          <FaLinkedinIn className="text-gray-400 hover:text-white cursor-pointer" />
          <FaTwitter className="text-gray-400 hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
