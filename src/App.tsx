import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './app/components/NavBar';
import Footer from '@/app/components/Footer';
import Homepage from './app/pages/Homepage';
import RecruiterPage from './app/pages/recruiter/RecruiterPage';
import JobDetail from '@/app/pages/JobDetail/JobDetail';

export default function App() {
  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <NavBar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/recruiter" element={<RecruiterPage />} />
            <Route path="/job/:id" element={<JobDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
