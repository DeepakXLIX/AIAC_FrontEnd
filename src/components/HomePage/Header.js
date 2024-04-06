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
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
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
                                    <NavLink to="/projectManagement" className={({ isActive }) => `nav-link
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