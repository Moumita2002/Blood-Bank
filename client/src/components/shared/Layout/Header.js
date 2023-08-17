import React from 'react'
import { MdOutlineBloodtype } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { toast } from 'react-toastify';


const Header = () => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const location = useLocation();

    // logout handler
    const handleLogout = () => {
        localStorage.clear();
        toast.success('Logged out successfully!')

        navigate("/login");
    };
    return (
        <div>
            <nav className='navbar'>
                <div className='container-fluid'>
                    <div className='navbar-brand h1'>Blood Bank <MdOutlineBloodtype color='red' /></div>
                    <ul className='navbar-nav flex-row mt-4'>
                        <li className='nav-item mx-3'>
                            <p className='nav-link'><FaUserCircle />  {user?.name || user?.hospitalName || user?.organisationName} &nbsp;
                                <span className="badge bg-secondary">{user?.role}</span>
                            </p>
                        </li>
                        {location.pathname === "/" ||
                            location.pathname === "/donor" ||
                            location.pathname === "/hospital" ? (
                            <li className="nav-item mx-3">
                                <Link to="/analytics" className="nav-link">
                                    Analytics
                                </Link>
                            </li>
                        ) : (
                            <li className="nav-item mx-3">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                        )}
                        <li className='nav-item mx-3'>
                            <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header