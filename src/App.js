import './App.css';
import FirstSection from "./components/firstSection/FirstSection";
import SecondSection from "./components/secondSection/SecondSection";
import ThirdSection from "./components/thirdSection/ThirdSection";
import ForthSection from "./components/forthSection/ForthSection";
import FifthSection from "./components/fifthSection/FifthSection";
import SixSection from "./components/sixSection/SixSection";
import SevenSection from "./components/sevenSection/SevenSection";
import EightSection from "./components/eightSection/EightSection";
import Footer from "./components/footer/Futer";

function App() {
const arrID = ["technology","about-us","impact","portfolio","blog"]
    return (
            <div className="app">
                <FirstSection arrID={arrID}/>
                <SecondSection id={arrID[0]}/>
                <ThirdSection/>
                <ForthSection id={arrID[3]}/>
                <FifthSection/>
                <SixSection/>
                <SevenSection id={arrID[4]}/>
                <EightSection id={arrID[2]}/>
                <Footer arrID={arrID}/>
            </div>

    );
}

export default App;
