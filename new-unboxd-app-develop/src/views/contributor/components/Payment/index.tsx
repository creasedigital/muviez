import { useEffect, useRef } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import * as services from '../../services';
import toast from 'react-hot-toast';

type PropsTypes = {
  reference: string;
  amount: number;
  email: string;
  event: string;
  success: () => void;
  close: () => void;
};

const PayWithFlutterwave = ({
  reference,
  amount,
  email,
  event,
  success,
  close,
}: PropsTypes) => {
  const successReference = useRef('');
  const config = {
    public_key: process.env.REACT_APP_FLUTTERWAVE_CLIENT || '',
    tx_ref: reference,
    amount,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email,
      name: '',
      phonenumber: '',
    },
    customizations: {
      title: 'Unboxd',
      description: `Payment for ${event}`,
      logo: '',
    },
  };

  const handlePayment = useFlutterwave(config);

  useEffect(() => {
    if (
      reference &&
      (!successReference.current || successReference.current !== reference)
    ) {
      handlePayment({
        callback: async (response) => {
          const { status, transaction_id, tx_ref } = response;
          if (status === 'successful') {
            const [err, result] = await services.verifyPayment({
              trxId: String(transaction_id),
              initialRef: tx_ref,
            });

            closePaymentModal();

            if (err) {
              return toast.error('Error!');
            }

            if (result.status === 'complete') {
              successReference.current = tx_ref;
              success();
            }
          }
        },
        onClose: () => close(),
      });
    }
  }, [handlePayment, reference, success, close]);

  return null;
};

export default PayWithFlutterwave;
