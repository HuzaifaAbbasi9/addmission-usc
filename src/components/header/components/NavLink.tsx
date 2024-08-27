import { Link } from "react-router-dom"
interface NavLinkProps {
    children: React.ReactNode;
    to: string;
    className: string;
  }

const NavLink = ({ children, to, className }: NavLinkProps) => {
  return (
    <Link to={to} className={className}>{children}</Link>
  )
}

export { NavLink }