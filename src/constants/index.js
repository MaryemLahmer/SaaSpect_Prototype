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
    title: "Continuous Vulnerability Scanning",
    text: "Performs automated scans to detect and mitigate system vulnerabilities before they can be exploited.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Seamless Integration with Existing Systems",
    text: "Easily integrates with your current tools and platforms, enhancing security without disrupting workflows.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Advanced Analytics & Insights",
    text: "Empowers teams with data-driven insights and predictive analytics to anticipate and neutralize future threats.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "User-Friendly",
    text: "Offers a centralized, intuitive interface for monitoring security status, tracking incidents, and reviewing performance metrics.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Real-Time Threat Detection",
    text: "Monitors and identifies threats as they emerge, providing immediate alerts and ensuring proactive defense.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Automated Incident Response",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    imageUrl: benefitImage2,
  },
];
