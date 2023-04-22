import { useEffect, useRef } from 'react';
// @ts-ignore
import PaystackPop from '@paystack/inline-js';
import toast from 'react-hot-toast';
import * as services from '../../services';

type PropsTypes = {
  reference: string;
  amount: number;
  email: string;
  event: string;
  success: () => void;
};

const PayWithPaystack = ({
  reference,
  amount,
  email,
  event,
  success,
}: PropsTypes) => {
  const successReference = useRef('');

  useEffect(() => {
    const config = {
      key: process.env.REACT_APP_PAYSTACK_LIVE_PUBLIC_KEY || '',
      reference,
      amount,
      email,
      label: `Payment for ${event}`,
    };

    new PaystackPop().newTransaction({
      ...config,
      onSuccess: async (transaction: any) => {
        if (
          reference &&
          (!successReference.current || successReference.current !== reference)
        ) {
          const [err, result] = await services.verifyPayment({
            trxId: String(reference),
            initialRef: transaction.reference,
          });

          if (err) {
            return toast.error('Error!');
          }

          if (result.status === 'complete') {
            successReference.current = reference;
            success();
          }
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default PayWithPaystack;
