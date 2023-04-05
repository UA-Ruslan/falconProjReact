import './App.css';
import FirstSection from "./components/firstSection/FirstSection";
import SecondSection from "./components/secondSection/SecondSection";
import ThirdSection from "./components/thirdSection/ThirdSection";
import ForthSection from "./components/forthSection/ForthSection";
import FifthSection from "./components/fifthSection/FifthSection";
import SixSection from "./components/sixSection/SixSection";


function App() {
    return (
            <div className="app">
                <FirstSection/>
                <SecondSection/>
                <ThirdSection/>
                <ForthSection/>
                <FifthSection/>
                <SixSection/>
            </div>

    );
}

export default App;
