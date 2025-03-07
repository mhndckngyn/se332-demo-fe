import NavBar from './app/components/NavBar';
import Homepage from './app/pages/Homepage';
import RecruiterPage from './app/pages/recruiter/RecruiterPage';

export default function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <NavBar />
      {/* <Homepage /> */}
      <RecruiterPage />
    </div>
  );
}
