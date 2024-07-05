import { data } from "./youngSectionData"
import WayToTach from "../NewArrivals/WayToWatch"
import style from "./YoungsSection.module.css"
 function YoungSection(){
		return (
			<div className={style.YoungsSection}>
				{data.map((way) => (
          		 <WayToTach key={way.title} {...way} />
          ))}
			</div>
		)
 }
 export default YoungSection