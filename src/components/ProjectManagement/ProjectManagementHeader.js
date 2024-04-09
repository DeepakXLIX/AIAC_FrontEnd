import React from 'react'
import '../dist/ProjectManagementHeader.css'
import LogoImg from '../../assest/AIACHomePageIMG/Project Management/aiaclogo.png'
import { NavLink } from 'react-router-dom'
function ProjectManagementHeader() {
    return (
        <div className='projectManagementHeader'>
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <div className="container-fluid  container-xl ">
                    <a className="navbar-brand" href="#">
                        <img src={LogoImg} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse myclass" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mx-auto mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='../../' className="nav-link " aria-current="page" >
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink  to='../../loanApplication/basicDetails'  className="nav-link">
                                    Loan Application
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='#' className="nav-link">
                                    Project Management
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default ProjectManagementHeader