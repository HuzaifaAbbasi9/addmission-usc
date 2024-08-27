import { AdmissionsSupport, CategoryGrid, CourseExploration, FeatureGrid, HeroHeader } from "../components/home";
import { textData } from "../data/data";
import { MainLayout } from "../layouts";

const Home = () => {
  return (
    <MainLayout>
      <HeroHeader />
      <CourseExploration />
      <AdmissionsSupport />
      <FeatureGrid cards={textData.featureCards} />
      <CategoryGrid cards={textData.categoryGrid} headingFont={"lg:text-40px max-lg:text-33px"} />
    </MainLayout>
  );
};

export { Home };
