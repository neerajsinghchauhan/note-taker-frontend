import { FaSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm px-3 py-2">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4" to="/">Notey</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          <Link to="/add-note" className="btn btn-outline-primary d-flex align-items-center gap-2 mt-2 mt-lg-0">
            <FaSquarePlus /> Add Notes
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
