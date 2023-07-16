type Props = {
  icon: JSX.Element;
  children: JSX.Element;
};
export const GradientIcon = ({ icon, children }: Props) => {
  return (
    <div className="relative w-6">
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 transition-colors duration-300 ease-in-out"
        >
          <linearGradient
            id="gradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="24"
            y2="24"
          >
            <stop offset="0%" stopColor="#FD749B" />
            <stop offset="100%" stopColor="#281AC8" />
          </linearGradient>
          <mask id="icon-mask">{icon}</mask>
          <rect
            fill="url(#gradient)"
            mask="url(#icon-mask)"
            width="24"
            height="24"
          />
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
