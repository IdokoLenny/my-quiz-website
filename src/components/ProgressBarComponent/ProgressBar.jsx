import React from 'react';
import CountdownTimer from "./CountdownTimer"

export default function App() {
  const FORTY_FIVE_MINS_IN_MS = 45 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterFortyFiveMinutes = NOW_IN_MS + FORTY_FIVE_MINS_IN_MS;

  return (
    <div className='fixed bg-white w-full text-xs sm:text-base dark:bg-[#0B192C] dark:text-white'>
      <CountdownTimer targetDate={dateTimeAfterFortyFiveMinutes} />
    </div>
  );
}
