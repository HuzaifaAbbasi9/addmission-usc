import { CourseExploration, HeroHeader } from "../components/home";
import { MainLayout } from "../layouts";

const Home = () => {
  return (
    <MainLayout>
      <HeroHeader />
      <CourseExploration />
    </MainLayout>
  );
};

export { Home };
