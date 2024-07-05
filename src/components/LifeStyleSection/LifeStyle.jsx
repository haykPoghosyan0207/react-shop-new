import { LifeStyleData } from "./LifeStyleData";
import style from "./LifeStyle.module.css"
 function LifeStyle (){
	return (
		<div className={style.LifeStyle}>
			{LifeStyleData.map((item) =>(
				<LifeStyleFilter key= {item.title} {...item} />
			))}
		</div>
	)
}

export default LifeStyle



function LifeStyleFilter ({link,title}){
	return (
		<li>
			<img src={link} alt="" />
			<p>{title}</p>
		</li>
	)
}