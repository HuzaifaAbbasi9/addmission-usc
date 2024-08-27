import { textData } from "../../../data/data";
import { CategoryGrid } from "./CategoryGrid";

const Partners = () => {
  return (
    <section className="py-5 custom-container relative">
      <div className="flex items-center gap-5">
        <h2 className="lg:text-64px max-lg:text-50px font-extrabold text-primary-200">
          Our <span className="font-light text-dark-100">Partners</span>
        </h2>
        <div
          className="h-44px w-470px rounded-full bg-primary-200 font-extrabold lg:text-32px max-lg:text-25px text-light-100 flex items-center justify-center text-center shadow-[0px_4px_4px_rgba(0,0,0,0.2)]"
          style={{ textShadow: "rgba(0, 0, 0, 0.5) 0px 4px 4px" }}
        >
          Apply for the Partnership
        </div>
      </div>
      <CategoryGrid cards={textData.partnersCards} headingFont={"lg:text-38px max-lg:text-30px"} hasContainer={false} textHeight="min-h-103px" />
    </section>
  );
};

export { Partners };
