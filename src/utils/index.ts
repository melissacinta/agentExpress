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
