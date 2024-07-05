import  { catalogData } from "./catalogData"
 import CatalogSectionFilter from "./CatalogSectionFilter"
// import img from "/catalogImages/catalogImg16.jpg"
import style from "./CatalogueSection.module.css"
function CatalogueSection (){
	return (
		<div className={style.CatalogSection}>
			{catalogData.map((item) => (
            <CatalogSectionFilter key={item.title} {...item} />
          ))}
		
		</div>
	)
}
export default CatalogueSection