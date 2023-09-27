import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  // Stores time value
  const [time, setTime] = useState(0);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    let intervalId;

    if (stop) {
      intervalId = setInterval(() => setTime((prevTime) => prevTime + 1), 10);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [stop]);

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  const startAndStop = () => {
    setStop(!stop);
  };

  const reset = () => {
    setTime(0);
    setStop(false);
  };

  return (
    
    <div className='Watch'>
       <div className='text'>
        Stopwatch
       </div>
      <div className='time'>
       <div claasName='box'>
      {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:
      {seconds.toString().padStart(2, '0')}.{milliseconds.toString().padStart(2, '0')}
      
      </div>
     
      <button onClick={startAndStop}>{stop ? 'Stop' : 'Start'}</button>
      <button onClick={reset}>Reset</button>
      </div>
    </div>
    
  );
};

export default Stopwatch;