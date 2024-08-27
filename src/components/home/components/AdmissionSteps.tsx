const AdmissionSteps = () => {
  return (
    <section className="custom-container">
      <div className="bg-primary-100 lg:pb-6 lg:pt-3 max-lg:py-8 max-lg:text-center max-lg:space-y-4 px-5 relative rounded-md">
        <div className="lg:text-48px max-lg:text-35px font-extrabold text-secondary-100 leading-none mb-1" style={{textShadow: "rgba(0, 0, 0, 0.5) 0px 4px 4px" }}>
          Easy Steps for Admission
        </div>
        <div className="text-white lg:text-24px max-lg:text-20px font-extrabold" style={{textShadow: "rgba(0, 0, 0, 0.5) 0px 2px 2px" }}>
          1. Choose Course and Institute 2. Submit Application 3. After
          Confirmation Pay Online
          <button className="lg:text-32px max-lg:text-26px font-extrabold text-primary-500 inline-block ml-6" style={{textShadow: "rgba(0, 0, 0, 0.5) 0px 2px 2px" }}>
            “Apply Now”
          </button>
        </div>
      </div>
    </section>
  );
};

export {AdmissionSteps};
