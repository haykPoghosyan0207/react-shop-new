import ButtonsSection from "../ButtonSection/ButtonsSection";
import style from "./TabsSection.module.css";
export default function TabsSection({ onChange }) {
  return (
    <section className={style.TabsSection}>
      <ButtonsSection onClick={() => onChange("main")}>Assortment</ButtonsSection>
      <ButtonsSection onClick={() => onChange("feedback")}>
	  Contact us
      </ButtonsSection>
    </section>
  );
}
