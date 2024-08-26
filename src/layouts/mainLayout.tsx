import { SiteFooter, SiteHeader } from "../components";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </>
    );
  };
  
  export { MainLayout };
  