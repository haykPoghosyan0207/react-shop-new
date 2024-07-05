import style from "./PhoneSectionInfo.module.css"
import googleIcon from "/icons/google-play.png"
import appStor from "/icons/app-store.png"
function PhoneSectionInfo(){
	return (
		<div className={style.PhoneSectionInfo}>
			<h2>DOWNLOAD APP & GET THE VOUCHER</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, inventore!</p>
			<div className="phoneSectionButtons">
				<img src={googleIcon} alt="" />
				<img src={appStor} alt="" />
			</div>

		</div>
	)
}
export default PhoneSectionInfo