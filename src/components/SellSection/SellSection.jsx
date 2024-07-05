import image from "../../.././public/images/promo-img.jpg"
import style from "./SellSection.module.css"
import SellSectionInfo from './SellSectionInfo'
function SellSection () {
	return (
		<div className={style.SellSection}>
			<img src={image}  className ={style.SellSectionImg} alt="" />
			<SellSectionInfo />
			
		</div>
	)
}
export default SellSection