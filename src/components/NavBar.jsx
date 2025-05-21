import { FaSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm px-3 py-2">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4" to="/">Notey</Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
          aria-controls="navbarContent"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div 
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`} 
          id="navbarContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/add-note"
                className="btn btn-outline-primary d-flex align-items-center gap-2 my-2 my-lg-0 w-100 justify-content-center"
                style={{ whiteSpace: "nowrap" }}
              >
                <FaSquarePlus /> Add Notes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;