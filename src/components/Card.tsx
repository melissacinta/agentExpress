import { ReactNode } from 'react';
type Props = {
  children: ReactNode;
};

const Card = ({ children }: Props) => {
  return (
    <div className="bg-white bg-contain dark:bg-primary-dark shadow border-transparent dark:shadow-none border-2 dark:border-border-light rounded-[10px] p-3.5">
      {children}
    </div>
  );
};

export default Card;
