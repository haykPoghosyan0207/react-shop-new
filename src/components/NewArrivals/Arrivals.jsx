import { ways } from "./data";
import WayToTach from "./WayToWatch";
import style  from "./Arrivals.module.css"
import ButtonArrivals from "./ButtonArrivals"

export default function Arrivals() {
  return (
    <>
    <ButtonArrivals />
      <div className={style.Arrivals}>
          {ways.map((way) => (
            <WayToTach key={way.title} {...way} />
          ))}
      </div>
    
    </>
  );
}
