import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './useCountdown';
import {Navigate} from "react-router-dom"

const ShowCounter = ({hours, minutes, seconds }) => {
  return (
    <div className="flex-1 flex sm:justify-center">
        <h1 className={minutes < 5 ? 'text-red-400 mr-5' : 'text-black-400 mr-5'}>TIME  </h1>
        <DateTimeDisplay value={hours} type={hours >= 1 ? 'Hours' : "Hour"} isDanger={minutes < 5} />
        <p className={minutes < 5 ? 'text-red-400' : 'text-black-400'}>:</p>
        <DateTimeDisplay value={minutes} type={minutes > 1 ? 'Mins' : 'Min'} isDanger={minutes < 5} />
        <p className={minutes < 5 ? 'text-red-400' : 'text-black-400'}>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={minutes < 5} />
    </div>
  );
};


const CountdownTimer = ({ targetDate }) => {
  const [ hours, minutes, seconds] = useCountdown(targetDate);

  if (hours + minutes + seconds <= 0) {
    return <Navigate to="/result" />
  } else {
    return (
      <ShowCounter
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
