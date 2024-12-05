import logo from "./logo.svg";
import "./App.css";
import NavBarComponents from "./components/NavBarComponents";
import GreenBannerComponents from "./components/GreenBannerComponents";
import RecommendsComponent from "./components/RecommendsComponents";
import BaristaRecommendsComponents from "./components/BaristaRecommendsComponents";
import LearnMoreComponent from "./components/LearnMoreComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <>
      <NavBarComponents />
      <GreenBannerComponents />
      <RecommendsComponent />
      <BaristaRecommendsComponents />
      <LearnMoreComponent />
      <FooterComponent />
    </>
  );
}

export default App;
