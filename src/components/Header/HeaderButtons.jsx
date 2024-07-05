import style from "./HeaderButtons.module.css"
function HeaderButton ({children,onClick}){
	return (
		<>
			<button className={style.HeaderButton} onClick={onClick}>{children}</button>
		</>
	)
}
export default HeaderButton