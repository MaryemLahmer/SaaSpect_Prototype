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
    title: "API Security Testing2",
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
