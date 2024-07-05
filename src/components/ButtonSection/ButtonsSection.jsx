import { Children } from "react"
import style from "./ButtonSection.module.css"

function ButtonsSection ({children,onClick}){
	return (
			<button className={style.ButtonsSection} onClick={onClick}>{children} </button>
	)
}

export default ButtonsSection 