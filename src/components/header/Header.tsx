import { Link } from "react-router-dom";
import { textData } from "../../data/data";
import SvgIcons from "../svg-icons";
import { NavbarLink } from "./components";
import { Close, Menu } from "@mui/icons-material";
import { useState } from "react";

const SiteHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="relative custom-container">
      <div className="flex items-center justify-between gap-5 py-16px">
        <Link to={"/"}>
          <img src="/header-logo.svg" alt="logo" />
        </Link>
        <div className="flex items-center justify-end lg:gap-7 max-lg:gap-3 lg:-mr-9px">
          <nav className="lg:flex items-center justify-end gap-52px lg:pr-10px max-lg:hidden">
            {textData.navLinks.map((link) => (
              <NavbarLink
                key={link.text}
                to={link.to}
                className="flex items-center gap-10px"
              >
                <span className="min-w-4px size-4px rounded-full bg-dark-100"></span>
                <span className="text-dark-100 text-12px flex-1">
                  {link.text}
                </span>
              </NavbarLink>
            ))}
          </nav>
          <button className="size-36px rounded-full bg-primary-200 text-light-200 grid place-items-center">
            <SvgIcons type="search" />
          </button>
          <NavbarLink to="/" className="flex items-center gap-10px">
            <span className="text-dark-100 text-12px flex-1 max-lg:hidden">
              sing in
            </span>
            <SvgIcons type="profile" />
          </NavbarLink>
          <button onClick={()=> setShowMenu(true)} className="text-dark-100 lg:hidden"><Menu /></button>
        </div>
      </div>
      <div className={`fixed inset-0 bg-dark-100 flex flex-col h-screen z-40 transition-transform duration-500 ${showMenu ? 'visible translate-y-0' : '-translate-y-full invisible'}`}>
        <button onClick={()=> setShowMenu(false)} className="ml-auto text-white text-38px leading-none m-5">
          <Close />
        </button>
        <nav className="flex flex-col gap-10 items-center justify-center mt-8 flex-1 overflow-y-auto py-5">
          {textData.navLinks.map((link) => (
            <NavbarLink
              key={link.text}
              to={link.to}
              className="flex items-center gap-10px transition-opacity duration-300 hover:opacity-80"
            >
              <span className="min-w-4px size-4px rounded-full bg-white"></span>
              <span className="text-white text-20px flex-1">
                {link.text}
              </span>
            </NavbarLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export { SiteHeader };
