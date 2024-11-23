import React from 'react';
import CountdownTimer from "./CountdownTimer"

export default function App() {
  const FORTY_FIVE_MINS_IN_MS = 45 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterFortyFiveMinutes = NOW_IN_MS + FORTY_FIVE_MINS_IN_MS;

  return (
    <div className='fixed bg-white w-full top-16 text-xs sm:text-base dark:bg-[#0B192C] dark:text-white flex flex-col sm:flex-row gap-3 items-center sm:justify-around p-5 '>
      <CountdownTimer targetDate={dateTimeAfterFortyFiveMinutes} />
    </div>
  );
}
