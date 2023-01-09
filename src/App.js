import './App.css';
import {NavBar} from "./components/NavBar";
import {RoutesFile} from './RoutesFile';
import {Footer} from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <NavBar/>
        <RoutesFile/>
      <Footer/>
    </div>
  );
}

export default App;
