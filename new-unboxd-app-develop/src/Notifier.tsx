import { Toaster } from 'react-hot-toast';
import { Colors } from './constants';

const Notifier = () => {
  return (
    <Toaster
      toastOptions={{
        className: 'notifier',
        duration: 5000,
        style: {
          background: `${Colors.tintOrange}`,
          color: `${Colors.burntOrange}`,
        },
        success: {
          style: {
            background: `${Colors.green}`,
            color: `${Colors.white}`,
          },
        },
        error: {
          style: {
            background: `${Colors.error}`,
            color: `${Colors.white}`,
          },
        },
      }}
    />
  );
};

export default Notifier;
