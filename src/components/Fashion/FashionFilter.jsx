import style from "./FiltedStyle.module.css"
 
 export function FashionFilter ({link,title}){
	return (
				<li className={style.FashionFilter}>
					<img src= {link}  alt=""  />
					<p>{title}</p>
				</li>

	)
 }