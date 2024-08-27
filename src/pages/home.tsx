import { AdmissionsSupport, AdmissionSteps, CareerPath, CategoryGrid, CourseExploration, Events, FeatureGrid, HeroHeader, LiveChat, Partners } from "../components/home";
import { textData } from "../data/data";
import { MainLayout } from "../layouts";

const Home = () => {
  return (
    <MainLayout>
       <HeroHeader />
       <CourseExploration />
       <AdmissionsSupport />
      <FeatureGrid cards={textData.featureCards} />
      <CategoryGrid cards={textData.categoryGrid} headingFont={"lg:text-40px max-lg:text-33px"} sectionPadding="max-lg:py-8" textHeight="lg:min-h-115px max-lg:min-h-60px" />
      <FeatureGrid cards={textData.accommodationOptions} hasBg={false} sectionPadding="lg:pt-20 max-lg:py-8" />
      <Partners />
      <AdmissionSteps />
      <Events />
      <CareerPath />
      <LiveChat />
    </MainLayout>
  );
};

export { Home };
