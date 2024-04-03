import Button from 'components/LoanApplication/Button';
import '../dist/TokenTransfer.css'
import copyImg from '../../assest/AIACHomePageIMG/copy.png'

function TokenTransfer() {
    return (
        <div className='tokenTransfer'>
            <div className="container">
                <div className="wrapper">
                    <h2>Token Management</h2>
                    <Button text={"Discount Wallet"} />
                </div>
                <p>Connected Wallet Address: 0x0bb3b509D8009Db01Bc6117BF65cAAc5aa7b78eB
                    <button><img src={copyImg} alt="" /></button>
                </p>
                <p>Available Balance : 00
                    <button><img src={copyImg} alt="" /></button>
                </p>

                <h3>Select Company for Token Transfer</h3>
                <div className="row">
                    <div className=" common-cls col-12 col-md-6">
                        <p>Select Transfer Amount</p>
                        <select name="" id=".">
                            <option value="Amount1">Amount1</option>
                            <option value="Amount2" selected>Amount2</option>
                            <option value="Amount3">Amount3</option>
                            <option value="Amount4">Amount4</option>
                            <option value="Amount5">Amount5</option>
                        </select>
                    </div>
                    <div className=" common-cls col-12 col-md-6">
                        <p>Enter Amount</p>
                        <input type="number" min={1}   placeholder='3532435' />
                    </div>
                </div>
                <Button text={"Transfer"}/>
            </div>

        </div>
    )
}

export default TokenTransfer;