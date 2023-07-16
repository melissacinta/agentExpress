import { ToastOptions } from './types';
import toast from 'react-hot-toast';
export const baseUrl = 'http://frontend.test.mwanga.ng/api/v1';

export const imageUrl = (byteDataString: string): string => {
  const byteData = new Uint8Array(
    atob(byteDataString)
      .split('')
      .map((char) => char.charCodeAt(0))
  );

  // Create a blob from the byte data
  const blob = new Blob([byteData], { type: 'image/jpeg' });

  // Create a data URL from the blob
  return URL.createObjectURL(blob);
};

export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export const formatNumber = (num: number | bigint): string => {
  num = Number(num);
  const formatter = new Intl.NumberFormat();
  return formatter.format(num);
};

export const notify = (message: string, options?: ToastOptions): string => {
  options = options || {};
  options.type = options.type || 'custom';
  options.position = 'top-right';

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return toast[options.type](message, options) as string;
};
