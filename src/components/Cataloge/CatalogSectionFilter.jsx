import style from "./CatalogSectionFilter.module.css"

export default function CatalogSectionFilter({link,title}) {
	return (
				<li className= {style.catalogList}>
					<img src= {link}  alt=""  />
					<p>{title}</p>
				</li>
	);
}