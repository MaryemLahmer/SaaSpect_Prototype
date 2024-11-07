import star from "../assets/star.png";
import key from "../assets/key.png";
import plane from "../assets/plane.png";
import benefitImage2 from "../assets/benefits/image-2.png";
export const navigation = [
  {
    id: "0",
    title: "Features",
    image: star,
  },
  {
    id: "1",
    title: "Features",
    image: key,
  },
  {
    id: "2",
    title: "Features",
    image: plane,
  },
];

export const services = [
  {
    id: "0",
    title: "Full-Site Vulnerability Assessment",
    text: "Detection of common vulnerabilities (e.g., SQL Injection, XSS, CSRF) as well as emerging threats.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Advanced Malware Detection",
    text: "Malware scanning to identify malicious scripts, phishing pages, or compromised assets.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "API Security Testing",
    text: "Scanning and testing of API endpoints for security flaws.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Security Risk Assessment and Reporting",
    text: "Executive summary reports tailored for non-technical stakeholders.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Data Privacy and Compliance Scanning",
    text: "Identification of personal data leaks or misconfigured assets that may compromise privacy.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Automated Remediation Suggestions",
    text: "Custom remediation guidelines for each identified vulnerability.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    imageUrl: benefitImage2,
  },
];

export const scanResults = [
  {
    id: "0",
    title: "Full-Site Vulnerability Assessment",
    text: "Detection of common vulnerabilities",
    vulnerabilities: [
      { id: "0-1", name: "SQL Injection", severity: "High" },
      { id: "0-2", name: "Cross-Site Scripting (XSS)", severity: "Medium" },
      { id: "0-3", name: "Cross-Site Request Forgery (CSRF)", severity: "Low" },
    ],
    severity: "medium",
    details: "The login form used in Login.jsx is vulnerable to SQL injection.",
    recommendation: "Use parameterized queries to mitigate SQL injection.",
  },
  {
    id: "1",
    title: "Advanced Malware Detection",
    text: "Malware scanning to identify malicious scripts, phishing pages, or compromised assets.",
    vulnerabilities: [
      { id: "1-1", name: "Phishing Page Detected", severity: "High" },
      { id: "1-2", name: "Malicious Script Injection", severity: "Critical" },
    ],
    details: "Malicious Script Injection.",
    recommendation: "Implement Input Validation and Sanitization",
    severity: "high",
  },
  {
    id: "2",
    title: "API Security Testing",
    text: "Scanning and testing of API endpoints for security flaws.",
    vulnerabilities: [
      { id: "2-1", name: "Broken Authentication", severity: "High" },
      { id: "2-2", name: "Excessive Data Exposure", severity: "Medium" },
    ],
    severity: "high",
    details: "API key is exposed to the public.",
    recommendation: "Use environment variables to secure confidential data.",
  },
  {
    id: "3",
    title: "Security Risk Assessment and Reporting",
    text: "Executive summary reports tailored for non-technical stakeholders.",
    vulnerabilities: [
      { id: "3-1", name: "Insecure Storage of Reports", severity: "Medium" },
    ],
    details:
      "Sensitive or confidential reports are stored in a way that might allow unauthorized access.",
    recommendation: "Apply Access Control and Store Encryption Keys Securely",
    severity: "medium",
  },
  {
    id: "4",
    title: "Data Privacy and Compliance Scanning",
    text: "Identification of personal data leaks or misconfigured assets that may compromise privacy.",
    vulnerabilities: [
      { id: "4-1", name: "Personal Data Leak Detected", severity: "Critical" },
      { id: "4-2", name: "Weak Privacy Configurations", severity: "Medium" },
    ],
    details: "Insecure cookie attributes detected in session management.",
    recommendation: "Set cookies with Secure and HttpOnly flags.",
    severity: "high",
  },
];
