import { Link } from "react-router-dom";


const Navbar = () => {
  const navPage = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/allToys">All Toys</Link></li>
    <li><Link to="/myToys">My Toys</Link></li>
    <li><Link to="addAToys">Add A Toy</Link></li>
  </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navPage}
          </ul>
        </div>
        <h2 className="text-xl font-bold capitalize hover:uppercase">Fas<span className="text-amber-500">cina</span>ting C<span className="text-amber-500">ar</span>s</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navPage}
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn btn-outline btn-warning" to="/blog">Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;