import { textData } from "../../data/data";

const SiteFooter = () => {
  return (
    <footer className="lg:bg-[url('/footer-bg.png')] max-lg:bg-primary-100 lg:bg-no-repeat lg:pb-5 lg:pt-80px max-lg:py-10 custom-container lg:bg-contain lg:bg-top">
      <div className="flex lg:justify-between max-lg:flex-col">
        <div className="relative flex flex-col items-center gap-6">
          <button className="border-white border-solid border-[3px] rounded-full px-12px py-5px h-58px w-196px lg:text-32px max-lg:text-25px text-white flex items-center justify-center">
            Contact us
          </button>
          <div className="flex lg:gap-8 max-lg:gap-5">
            {textData.socialMediaLinks.map((link, index) => (
              <a href={link.href} key={index} className="">
                <img
                  src={link.src}
                  alt={link.alt}
                  className="lg:size-48px max-lg:size-25px"
                />
              </a>
            ))}
          </div>
          <div className="lg:mt-12 lg:ml-10">
            <img
              src="/footer-logo.png"
              alt="Footer Logo"
              className="w-[125px]"
            />
          </div>
        </div>
        <div className="flex lg:gap-16 max-lg:gap-4 max-lg:items-center max-lg:text-center lg:w-[43%] lg:justify-between lg:pr-[9%] max-lg:mt-8 max-lg:flex-col">
          <ul className="flex flex-col gap-[5px]">
            {textData.primaryLinks.map((link, index) => (
              <li key={index} className="mb-2px">
                <a
                  href={link.href}
                  className="text-white lg:text-xl max-lg:text-lg font-light"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-[5px]">
            {textData.secondaryLinks.map((link, index) => (
              <li key={index} className="mb-2px">
                <a
                  href={link.href}
                  className="text-white lg:text-xl max-lg:text-lg font-light"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export { SiteFooter };
