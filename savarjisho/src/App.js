
import Notification from './components/notification/Notification';
import SiccessIcon from "./Image/Success.png";
import ErrorIcon from "./Image/Error.png";
import WarningIcon from "./Image/Warning.png";
import InfoIcon from "./Image/Info.png";
function App() {
  return (
    <div className="App">
      <Notification text="Success" image={SiccessIcon} class="n-green"/>
      <Notification text="Error" image={ErrorIcon} class="n-red"/>
      <Notification text="Warning" image={WarningIcon} class="n-yellow"/>
      <Notification text="Info" image={InfoIcon} class="n-blue"/>
     
    </div>

      
  );
}

export default App;
