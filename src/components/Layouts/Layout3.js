import ProjectManagementHeader from 'components/ProjectManagement/ProjectManagementHeader'
import ProjectManagementSidebar from 'components/ProjectManagement/ProjectManagementSidebar'
import { Outlet } from 'react-router-dom'
import '../dist/Layout3.css'


function FullProjectManagementPage() {
    return (
        <div className='fullProjectManagementPage'>
            <div className="headerWrapper">
                <ProjectManagementHeader />
            </div>
            <div className="headerNotIncluded">
                <div className="container-fluid">
                    <div className="wrapper ">
                        <div className="sidebarWrapper">
                            <ProjectManagementSidebar />
                        </div>
                        <div className="cover">
                            <Outlet />
                        </div>
                    </div>
                </div>
                <div className="toCover"></div>
            </div>
        </div>

    )
}

export default FullProjectManagementPage