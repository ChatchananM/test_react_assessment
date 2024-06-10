import { Outlet, Link } from "react-router-dom";

const Navigations = () => {
  return (
    <div>
      <nav className="bg-fuchsia-200 p-4">
        <ul className="flex justify-end space-x-8">
          <li>
            <Link to="/" className="text-slate-950 hover:text-red-700 font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/owner" className="text-slate-950 hover:text-red-700 font-semibold">
              Owner
            </Link>
          </li>
          {/* <li>
            <Link to="/page02" className="text-white hover:text-gray-400">
              Two
            </Link>
          </li>
          <li>
            <Link to="/page03" className="text-white hover:text-gray-400">
              Three
            </Link>
          </li> */}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigations;