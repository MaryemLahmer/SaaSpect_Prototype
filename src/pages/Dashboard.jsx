import React from "react";
import ResultCard from "../components/ResultCard";

const Dashboard = () => {
    return (
        <div className="bg-n-8 overflow-y-auto h-screen flex flex-col fixed top-0 left-[14rem] w-full">
            <div className="flex flex-row justify-center items-start gap-4 mt-4 absolute top-[10rem] left-[5rem]">
                <ResultCard
                    severity="high"
                    mainTitle="Pentesting"
                    subtitle="1 critical vulnerability detected"
                    details="The login form is vulnerable to SQL injection."
                    recommendation="Use parameterized queries to mitigate SQL injection."
                />
                <ResultCard
                    severity="medium"
                    mainTitle="Cookies management"
                    subtitle="2 moderate vulnerabilities detected"
                    details="Insecure cookie attributes detected in session management."
                    recommendation="Set cookies with Secure and HttpOnly flags."
                />
                <ResultCard
                    severity="low"
                    mainTitle="Configuration Check"
                    subtitle="No major vulnerabilities"
                    details="Minor misconfiguration found in headers."
                    recommendation="Consider adding security headers like Content-Security-Policy."
                />
            </div>
        </div>
    );
}

export default Dashboard;
