import { Link } from "react-router-dom";
import { NavLink } from "./components";
import { textData } from "../../data/data";
import SvgIcons from "../svg-icons";

const SiteHeader = () => {
  return (
    <header className="relative custom-container">
      <div className="flex items-center justify-between gap-5 py-16px">
        <Link to={"/"}>
          <img src="/header-logo.svg" alt="logo" />
        </Link>
        <div className="flex items-center justify-end gap-7 lg:-mr-9px">
          <nav className="flex items-center justify-end gap-52px lg:pr-10px">
            {textData.navLinks.map((link) => (
              <NavLink
                key={link.text}
                to={link.to}
                className="flex items-center gap-10px"
              >
                <span className="min-w-4px size-4px rounded-full bg-dark-100"></span>
                <span className="text-dark-100 text-12px flex-1">
                  {link.text}
                </span>
              </NavLink>
            ))}
          </nav>
          <button className="size-36px rounded-full bg-primary-200 text-light-200 grid place-items-center">
            <SvgIcons type="search" />
          </button>
          <NavLink to="/" className="flex items-center gap-10px">
            <span className="text-dark-100 text-12px flex-1">sing in</span>
            <SvgIcons type="profile" />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export { SiteHeader };
