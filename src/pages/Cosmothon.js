import '../App.css';
import {NavBar} from "../components/Cosmothon/NavBar";
import {Banner} from "../components/Cosmothon/Banner";
import {Participants} from "../components/Cosmothon/Participants";
import {Goals} from "../components/Cosmothon/Goals";
import {Requirements} from '../components/Cosmothon/Requirements';
import {Program} from '../components/Cosmothon/Program';
import "bootstrap/dist/css/bootstrap.min.css";

const Cosmothon = () => {
  return (
    <div className="Cosmothon">
      <NavBar/>
      <Banner/>
      <Participants/>
      <Goals/>
      <Requirements/>
      <Program/>
    </div>
  );
}

export default Cosmothon;
