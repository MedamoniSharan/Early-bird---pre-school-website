import { useId } from 'react';

interface LogoProps {
  className?: string;
}

export function YouTubeLogo({ className = 'w-5 h-5' }: LogoProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
        fill="#FF0000"
      />
      <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FFFFFF" />
    </svg>
  );
}

export function FacebookLogo({ className = 'w-5 h-5' }: LogoProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        d="M15.12 13.5l.53-3.45h-3.31V7.81c0-.94.46-1.86 1.94-1.86h1.5V3.01s-1.36-.23-2.66-.23c-2.72 0-4.49 1.65-4.49 4.63v2.64H5.6V13.5h3.03V23.85c.61.1 1.23.15 1.87.15s1.26-.05 1.87-.15V13.5h2.75z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function InstagramLogo({ className = 'w-5 h-5' }: LogoProps) {
  const gradientId = useId();
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <defs>
        <linearGradient id={gradientId} x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F58529" />
          <stop offset="35%" stopColor="#DD2A7B" />
          <stop offset="70%" stopColor="#8134AF" />
          <stop offset="100%" stopColor="#515BD4" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="24" height="24" rx="6" fill={`url(#${gradientId})`} />
      <rect
        x="4.2"
        y="4.2"
        width="15.6"
        height="15.6"
        rx="4.4"
        stroke="#FFFFFF"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="3.6" stroke="#FFFFFF" strokeWidth="1.8" />
      <circle cx="17" cy="7" r="1.15" fill="#FFFFFF" />
    </svg>
  );
}

export function WhatsAppLogo({ className = 'w-5 h-5' }: LogoProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="12" r="12" fill="#25D366" />
      <path
        d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"
        fill="#FFFFFF"
      />
    </svg>
  );
}
