import style from './Header.module.css';
import headerImage from '/images/header-img.jpg';
import HeaderButton from './HeaderButtons';
export default function Header({onChange}) {
  return (
    <>
      <div>
        <div className={style.header}>
          <div className={style.headerLogo}>
            <p> <img src='/icons/logo.svg' alt='' /><HeaderButton onClick={() => onChange('main')} ><h1>FASHION</h1></HeaderButton></p>
          </div>
          <div className={style.headerNav}>
            <ul>
              <li href='#'><HeaderButton onClick={() => onChange('catalogue')} >CATALOGUE</HeaderButton></li>
              <li href='#'><HeaderButton onClick={() => onChange('fashion') }>FASHION</HeaderButton></li>
              <li href='#'><HeaderButton onClick={() => onChange('favorite')}>FAVORITE</HeaderButton> </li>
              <li href='#'> <HeaderButton onClick={() => onChange('lifestyle')}>LIFESTYLE</HeaderButton></li>
              <li href='#'>
                <button className={style.headerNavButton}>Sign in</button>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.headerMain}>
          <div className={style.headerMainLeft}>
            <div className={style.headerMainInfo}>
              <div className={style.headerMainLeftTitle}>
                <p>LET'S</p>
                <p>EXPLORE</p>
                <p className={style.headerMainUnique}>UNIQUE</p>
                <p>CLOTHES</p>
              </div>
              <div className={style.headerMainText}>
                <p>
                  Lorem ipsum, dolor sit abet consectetur adipisicing
                </p>
              </div>
            <div className={style.headerMainFooter}>
              <button className={style.headerMainButton}>Shop Now</button>
            </div>
            </div>
          </div>
          <div className={style.headerMainRight}>
            <img src={headerImage} alt='' />
          </div>
        </div>
      </div>
    </>
  );
}
