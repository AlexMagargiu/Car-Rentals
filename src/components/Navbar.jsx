import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import NavItem from "./NavItem";

export default function Navbar() {
  function NavListItems() {
    return (
      <>
        <NavItem link="/home" title="Home" />
        <NavItem link="/about" title="About Us" />
        <NavItem link="/models" title="Vehicle Models" />
        <NavItem link="/testimonials" title="Testimonials" />
        <NavItem link="/team" title="Team" />
        <NavItem link="/contact" title="Contact" />
      </>
    );
  }

  return (
    <nav>
      <NavLink to="/home">
        <img src={logo} className="w-28 h-28"></img>
      </NavLink>
      <ul>
        <NavListItems />
      </ul>
      <div>
        <button>Sign In</button>
        <button>Register</button>
      </div>
    </nav>
  );
}
