import React, { useCallback, useEffect, useRef, useState } from 'react';
import { PlainButton } from '../../../../components/Button/styles';
import { Resend } from './styles';

const INITIAL_TIME = 30;

interface ComponentProps {
  sendOtp: () => void;
}

function ResendOtp({ sendOtp }: ComponentProps) {
  const [seconds, setSeconds] = useState(INITIAL_TIME);
  const timer = useRef<any>(null);

  const tick = useCallback(() => {
    setSeconds((prev) => prev - 1);
  }, []);

  const restartTimer = () => {
    setSeconds(INITIAL_TIME);

    timer.current = setInterval(tick, 1000);
  };

  const resendOtp = () => {
    sendOtp();
    restartTimer();
  };

  useEffect(() => {
    timer.current = setInterval(tick, 1000);
  }, [tick]);

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(timer.current);
    }
  }, [seconds]);

  return (
    <Resend>
      {seconds > 0 ? (
        `Resend in ${seconds} secs`
      ) : (
        <PlainButton onClick={resendOtp}>Resend OTP</PlainButton>
      )}
    </Resend>
  );
}

export default ResendOtp;
