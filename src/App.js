import "./App.css";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "components/Layouts/Layout";
import FullHomePage from "components/Pages/FullHomePage";
import Layout1 from "components/Layouts/Layout1";
import Layout3 from "components/Layouts/Layout3";
import CreateWallet1 from "components/LoanApplication/CreateWallet1";
import CreateWallet2 from "components/LoanApplication/CreateWallet2";
import BasicDetails, { allBasicDetails } from "components/LoanApplication/BasicDetails";
import FullBasicDocx from "components/LoanApplication/FullBasicDocx";
import ApplicationSubmitted from "components/LoanApplication/ApplicationSubmitted";
import ApplicationApproved from "components/LoanApplication/ApplicationApproved";
import ApplicationPreview from "components/LoanApplication/ApplicationPreview";
import FilledBAsicDetailsWithBtn from "components/LoanApplication/FilledBAsicDetailsWithBtn";
import LayoutMain from "components/Layouts/LayoutMain";
import Overview from "components/ProjectManagement/Overview";
import OngoingReport from "components/ProjectManagement/OngoingReport";
import WorkOrders from "components/ProjectManagement/WorkOrders";
import TokenManagement from "components/ProjectManagement/TokenManagement";
import FinancialTransaction from "components/ProjectManagement/FinancialTransaction";
import TokenTransfer from "components/ProjectManagement/TokenTransfer";
import OverviewProjectDetail from "components/ProjectManagement/OverviewProjectDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutMain />}>
      <Route path="/" element={<Layout />}>
        <Route index element={<FullHomePage />} />
        <Route path="loanApplication" element={<Layout1 />} >
          <Route path="basicDetails" element={<BasicDetails />} action={allBasicDetails} />
          <Route path="createWallet1" element={<CreateWallet1 />} />
          <Route path="createWallet2" element={<CreateWallet2 />} />
          <Route path="fullBasicDocx" element={<FullBasicDocx />} />
          <Route path="filledBasicDetails" element={<FilledBAsicDetailsWithBtn />} />
        </Route>
        <Route path="applicationSubmitted" element={<ApplicationSubmitted />} />
        <Route path="applicationApproved" element={<ApplicationApproved />} />
        <Route path="applicationPreview" element={<ApplicationPreview />} />
      </Route>
      <Route path="projectManagement" element={<Layout3 />}>
        <Route path="overview" element={<Overview />} />
        <Route path="overviewProjectDetails" element={<OverviewProjectDetail />} />
        <Route path="ongoingReport" element={<OngoingReport />} />
        <Route path="financialTransaction" element={<FinancialTransaction />} />
        <Route path="workOrders" element={<WorkOrders />} />
        <Route path="tokenManagement" element={<TokenManagement />} />
        <Route path="tokenTransfer" element={<TokenTransfer />} />

      </Route>
    </Route>

  )
)






function App() {
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
