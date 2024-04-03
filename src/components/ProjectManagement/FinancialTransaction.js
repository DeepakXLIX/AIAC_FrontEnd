import Button from 'components/LoanApplication/Button'
import '../dist/FinancialTransaction.css'

function FinancialTransaction() {
    return (
        <div className='financialTransaction'>
            <div className="container">
                <div className="wrapper">
                    <Button text={"On Chain"} />
                    <Button text={"Off Chain"} bgPar={"rgba(255, 255, 255, 0.14)"} textColor={"white"} />
                    <Button text={"Payrolls"} bgPar={"rgba(255, 255, 255, 0.14)"} textColor={"white"} />
                </div>
                <div className="row">
                    <div className="common-cls col-12">
                        <Button text={"Select Transaction Type"} bgPar={"rgba(255, 255, 255, 0.2)"} textColor={"white"} />
                        <Button text={"Select From Company"} bgPar={"rgba(255, 255, 255, 0.2)"} textColor={"white"} />
                        <Button text={"Select To Company"} bgPar={"rgba(255, 255, 255, 0.2)"} textColor={"white"} />
                        <Button text={"Filter"} />
                        <Button text={"Clear"} />
                    </div>
                    <div className="common-cls col-12">
                        <p>Transaction Type</p>
                        <p>Hash</p>
                        <p>Sender</p>
                        <select name="" id="">
                            <option value="">Sort1</option>
                            <option value="">Sort2</option>
                            <option value="">Sort3</option>
                            <option value="">Sort4</option>
                            <option value="">Sort5</option>
                        </select>
                        <p>Receiver</p>
                        <select name="" id="">
                            <option value="">Sort1</option>
                            <option value="">Sort2</option>
                            <option value="">Sort3</option>
                            <option value="">Sort4</option>
                            <option value="">Sort5</option>
                        </select>
                        <p>Amount (AIAC)</p>
                        <select name="" id="">
                            <option value="">Sort1</option>
                            <option value="">Sort2</option>
                            <option value="">Sort3</option>
                            <option value="">Sort4</option>
                            <option value="">Sort5</option>
                        </select>
                        <p>Date</p>
                        <select name="" id="">
                            <option value="">Sort</option>
                            <option value="">Sort</option>
                            <option value="">Sort</option>
                            <option value="">Sort</option>
                            <option value="">Sort</option>
                        </select>
                    </div>
                    <div className="common-cls col-12">
                      <h4>  No transaction yet</h4>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FinancialTransaction