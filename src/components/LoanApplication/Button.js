import { NavLink } from 'react-router-dom'
import '../dist/Button.css'
function Button({ text, textColor, bgPar, padding }) {
  return (
    <div className="buttonClass ">
        <button type="button" className="btn rounded-pill" style={{
          background: bgPar || "linear-gradient(149.94deg, #F7DF2E -20.28%, #BF7C24 91.35%)",
          color: textColor || "black",
          padding: padding || "auto"
        }}>{text}</button>
    </div>

  )
}


export default Button