import { NavLink } from "react-router-dom";

export default function SignInButton(props) {
  return (
    <NavLink to="/signIn">
      <button
        className="bg-secondary_text py-2 px-6 rounded-md"
        onClick={props.closeAccordion}
      >
        Sign In
      </button>
    </NavLink>
  );
}
