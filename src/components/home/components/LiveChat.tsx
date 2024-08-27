const LiveChat = () => {
  return (
    <section className="custom-container pt-4 pb-14">
      <div className="bg-primary-100 lg:rounded-20px max-lg:rounded-15px max-lg:pt-4">
        <div className="flex items-center lg:justify-between lg:px-30px max-lg:px-20px max-lg:flex-col max-lg:justify-center">
          <div className="relative">
            <h3 className="lg:text-40px max-lg:text-28px font-extrabold text-white" style={{ textShadow: "rgba(0, 0, 0, 0.5) 0px 4px 4px" }}>
              Live Chat <br className="max-lg:hidden" /> Whatsapp
            </h3>
          </div>
          <button className="relative h-fit">
            <img src="/wtsp-icon.png" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export {LiveChat};
