import { textData } from "../../../data/data";

const Events = () => {
  return (
    <section className="py-5">
      <div className="custom-container">
        <h3 className="lg:text-64px max-lg:text-45px mb-2">
          <span className="font-extrabold text-primary-200">Events </span>
          and Open Days
        </h3>
        <div className="grid lg:grid-cols-3 mm-sm-lg:grid-cols-2 lg:gap-8 max-lg:gap-5">
          {textData.eventItems.map((item, index) => (
            <div key={index} className="flex flex-col items-start gap-2">
              <img src={item.imageSrc} alt="" className="aspect-square mb-1 object-cover" />
              <p className="lg:text-18px max-lg:text-16px text-dark-100">{item.description}</p>
              <button className="lg:text-18px max-lg:text-16px text-primary-200">{item.buttonText} &gt;</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Events };
