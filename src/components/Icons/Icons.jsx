import style from "./Icons.module.css"
import hm from "../.././img/brands/HM.png"
import obey from "../.././img/brands/Obey.png"
import shopify from "../.././img/brands/Shopify.png"
import lacoste from "../.././img/brands/Lacoste.png"
import levis from "../.././img/brands/Levis.png"
import amazon from "../.././img/brands/Amazon.png"

export default function Icons (){
	return (
		<div className={style.icons}>
			<ul>
				<li href="#"><img src = {hm} alt="" /></li>
				<li href="#"><img src = {obey} alt="" /></li>
				<li href="#"><img src = {shopify} alt="" /></li>
				<li href="#"><img src = {lacoste} alt="" /></li>
				<li href="#"><img src = {levis} alt="" /></li>
				<li href="#"><img src = {amazon} alt="" /></li>
			</ul>
		</div>
	)
}