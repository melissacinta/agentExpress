import { DefaultToastOptions, ToastType } from 'react-hot-toast';

export interface ToastOptions extends DefaultToastOptions {
  type?: ToastType;
}
