interface WaveDividerProps {
  fillColor: string;
  bgColor?: string;
  variant?: 'clouds' | 'hills' | 'wave';
  flip?: boolean;
}

export function WaveDivider({
  fillColor,
  bgColor = 'transparent',
  variant = 'clouds',
  flip = false,
}: WaveDividerProps) {
  return (
    <div
      aria-hidden="true"
      style={{ backgroundColor: bgColor }}
      className={`w-full overflow-hidden leading-none select-none ${
        flip ? 'rotate-180' : ''
      }`}
    >
      {variant === 'clouds' && (
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-10 sm:h-14 block"
        >
          <path
            d="M0,48 C60,12 140,12 200,44 C260,8 360,8 420,46 C490,10 590,10 660,44 C730,6 840,6 910,46 C980,12 1080,12 1150,44 C1220,10 1340,10 1440,48 L1440,80 L0,80 Z"
            fill={fillColor}
          />
        </svg>
      )}

      {variant === 'hills' && (
        <svg
          viewBox="0 0 1440 72"
          preserveAspectRatio="none"
          className="w-full h-9 sm:h-12 block"
        >
          <path
            d="M0,56 Q360,0 720,40 T1440,28 L1440,72 L0,72 Z"
            fill={fillColor}
          />
        </svg>
      )}

      {variant === 'wave' && (
        <svg
          viewBox="0 0 1440 72"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 block"
        >
          <path
            d="M0,32 C240,76 480,0 720,36 C960,72 1200,12 1440,36 L1440,72 L0,72 Z"
            fill={fillColor}
          />
        </svg>
      )}
    </div>
  );
}
