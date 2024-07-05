import style from "./WayToWatch.module.css"

export default function WayToTach({link,title}) {
	return (
				<li className= {style.arrivalsLists}>
					<img src= {link}  alt=""  />
					<p>{title}</p>
				</li>
	);
}