export function SunDoodle({ className = 'w-14 h-14' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="40" cy="40" r="18" fill="#FFBE0B" />
      <path
        d="M40 8V16M40 64V72M8 40H16M64 40H72M17.4 17.4L23 23M57 57L62.6 62.6M62.6 17.4L57 23M23 57L17.4 62.6"
        stroke="#FFBE0B"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloudDoodle({ className = 'w-20 h-12' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 68"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M28 58H94C104.5 58 113 49.5 113 39C113 29.2 105.5 21.1 95.9 20.1C92.1 9.5 81.9 2 70 2C56.8 2 45.8 11.4 43.2 23.9C41.1 23.3 38.8 23 36.5 23C24.1 23 14 33.1 14 45.5C14 52.4 20.3 58 28 58Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PaperPlaneDoodle({ className = 'w-14 h-14' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 72 72"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M62 12L10 34L28 42L52 20L34 45L48 58L62 12Z"
        fill="#FFBE0B"
        stroke="#2A104C"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M28 42V57L36 47"
        stroke="#2A104C"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarSparkDoodle({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M24 4L28.6 17.4L42 22L28.6 26.6L24 40L19.4 26.6L6 22L19.4 17.4L24 4Z"
        fill="currentColor"
      />
    </svg>
  );
}
