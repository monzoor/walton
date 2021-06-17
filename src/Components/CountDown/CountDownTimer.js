import React, { useState, useEffect, useRef } from 'react';

const STATUS = {
  STARTED: 'Started',
  STOPPED: 'Stopped',
};

const INITIAL_COUNT = 15 * 60 * 60;

const CountdownTimer = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT);
  const [status, setStatus] = useState(STATUS.STOPPED);

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

  useEffect(() => {
    setStatus(STATUS.STARTED);
  }, []);
  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.STOPPED);
      }
    },
    status === STATUS.STARTED ? 1000 : null,
    // passing null stops the interval
  );
  return (
    <div className="row">
      <div className="col mx-auto">
        <div className="row text-center justify-content-center align-items-center">
          <div className="border border-primary col p-3">
            {twoDigits(hoursToDisplay)}
          </div>
          <div className="col-auto">:</div>
          <div className="border border-primary col p-3">
            {twoDigits(minutesToDisplay)}
          </div>
          <div className="col-auto">:</div>
          <div className="border border-primary col p-3">
            {twoDigits(secondsToDisplay)}
          </div>
        </div>
      </div>
    </div>
  );
};

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const twoDigits = (num) => String(num).padStart(2, '0');

export default CountdownTimer;
