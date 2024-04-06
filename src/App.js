import "./App.css";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "components/Layouts/Layout";
import FullHomePage from "components/Pages/FullHomePage";
import Layout1 from "components/Layouts/Layout1";
import CreateWallet1 from "components/LoanApplication/CreateWallet1";
import CreateWallet2 from "components/LoanApplication/CreateWallet2";
import BasicDetails from "components/LoanApplication/BasicDetails";
import FullBasicDocx from "components/LoanApplication/FullBasicDocx";
import ApplicationSubmitted from "components/LoanApplication/ApplicationSubmitted";
import ApplicationApproved from "components/LoanApplication/ApplicationApproved";
import ApplicationPreview from "components/LoanApplication/ApplicationPreview";
import FilledBAsicDetailsWithBtn from "components/LoanApplication/FilledBAsicDetailsWithBtn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<FullHomePage />} />
      <Route path="loanApplication" element={<Layout1 />} >
        <Route path="basicDetails" element={<BasicDetails />} />
        <Route path="createWallet1" element={<CreateWallet1 />} />
        <Route path="createWallet2" element={<CreateWallet2 />} />
        <Route path="fullBasicDocx" element={<FullBasicDocx />} />
        <Route path="filledBasicDetails" element={<FilledBAsicDetailsWithBtn />} />
        <Route path="applicationSubmitted" element={<ApplicationSubmitted />} />
        <Route path="applicationApproved" element={<ApplicationApproved />} />
        <Route path="applicationPreview" element={<ApplicationPreview />} />
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
