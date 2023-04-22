import React, { useState } from 'react';
import IdleTimerPkg from 'react-idle-timer';

interface IdleTimerProps {
  timeout?: number;
  getTimeRemaining: (T: any) => void;
}

const IdleTimer: React.FC<IdleTimerProps> = ({
  children,
  timeout,
  getTimeRemaining,
}) => {
  const [idleTimer, setIdleTimer] = useState<IdleTimerPkg>();
  return (
    <>
      <IdleTimerPkg
        ref={(ref: any) => setIdleTimer(ref)}
        timeout={timeout || 600000}
        onActive={() => {}}
        onAction={() => {}}
        onIdle={() => {
          getTimeRemaining(idleTimer?.getRemainingTime());
        }}
      >
        {children}
      </IdleTimerPkg>
    </>
  );
};

export default IdleTimer;