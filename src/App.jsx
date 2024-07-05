import { useState } from "react";
import Header from "./components/Header/Header";
import Icons from "./components/Icons/Icons";
import Arrivals from "./components/NewArrivals/Arrivals";
import SellSection from "./components/SellSection/SellSection";
import YoungSection from "./components/YoungsSection/YoungsSection";
import PhoneSection from "./components/PhoneSection/PhoneSection";
import CommunitySection from "./components/CommunitySection/CommunitySection";
import TabsSection from "./components/TabSection/TabsSection";
import CatalogueSection from "./components/Cataloge/CatalogueSection";
import FashionSeaction from "./components/Fashion/FashionSection";
import FavoriteGrow from "./components/FavoriteGrow/FavoriteGrow";
import LifeStyle from "./components/LifeStyleSection/LifeStyle";

function App() {
  const [tab, setTab] = useState("main");
  const [content, setContent] = useState('main');
  return (
    <>
      <Header onChange={(active) => setContent(active)} />
      {/* <CatalogueSection /> */}
      {content === "catalogue" && (
        <>
          <h2>CATALOGUE</h2>
          <CatalogueSection />
        </>
      )}

      {content === "fashion" && (
        <>
          <h2>FASHION</h2>
          <FashionSeaction />
        </>
      )}

      {content === "favorite" && (
        <>
          <h2>FAVORITE</h2>
          <FavoriteGrow />
        </>
      )}

      {content === "lifestyle" && (
        <>
          <h2>LIFE STYLE</h2>
          <LifeStyle />
        </>
      )}

      {content === "main" && (
        <>
          <main>
            <Icons />
            <Arrivals />
            <TabsSection onChange={(current) => setTab(current)} />
            {tab === "main" && (
              <>
                <SellSection />
                <YoungSection />
              </>
            )}

            {tab === "feedback" && (
              <>
                <PhoneSection />
                <CommunitySection />
              </>
            )}
          </main>
        </>
      )}
    </>
  );
}

export default App;
