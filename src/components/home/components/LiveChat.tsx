const LiveChat = () => {
  return (
    <section className="custom-container pt-4 pb-14">
      <div className="bg-primary-100 lg:rounded-20px max-lg:rounded-15px">
        <div className="flex items-center justify-between lg:px-30px max-lg:px-20px">
          <div className="relative">
            <h3 className="lg:text-40px max-lg:text-33px font-extrabold text-white" style={{ textShadow: "rgba(0, 0, 0, 0.5) 0px 4px 4px" }}>
              Live Chat <br /> Whatsapp
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
