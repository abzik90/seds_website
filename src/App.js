import logo from './logo.svg';
import './App.css';
import {NavBar} from "./components/NavBar";
import {Banner} from "./components/Banner";
import {Participants} from "./components/Participants";
import {Requirements} from './components/Requirements';
import {Program} from './components/Program';
import {Footer} from './components/Footer';
// import Countdown from "./components/Countdown";
import "bootstrap/dist/css/bootstrap.min.css";
import {Goals} from "./components/Goals";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Participants/>
      <Goals/>
      <Requirements/>
      <Program/>
      <Footer/>

      

    </div>
  );
}

export default App;
