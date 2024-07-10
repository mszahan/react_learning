import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="mb-5">
      <ul className="flex gap-6 justify-end">
        <li>
          <Link to="/" className="hover:bg-slate-200 p-1 rounded-md">
            layout
          </Link>
        </li>
        <li>
          <Link to="/container" className="hover:bg-slate-200 p-1 rounded-md">
            container
          </Link>
        </li>
        <li>
          <Link to="/cuc" className="hover:bg-slate-200 p-1 rounded-md">
            cuc
          </Link>
        </li>
        <li>
          <Link to="/hoc" className="hover:bg-slate-200 p-1 rounded-md">
            hoc
          </Link>
        </li>
        <li>
          <Link to="/chook" className="hover:bg-slate-200 p-1 rounded-md">
            cHook
          </Link>
        </li>
        <li>
          <Link to="/functional" className="hover:bg-slate-200 p-1 rounded-md">
            functional
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
