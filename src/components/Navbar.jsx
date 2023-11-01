import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import NavItem from "./Navbar-Components/NavItem";
import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import SignInButton from "./Navbar-Components/SignInButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function toggleAccordion() {
    setOpen(!open);
  }

  function closeAccordion() {
    setOpen(false);
  }

  function NavListItems() {
    return (
      <>
        <NavItem link="/home" title="Home" closeAccordion={closeAccordion} />
        <NavItem
          link="/about"
          title="About Us"
          closeAccordion={closeAccordion}
        />
        <NavItem
          link="/models"
          title="Vehicle Models"
          closeAccordion={closeAccordion}
        />
        <NavItem
          link="/testimonials"
          title="Testimonials"
          closeAccordion={closeAccordion}
        />
        <NavItem link="/team" title="Team" closeAccordion={closeAccordion} />
        <NavItem
          link="/contact"
          title="Contact"
          closeAccordion={closeAccordion}
        />
      </>
    );
  }

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between py-2 px-6 font-bold z-50 max-w-screen-xl mx-auto">
        <NavLink to="/home">
          <img src={logo} className="w-20 h-20"></img>
        </NavLink>
        <ul className="hidden lg:flex gap-6">
          <NavListItems />
        </ul>
        <div className="hidden lg:block">
          <SignInButton closeAccordion={closeAccordion} />
        </div>
        <div className="lg:hidden">
          <RiMenu2Line
            onClick={toggleAccordion}
            className="w-8 h-8"
          ></RiMenu2Line>
        </div>
      </nav>
      {open && (
        <div className="absolute right-0 top-0 flex flex-col gap-4 pt-24 pl-6 list-none text-xl z-50 bg-accordion text-white w-9/12 h-screen ">
          <FaXmark
            className="absolute top-7 w-8 h-8"
            onClick={closeAccordion}
          ></FaXmark>
          <SignInButton closeAccordion={closeAccordion} />
          <NavListItems />
        </div>
      )}
    </>
  );
}
