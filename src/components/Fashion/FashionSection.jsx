import { FashionFilter } from "./FashionFilter";
import { fashionList } from "./fashionList";
import style from "./FashionSection.module.css"

 function FashionSection () {
	return (
		<div className={style.FashionSection}>
		
		{fashionList.map((item) =>( 
			<FashionFilter key= {item.title} {...item} />
		))}
		
		</div>
	)
}

export default FashionSection