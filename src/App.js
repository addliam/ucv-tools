import './App.css';
import { useState } from 'react';
// import {PopUpComponent} from './components/PopUpComponent'
import {PopUp2Component} from './components/PopUp2Component'
function App() {
  const [showPopUp,setShowPopUp] = useState(false);
  const clickedButton = () => {
    // show current pop up container
    setShowPopUp(true);
    // set timer to delete/hidde popup
    setTimeout(() => {
      setShowPopUp(false);
    }, 3000);
    console.log('Button pressed');
  }
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h2>PopUp Notifications in React</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint odio at enim ipsam eveniet eos et, debitis assumenda quisquam pariatur nisi voluptatem quibusdam quod aliquam quia nemo quam reprehenderit. Quisquam.</p>
      <h2>This is another paragraph</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint odio at enim ipsam eveniet eos et, debitis assumenda quisquam pariatur nisi voluptatem quibusdam quod aliquam quia nemo quam reprehenderit. Quisquam.</p>
      <br></br>
      <button onClick={clickedButton} id='pop-up-button' type='button'>POP UP</button>
      {/* <PopUpComponent trigger={showPopUp} /> */}
      <div id='pop-up2-container' style={{display:showPopUp?'initial':'none'}}>
        <PopUp2Component/>
      </div>
    </div>
  );
}

export default App;
