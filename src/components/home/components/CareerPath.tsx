const CareerPath = () => {
  return (
    <section className="py-20px custom-container">
      <div className="bg-[url('/career-path-bg.jpeg')] bg-cover bg-center lg:rounded-50px max-lg:rounded-35px flex min-h-410px p-20px">
        <div className="self-end ">
          <h3 className="font-extrabold text-white lg:text-8xl max-lg:text-5xl" style={{ textShadow: "rgba(0, 0, 0, 0.5) 0px 4px 4px" }}>
            Career Path
          </h3>
          <h4 className="lg:text-36px max-lg:text-28px font-extrabold text-white" style={{ textShadow: "rgba(0, 0, 0, 0.5) 0px 2px 2px" }}>
            Unlock Your Potential: Skills + Training = Career Success.
          </h4>
        </div>
      </div>
    </section>
  );
};

export {CareerPath};
