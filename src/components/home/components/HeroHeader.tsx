import { useState } from "react";
import { textData } from "../../../data/data";
import SvgIcons from "../../svg-icons";

const HeroHeader = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="min-h-792px py-55px bg-[url('/hero-header-bg.png')] bg-cover bg-no-repeat relative">
      <div className="custom-container relative">
        <button className="text-base bg-primary-400 px-10px py-10px rounded-full absolute lg:right-39px max-lg:right-20px -top-6 h-38px flex items-center">
          <span
            className="text-white font-bold"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Create Your Account
          </span>
        </button>
        <div className="max-w-860px mx-auto w-full space-y-4">
          <h1 className="text-white lg:text-61px max-lg:text-40px lg:pr-20px text-center font-light">
            Connecting People to Education
          </h1>
          <div className="bg-primary-300/40 rounded-38px overflow-hidden pt-23px px-15px pb-8px space-y-5">
            <div className="flex flex-nowrap justify-between overflow-x-auto gap-4">
              {textData.heroHeaderSearchTabs.map((text, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveTab(i);
                  }}
                  className={`px-5px text-white text-15px font-light border-solid border-b-2 ${
                    activeTab === i
                      ? "border-b-warning-100"
                      : "border-b-transparent"
                  }`}
                >
                  {text}
                </button>
              ))}
            </div>
            <div className="relative overflow-hidden">
              <SvgIcons
                type="search"
                className="absolute left-5 top-1/2 -translate-y-1/2 text-secondary-100/60"
              />
              <input
                type="text"
                className="h-43px w-full rounded-full bg-primary-400 text-16px placeholder:text-secondary-100/60 text-secondary-100 !outline-none !shadow-none !ring-0 pl-55px"
                placeholder="Search for courses, uni & colleges and information"
              />
            </div>
          </div>
          <h3 className="lg:text-24px max-lg:text-19px text-light-200 text-center font-light tracking-wide pt-2">
            Apply to Any University, College, School and Hostel
          </h3>
        </div>
      </div>
    </section>
  );
};

export { HeroHeader };
