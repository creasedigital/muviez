import toaster from 'toasted-notes';
import { MessageOptionalOptions } from 'toasted-notes/lib/ToastManager';
import { MessageProp } from 'toasted-notes/lib/Message';

const Notify = {
  bottom: (message: MessageProp, options?: MessageOptionalOptions) => {
    toaster.notify(message, {
      position: 'bottom',
      duration: +process.env.REACT_APP_DEFAULT_TOAST_DURATION! || 5000,
      ...options,
    });
  },

  top: (message: MessageProp, options?: MessageOptionalOptions) => {
    toaster.notify(message, {
      position: 'top',
      duration: +process.env.REACT_APP_DEFAULT_TOAST_DURATION! || 5000,
      ...options,
    });
  },
};

export default Notify;
