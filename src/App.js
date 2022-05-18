import {useState} from "react";
import './App.css';

function App() {

  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [minuteFormat, setMinuteFormat] = useState("00");
  const [secondFormat, setSecondFormat] = useState("00");


  const startTimer = ()=>{
    
    if(seconds > 60) {

      let actualSeconds = seconds - 60;
      let actualMinutes = Number(minutes) + ((seconds - actualSeconds)/60);
      setMinutes(actualMinutes);
      setSeconds(actualSeconds);
      setMinuteFormat(timeFormatter(actualMinutes));
      setSecondFormat(timeFormatter(actualSeconds));

    } else {

      setSeconds(seconds);
      setMinutes(minutes);
      setMinuteFormat(timeFormatter(minutes));
      setSecondFormat(timeFormatter(seconds));

    }

  }

  const timeFormatter = (time_number) => {
    return (time_number<10) ? `0${time_number}` : time_number;
  }

  const resetTimer = () =>{
    setMinutes(0);
    setSeconds(0);
    setMinuteFormat("00");
    setSecondFormat("00");
  }


  return (
    <div className="App">

      <h1>Clock Timer</h1>
        

        <div className="input_fields">

          <div>
            <input value={minutes} onChange={e => setMinutes(e.target.value)} type="number" placeholder="Minutes"/>
            <label>Minutes</label>
          </div>
          
          <div>
            <input value={seconds} onChange={e => setSeconds(e.target.value)} type="number" placeholder="Seconds"/>
            <label>Seconds</label>
          </div>

        </div>

        <div className="buttons">
          <button onClick={startTimer}>Start</button>
          <button>Pause/Resume</button>
          <button onClick={resetTimer}>Reset</button>
        </div>

        <div className="clock">

          <h1>{minuteFormat}:{secondFormat}</h1>

        </div>


    </div>
  );
}

export default App;
