import './App.css';
import MainBg from './components/MainBg/MainBg';
import AboutUs from './components/AboutUs/AboutUs';
import OurBest from './components/OurBest/OurBest';
import MainFooter from './components/MainFooter/MainFooter';
function App() {
  return (

    <div className="App">
      <MainBg />
      <AboutUs />
      <OurBest />
      <MainFooter />
    </div>
  );
}

export default App;
