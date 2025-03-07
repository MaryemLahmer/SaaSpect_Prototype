import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
} from "../assets";

// Partners Section
import logoCisco from "../assets/logocisco.png";
import logoSG from "../assets/logoSG.png";
import logoIBM from "../assets/logoIBM.png";
import logoCredit from "../assets/logoCredit.png";
import logoMcafee from "../assets/logoMcafee.png";

// Integration Section
import linux from "../assets/collaboration/colabLinux.png";
import windows from "../assets/collaboration/colabWindows.png";
import aws from "../assets/collaboration/collabAWS.png";
import cloud from "../assets/collaboration/colabCloud.png";
import android from "../assets/collaboration/colabAndroid.png";
import brave from "../assets/collaboration/colabBrave.png";
import chrome from "../assets/collaboration/colabChrome.png";
import edge from "../assets/collaboration/colabEdge.png";
// Service Icons
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";

//roadmap
import roadmap5 from "../assets/roadmap/images.png";
import roadmap6 from "../assets/roadmap/images.jpg";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  logoCisco,
  logoSG,
  logoIBM,
  logoCredit,
  logoMcafee,
];

export const brainwaveServices = [
  "Advanced models",
  "Powerful testing",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [icon1, icon2, icon3, icon4, icon5];

export const roadmap = [
  {
    id: "0",
    title: "Automated Remediation Suggestions",
    text: "Leverage AI models to automatically suggest remediation actions for detected vulnerabilities, minimizing manual intervention.",
    date: "November 2024",
    status: "done",
    imageUrl: roadmap5,
    colorful: true,
  },
  {
    id: "1",
    title: "Policy and Compliance Guidancet",
    text: "Receive ongoing recommendations to align your security policies with industry standards and compliance regulations.",
    date: "November 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Interactive Dashboard",
    text: "Monitor your security posture in real-time with an interactive dashboard that visualizes scan results, trends, and compliance status at a glance.",
    date: "November 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Threat Assessment Recommendations",
    text: "Receive actionable recommendations based on AI-driven threat assessments to strengthen your security posture.",
    date: "November 2024",
    status: "progress",
    imageUrl: roadmap6,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Cloud",
    icon: cloud,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Chrome",
    icon: chrome,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Edge",
    icon: edge,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Brave",
    icon: brave,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "linux",
    icon: linux,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "windows",
    icon: windows,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "AWS",
    icon: aws,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "android",
    icon: android,
    width: 38,
    height: 32,
  },
];

export const networkPricing = [
  {
    id: "1",
    title: "Standard",
    description: "For starting your cybersecurity journey",
    price: "85",
    features: [
      "Network Assessment",
      "Dashboard Insights",
      "Basic Vulnerability Scanning",
    ],
    pricingOptions: [
      { tokens: 3, price: 30 },
      { tokens: 5, price: 40 },
      { tokens: 10, price: 50 },
    ],
  },
  {
    id: "2",
    title: "Premium",
    description: "For growing businesses needing enhanced security measures.",
    price: "150",
    features: [
      "Attack Surface Management",
      "Threat Intelligence Scanning",
      "API Security Testing",
    ],
    pricingOptions: [
      { tokens: 3, price: 70 },
      { tokens: 5, price: 90 },
      { tokens: 10, price: 107 },
    ],
  },
  {
    id: "3",
    title: "Platinum",
    description:
      "For medium-sized and large enterprises looking for continuous monitoring.",
    price: "285",
    features: [
      "Container & Cloud Security",
      "Automated Remediation Suggestions",
      "Compliance & Quality Checks",
      "Advanced Threat Monitoring",
      "Data Encryption at Rest & in Transit",
    ],
    pricingOptions: [
      { tokens: 3, price: 120 },
      { tokens: 5, price: 150 },
      { tokens: 10, price: 183 },
    ],
  },
];

export const webPricing = [
  {
    id: "1",
    title: "Standard",
    description: "For starting your cybersecurity journey",
    price: "85",
    features: [
      "Web Application Scanning",
      "Dashboard Insights",
      "Basic Vulnerability Scanning",
    ],
    pricingOptions: [
      { tokens: 3, price: 40 },
      { tokens: 5, price: 50 },
      { tokens: 10, price: 60 },
    ],
  },
  {
    id: "2",
    title: "Premium",
    description: "For growing businesses needing enhanced security measures.",
    price: "150",
    features: [
      "Attack Surface Management",
      "Threat Intelligence Scanning",
      "Enhanced Dashboard",
      "Web Application Firewall Configuration",
      "API Security Testing",
    ],
    pricingOptions: [
      { tokens: 3, price: 90 },
      { tokens: 5, price: 111 },
      { tokens: 10, price: 132 },
    ],
  },
  {
    id: "3",
    title: "Platinum",
    description:
      "For medium-sized and large enterprises looking for continuous monitoring.",
    price: "285",
    features: [
      "Container & Cloud Security",
      "Automated Remediation Suggestions",
      "Compliance & Quality Checks",
      "Advanced Threat Monitoring",
      "Data Encryption at Rest & in Transit",
    ],
    pricingOptions: [
      { tokens: 3, price: 150 },
      { tokens: 5, price: 188 },
      { tokens: 10, price: 226 },
    ],
  },
];

export const mobilePricing = [
  {
    id: "1",
    title: "Standard",
    description: "For starting your cybersecurity journey",
    price: "85",
    features: [
      "Network Assessment",
      "Dashboard Insights",
      "Basic Vulnerability Scanning",
    ],
    pricingOptions: [
      { tokens: 3, price: 55 },
      { tokens: 5, price: 70 },
      { tokens: 10, price: 85 },
    ],
  },
  {
    id: "2",
    title: "Premium",
    description: "For growing businesses needing enhanced security measures.",
    price: "150",
    features: [
      "Attack Surface Management",
      "Threat Intelligence Scanning",
      "Enhanced Dashboard",
      "API Security Testing",
    ],
    pricingOptions: [
      { tokens: 3, price: 130 },
      { tokens: 5, price: 156 },
      { tokens: 10, price: 182 },
    ],
  },
  {
    id: "3",
    title: "Platinum",
    description:
      "For medium-sized and large enterprises looking for continuous monitoring.",
    price: "285",
    features: [
      "Container & Cloud Security",
      "Compliance & Quality Checks",
      "Advanced Threat Monitoring",
      "Data Encryption at Rest & in Transit",
    ],
    pricingOptions: [
      { tokens: 3, price: 210 },
      { tokens: 5, price: 265 },
      { tokens: 10, price: 320 },
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Continuous Vulnerability Scanning",
    text: "Performs automated scans to detect and mitigate system vulnerabilities before they can be exploited.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Seamless Integration with Existing Systems",
    text: "Easily integrates with your current tools and platforms, enhancing security without disrupting workflows.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Advanced Analytics & Insights",
    text: "Empowers teams with data-driven insights and predictive analytics to anticipate and neutralize future threats.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "User-Friendly",
    text: "Offers a centralized, intuitive interface for monitoring security status, tracking incidents, and reviewing performance metrics.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Real-Time Threat Detection",
    text: "Monitors and identifies threats as they emerge, providing immediate alerts and ensuring proactive defense.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Automated Incident Response",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
