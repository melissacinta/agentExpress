import { formatNumber } from '../utils';

type Props = {
  targetAmount: number;
  actualAmount: number;
  pendingAmount: number;
};

const ProgressBar = ({ targetAmount, actualAmount, pendingAmount }: Props) => {
  // Calculate progress percentage
  const progressPercentage = (actualAmount / targetAmount) * 100;
  const pendingPercentage = (pendingAmount / targetAmount) * 100;

  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-col gap-0">
        <p className="m-0 text-sm">
          You have raised about {progressPercentage.toPrecision(2)}% of your
          target, you rock!
        </p>
        <p className="m-0 text-2xl font-barlow-condensed flex justify-between font-bold">
          <span className="cursor-pointer" title="Amount raised">
            $ {formatNumber(actualAmount)}
          </span>
          <span className="cursor-pointer" title="Target amount">
            $ {formatNumber(targetAmount)}
          </span>
        </p>
        <div className="w-full bg-primary-dark/20 dark:bg-white/50 rounded-lg overflow-hidden h-2">
          <div
            className="h-2 bg-gradient-linear rounded-lg"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="flex flex-col gap-0 mt-4">
        <p className="m-0 text-sm">
          You have about {pendingPercentage.toPrecision(2)}% of your target
          amount left to raise. You can do this!
        </p>
        <p className="m-0 text-2xl font-barlow-condensed flex justify-between font-bold">
          <span className="cursor-pointer" title="Amount to be raised">
            $ {formatNumber(pendingAmount)}
          </span>
          <span className="cursor-pointer" title="Target amount">
            $ {formatNumber(targetAmount)}
          </span>
        </p>
        <div className="w-full bg-primary-dark/20 dark:bg-white/50 rounded-lg overflow-hidden h-2">
          <div
            className="h-2 bg-gradient-linear rounded-lg"
            style={{ width: `${100 - pendingPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
