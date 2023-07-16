type Props = {
  targetAmount: number;
  actualAmount: number;
  pendingAmount: number;
};

const ProgressBar = ({ targetAmount, actualAmount, pendingAmount }: Props) => {
  // Calculate progress percentage
  const progressPercentage = (actualAmount / targetAmount) * 100;

  return (
    <div className="w-full overflow-hidden">
      <p>actualAmount / targetAmount</p>
      <p>
        {actualAmount}/{targetAmount}
      </p>
      <div className="w-full bg-red-300 rounded-lg overflow-hidden h-4 mt-4">
        <div
          className="h-4 bg-green-500 rounded-lg"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <p>pendingAmount / targetAmount</p>
      <p>
        {pendingAmount}/{targetAmount}
      </p>
      <div className="w-full bg-red-300 rounded-lg overflow-hidden h-4 mt-4">
        <div
          className="h-4 bg-yellow-500 rounded-lg"
          style={{ width: `${(pendingAmount / targetAmount) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
