import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/registration">Registration</NavLink>
      <NavLink to="/SendInvoice">Send Invoice</NavLink>
      <NavLink to="/RenderInvoice">Render E-Invoice</NavLink>
      <NavLink to="/CreateInvoice">Create E-Invoice</NavLink>
      <NavLink to="/StoreInvoice">Store E-Invoice</NavLink>
    </nav>
  );
};
