import {
  check,
  service1,
  service2,
  img1,
  img2,
  img7,
  img8,
  img13,
  img4,
  img15,
} from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import Heading from "./Heading";
import Section from "./Section";

import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Automated Cybersecurity made for Everyone"
          text="SaaSpect unlocks the potential of AI-powered Defense"
        />
        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                src={img8}
                className="h-full w-full object-cover md:object-right"
                width={800}
                height={730}
                alt="smartest AI"
              />
              <PhotoChatMessage />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                SaaSpect unlocks the potential of AI-powered Defense
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6 "
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2 ">
            <div className="relative min-h-[39rem] border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={img2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Robot"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Automated Pentesting</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  A smarter, more efficient approach to cybersecurity defense.
                </p>
              </div>
            </div>
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem] ">
              <div className="py-12 px-4 xl:px-8 ">
                <h4 className="h4 mb-4">Threat Detection</h4>
                <p className="body-2 mb-[2rem] text-n-3 ">
                  Boost resilience with intelligent, automated threat
                  management.
                </p>
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center justify-center rounded-2xl ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient  md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img
                          width={28}
                          height={28}
                          alt="icon"
                          src={item}
                          style={{ filter: "brightness(0) invert(1)" }} // change the icon color to white
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={img15}
                  className="w-full h-full object-cover"
                  width={420}
                  height={300}
                  alt="server"
                />
                <VideoChatMessage />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
