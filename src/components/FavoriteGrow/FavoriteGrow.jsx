import { FavoriteGrowData } from "./FavoriteGrowData";
import style from "./FavoriteGrow.module.css";
function FavoriteGrow() {
  return (
    <div className={style.FavoriteGrow}>
      {FavoriteGrowData.map((item) => (
        <FavoriteGrowFilter key={item.title} {...item} />
      ))}
    </div>
  );
}
function FavoriteGrowFilter({ link, title }) {
  return (
    <li>
      <img src={link} alt="" style={{ width:300, height:450 }} />
      <h2>{title}</h2>
    </li>
  );
}
export default FavoriteGrow;
