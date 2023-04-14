import React from 'react';
import "./countdown.css";
import { useCountdown } from './Timer';
import DateTimeDisplay from './DateTimeDisplay';

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};
const ShowCounter = ({seconds}) => {
  return (
    <div className="show-counter">
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
    </div>
  );
};

