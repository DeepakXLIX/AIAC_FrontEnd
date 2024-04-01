import BasicDocuments from "./BasicDocuments";
import StakeHolderDetails from "./StakeHolderDetails";

function UploadDocuments() {
  return (
    <div className="uploadDocuments">
      <BasicDocuments/>
      <StakeHolderDetails />
    </div>
  )
}

export default UploadDocuments;