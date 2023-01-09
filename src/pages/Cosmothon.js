import '../App.css';
import {Banner} from "../components/Banner";
import {Participants} from "../components/Participants";
import {Goals} from "../components/Goals";
import {Requirements} from '../components/Requirements';
import {Program} from '../components/Program';
import "bootstrap/dist/css/bootstrap.min.css";

const Cosmothon = () => {
  return (
    <div className="App">
      <Banner/>
      <Participants/>
      <Goals/>
      <Requirements/>
      <Program/>
    </div>
  );
}

export default Cosmothon;
