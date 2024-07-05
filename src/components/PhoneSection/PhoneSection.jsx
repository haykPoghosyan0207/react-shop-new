import style from "./PhoneSection.module.css"
import PhoneSectionInfo from "./PhoneSectionInfo"
import PhoneSectionPhone from "./PhoneSectionPhone"
function PhoneSection (){
	return (
		<div className= {style.PhoneSection}>
			<PhoneSectionInfo />
			<PhoneSectionPhone />
		</div>
	)

}

export default PhoneSection