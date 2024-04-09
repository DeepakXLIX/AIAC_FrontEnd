import '../dist/Header.css';
import logo from "../../assest/AIACHomePageIMG/HomeImg/aiaclogo (1) 2.png"
import iconImg from "../../assest/AIACHomePageIMG/HomeImg/myFrame1.png"
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div id='header'>
            <div className='container-xxl'>
                <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
                    <div className="container-fluid">
                        <img className='img-fluid' src={logo} alt='logo' />
                        <button className="navbar-toggler" id='mytoggleBtn' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><path fill="white" d="M3 17h18a1 1 0 0 1 .117 1.993L21 19H3a1 1 0 0 1-.117-1.993zh18zm0-6l18-.002a1 1 0 0 1 .117 1.993l-.117.007L3 13a1 1 0 0 1-.117-1.993zl18-.002zm0-6h18a1 1 0 0 1 .117 1.993L21 7H3a1 1 0 0 1-.117-1.993zh18z" /></svg>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to="/" className={({ isActive }) => `nav-link
${isActive ? "active" : "not-active"} `} aria-current="page" href="#">Home
                                    </NavLink>

                                </li>
                                <li className="nav-item">
                                    <NavLink to="/loanApplication/basicDetails" className={({ isActive }) => `nav-link
${(isActive) ? "active" : "not-active"} `} aria-current="page" href="#">Loan Application
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="projectManagement/overview" className={({ isActive }) => `nav-link
${(isActive) ? "active" : "not-active"} `} aria-current="page" href="#">Project management
                                    </NavLink>
                                </li>

                            </ul>
                            <div className='imgWrapper'>
                                <img className="img-fluid" src={iconImg}></img>
                            </div>
                        </div>
                    </div>
                </nav >
            </div >
        </div >
    )
}

export default Header;