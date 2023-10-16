import { NavLink } from "react-router-dom";

export default function NavItem(props) {
  return (
    <li onClick={props.closeAccordion}>
      <NavLink to={props.link}>
        <span>{props.title}</span>
      </NavLink>
    </li>
  );
}
