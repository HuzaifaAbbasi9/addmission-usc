import { Link } from "react-router-dom"
interface NavLinkProps {
    children: React.ReactNode;
    to: string;
    className: string;
  }

const NavbarLink = ({ children, to, className }: NavLinkProps) => {
  return (
    <Link to={to} className={className}>{children}</Link>
  )
}

export { NavbarLink }