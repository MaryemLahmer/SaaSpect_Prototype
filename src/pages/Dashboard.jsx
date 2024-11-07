import React from 'react';
import ResultCard from '../components/ResultCard';
import ScoreCard from '../components/ScoreCard';
import PieChart from '../components/PieChart';
import DashboardTitle from '../components/DashboardTitle';
import { GrDownload } from "react-icons/gr";

const Dashboard = () => {
  return (
    <div className="bg-n-8 overflow-y-auto h-screen flex flex-col fixed top-0 left-[14rem] w-full p-10">
      <DashboardTitle />
      <div className="mt-6">
        <ScoreCard />
      </div>
      <div className="w-1/4 mx-auto mb-16">
        <PieChart />
      </div>
      <div className="flex flex-wrap justify-center items-start gap-4 mt-16">
        <div className="flex flex-row gap-4 mb-16">
          <ResultCard
            severity="high"
            mainTitle="API Security Testing"
            subtitle="1 critical vulnerability detected"
            details="API key is exposed to the public."
            recommendation="Use environment variables to secure confidential data."
          />
          <ResultCard
            severity="medium"
            mainTitle="Full-Site Vulnerability Assessment"
            subtitle="1 moderate vulnerability detected"
            details="The login form used in Login.jsx is vulnerable to SQL injection."
            recommendation="Use parameterized queries to mitigate SQL injection."
          />
          <ResultCard
            severity="low"
            mainTitle="Data Privacy and Compliance Scanning"
            subtitle="1 minor vulnerability detected"
            details="Insecure cookie attributes detected in session management."
            recommendation="Set cookies with Secure and HttpOnly flags."
          />
        </div>

        {/* Second Row of Cards */}
        <div className="flex flex-row gap-4 mt-16">
          <ResultCard
            severity="inexistant"
            mainTitle="Advanced Malware Detection"
            subtitle="No vulnerabilities detected"
            details="Nothing to see here! Everything is squeaky clean."
            recommendation="Keep doing what you're doing — it's working!"
          />
          <ResultCard
            severity="inexistant"
            mainTitle="System Health Check"
            subtitle="No vulnerabilities detected"
            details="Nothing to see here! Everything is squeaky clean."
            recommendation="Keep doing what you're doing — it's working!"
          />
        </div>
      </div>

      {/* Download Report Button */}
      <div className="flex justify-center mt-20">
        <button className="flex items-center gap-2 px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:bg-violet-700 hover:shadow-violet-500/50 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-violet-300 glow-effect">
          <GrDownload />
          Download Report
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
