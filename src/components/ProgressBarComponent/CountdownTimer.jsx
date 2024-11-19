import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './useCountdown';

const ExpiredNotice = () => {
  return (
      <p className='text-red-400 text-right m-5 pr-20'>OPPS! TIME UP</p>   
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex text-center justify-end m-5 pr-5">

        {/* <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <p>:</p> */}
        
        <h1 className={minutes < 5 ? 'text-red-400 mr-5' : 'text-black-400 mr-5'}>TIME  </h1>
        <DateTimeDisplay value={hours} type={hours >= 1 ? 'Hours' : "Hour"} isDanger={false} />
        <p className={minutes < 5 ? 'text-red-400' : 'text-black-400'}>:</p>
        <DateTimeDisplay value={minutes} type={minutes > 1 ? 'Mins' : 'Min'} isDanger={minutes < 5} />
        <p className={minutes < 5 ? 'text-red-400' : 'text-black-400'}>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={minutes < 5} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
