import { textData } from "../../../data/data";
import { CategoryGrid } from "./CategoryGrid";

const CourseExploration = () => {
  return (
    <section className="relative lg:bg-[url('cards-bg.png')] lg:bg-cover lg:bg-no-repeat max-lg:bg-primary-100 lg:-mt-345px max-lg:py-10 -mt-6px">
      <div className="custom-container relative z-1 min-h-[200vh]">
        <div className="relative lg:-top-12">
          <div className="flex lg:items-end max-lg:flex-col">
            <div className="lg:max-w-[44%] w-full relative lg:rounded-50px max-lg:rounded-30px group overflow-hidden cursor-pointer lg:mr-5 max-lg:mb-5">
              <img
                src="/course-exploration-card-1.png"
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                alt=""
              />
              <h4 className="absolute bottom-7 left-9 lg:text-40px max-lg:text-30px font-bold text-secondary-100">
                Course Exploration
              </h4>
            </div>
            <div className="flex lg:pb-5 max-lg:flex-col">
              <div className="space-y-6 flex flex-col w-full lg:max-w-[60%] cursor-pointer max-lg:mb-5">
                <img
                  src="/course-exploration-card-2.png"
                  className="w-full object-cover flex-1"
                  alt=""
                />
                <h3 className="text-sm text-center font-light text-secondary-100">
                  Advertisement.{" "}
                  <span className="text-warning-100 cursor-pointer">
                    Why the ads?
                  </span>
                </h3>
              </div>
              <div className="space-y-6 flex flex-col flex-1 lg:ml-3 cursor-pointer">
                <div className="px-4 py-37px h-full flex flex-col items-center bg-dark-100 text-secondary-100 flex-1">
                  <h4 className="lg:text-64px max-lg:text-40px font-primary leading-none">
                    OPPORTUNITY
                  </h4>
                  <p className="lg:text-base max-lg:text-sm text-justify text-light-100">
                    Want to start your own University or Institute? Get expert
                    advice and a detailed feasibility report. Let's make your
                    vision a reality!
                  </p>
                </div>
                <h3 className="text-sm text-center font-light text-secondary-100">
                  Advertisement.
                  <span className="text-warning-100 cursor-pointer">
                    Why the ads?
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:py-80px max-lg:py-50px grid lg:grid-cols-4 mm-sm-lg:grid-cols-3 lg:gap-8 max-lg:gap-5">
          {textData.educationStats.map((item, i) => (
            <div
              key={i}
              className="lg:aspect-square p-5 bg-secondary-100/40 flex flex-col items-center justify-end"
            >
              <h2 className="lg:text-90px max-lg:text-60px text-secondary-100 my-auto lg:pt-3">
                {item.value}
              </h2>
              <h3 className="lg:text-36px max-lg:text-32px text-secondary-100">
                {item.category}
              </h3>
            </div>
          ))}
        </div>
        <CategoryGrid cards={textData.admissionDetails} hasContainer={false} />
      </div>
    </section>
  );
};

export { CourseExploration };
