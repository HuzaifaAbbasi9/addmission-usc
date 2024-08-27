import { MainLayout } from "../layouts";

const Home = () => {
  return (
    <MainLayout>
      <section className="min-h-[120vh] py-55px bg-[url('hero-header-bg.png')] bg-cover bg-no-repeat relative">
        <button className=" text-base bg-[#6d978b] px-10px py-10px rounded-full absolute right-20px top-25px">
          <span className="text-white font-bold">Create Your Account</span>
        </button>
        <h1 className="text-white lg:text-61px max-lg:text-40px lg:pr-20px text-center font-light">
          Connecting People to Education
        </h1>
      </section>
    </MainLayout>
  );
};

export { Home };
