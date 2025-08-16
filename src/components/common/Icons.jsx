import React from "react";

// This is a base component to avoid repeating props on every icon.
const Icon = ({ children, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    {children}
  </svg>
);

// --- Navigation Icons ---
export const MenuIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </Icon>
);

export const CloseIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </Icon>
);

// --- Challenge Section Icons ---
export const LibraryIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
    />
  </Icon>
);

export const MapIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 6.75V15m6-6v8.25m.5-10.5H18a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0118 21.75H6.75A2.25 2.25 0 014.5 19.5V6.75A2.25 2.25 0 016.75 4.5h.75m9 0V2.25m-9 0V2.25m9 0h-9m9 0H18m-9-3.75h.008v.008H9.75V2.25z"
    />
  </Icon>
);

export const HourglassIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.092 1.21-.138 2.43-.138 3.662a4.006 4.006 0 003.7 3.7 48.678 48.678 0 007.324 0 4.006 4.006 0 003.7-3.7zM19.5 12a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25m15 0a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25m15 0H4.5"
    />
  </Icon>
);

export const BatteryHalfIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m0 0a2.25 2.25 0 01-2.25-2.25v-1.5a2.25 2.25 0 01-2.25-2.25H6.75m12 4.5h-3.375a2.25 2.25 0 01-2.25-2.25V9.75a2.25 2.25 0 012.25-2.25H15M12 4.5v15m-3.375-10.5H6.75a2.25 2.25 0 00-2.25 2.25V15a2.25 2.25 0 002.25 2.25h.004"
    />
  </Icon>
);

export const CopyIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375v-3.375c0-.621-.504-1.125-1.125-1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5"
    />
  </Icon>
);
export const RoadmapIcon = (props) => (
  <Icon {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14,2 14,8 20,8" />
  </Icon>
);

export const StudyIcon = (props) => (
  <Icon {...props}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </Icon>
);

export const TestIcon = (props) => (
  <Icon {...props}>
    <path d="M9 12l2 2 4-4" />
    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.35 0 4.44.9 6.03 2.36" />
  </Icon>
);

export const EvaluateIcon = (props) => (
  <Icon {...props}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </Icon>
);

export const FixIcon = (props) => (
  <Icon {...props}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </Icon>
);

// --- Features Section Icons ---
export const PencilIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
    />
  </Icon>
);

export const BoltIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
    />
  </Icon>
);

export const AcademicCapIcon = (props) => (
  <Icon {...props}>
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M1 12v7a2 2 0 002 2h18a2 2 0 002-2v-7"
    />
  </Icon>
);

export const TargetIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </Icon>
);

// --- Benefits Section Icons ---
export const LightBulbIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18v-5.25m0 5.25a7.5 7.5 0 0010.5-6.362a7.5 7.5 0 00-10.5 0v6.362zM12 18a7.5 7.5 0 01-10.5-6.362 7.5 7.5 0 0110.5 0v6.362zM15 11.25a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </Icon>
);

export const ChartPieIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
    />
  </Icon>
);

export const RocketLaunchIcon = (props) => (
  <Icon {...props}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6.95 10a22 22 0 0 1-3.95 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </Icon>
);

export const ClipboardIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </Icon>
);
export const ArrowRightIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
    />
  </Icon>
);

export const ShieldCheckIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286z"
    />
  </Icon>
);

export const UsersIcon = (props) => (
  <Icon {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Icon>
);

// --- Core Values Icons (About Page) ---
export const PlanetIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="8" />
    <ellipse cx="12" cy="12" rx="11" ry="3" />
  </Icon>
);

// Heart Icon - Classic heart shape
export const HeartIcon = (props) => (
  <Icon {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </Icon>
);

// Globe Icon - World with latitude/longitude lines
export const GlobeIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </Icon>
);

// Ribbon Icon - Award ribbon
export const RibbonIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </Icon>
);

// Arrow Path Icon - Refresh/reload arrow
export const ArrowPathIcon = (props) => (
  <Icon {...props}>
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M8 16H3v5" />
  </Icon>
);
// --- Contact Page & Footer Icons ---
export const MailIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </Icon>
);

// Add these new icon components to your Icons.jsx file

export const PhoneIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    />
  </Icon>
);



export const LocationIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </Icon>
);

// Twitter/X Icon
export const TwitterIcon = (props) => (
  <Icon {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </Icon>
);

// Instagram Icon
export const InstagramIcon = (props) => (
  <Icon {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </Icon>
);

// LinkedIn Icon
export const LinkedInIcon = (props) => (
  <Icon {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </Icon>
);

// Alternative simplified versions if you prefer cleaner paths:

// Simple Twitter/X Icon (X logo)
export const XIcon = (props) => (
  <Icon {...props}>
    <path d="M18 6 6 18" />
    <path d="M6 6l12 12" />
  </Icon>
);

// YouTube Icon (bonus)
export const YouTubeIcon = (props) => (
  <Icon {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" />
  </Icon>
);

// Facebook Icon (bonus)
export const FacebookIcon = (props) => (
  <Icon {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </Icon>
);
// Add these to your icons.jsx file

export const TrendingUpIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 18 9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
    />
  </Icon>
);

export const ZapIcon = (props) => (
  <Icon {...props}>
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
  </Icon>
);

export const CheckCircleIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </Icon>
);

// Add these to your Icons.jsx file

export const PlusIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </Icon>
);

export const MinusIcon = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
  </Icon>
);

export const SparklesIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
    />
  </Icon>
);

export const CheckIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 12.75 6 6 9-13.5"
    />
  </Icon>
);
// Add these to your Icons.jsx file

export const LockClosedIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
    />
  </Icon>
);

export const UserMinusIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </Icon>
);

export const BookOpenIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
    />
  </Icon>
);

export const ArrowsPointingOutIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 20.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
    />
  </Icon>
);
export const WhatsAppIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.006 3 12c0 1.742.52 3.35 1.402 4.75L3 21l4.25-1.248A8.963 8.963 0 0012 20.25z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 8.25c.75 2.25 3 4.5 5.25 5.25"
    />
  </Icon>
);

export const CalendarIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18"
    />
  </Icon>
);

export const DownloadIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
    />
  </Icon>
);

// --- Hero Section Icons ---
export const StreakIcon = (props) => (
  <Icon {...props}>
    <path d="M12 2s2 3 2 6-2 4-2 6 2 3 2 6c0 0-2-1-4-3s-3-5 0-8 2-7 2-7z" fill="none" stroke="currentColor" />
  </Icon>
);

export const McqIcon = (props) => (
  <Icon {...props}>
    <rect x="3" y="4" width="18" height="16" rx="3" fill="none" stroke="currentColor" />
    <path d="M7 9h6M7 13h10" stroke="currentColor" />
    <circle cx="6" cy="9" r="1" fill="currentColor" />
    <circle cx="6" cy="13" r="1" fill="currentColor" />
  </Icon>
);

export const DocIcon = (props) => (
  <Icon {...props}>
    <path d="M7 3h7l4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" fill="none" stroke="currentColor" />
    <path d="M14 3v5h5" stroke="currentColor" />
    <path d="M8 11h8M8 15h6" stroke="currentColor" />
  </Icon>
);

export const MicIcon = (props) => (
  <Icon {...props}>
    <rect x="9" y="3" width="6" height="10" rx="3" fill="none" stroke="currentColor" />
    <path d="M5 11a7 7 0 0 0 14 0M12 18v3" stroke="currentColor" />
  </Icon>
);

export const CardsIcon = (props) => (
  <Icon {...props}>
    <rect x="4" y="6" width="10" height="12" rx="2" fill="none" stroke="currentColor" />
    <rect x="10" y="4" width="10" height="12" rx="2" fill="none" stroke="currentColor" />
  </Icon>
);

export const DebateIcon = (props) => (
  <Icon {...props}>
    <path d="M4 18v-6h7v6l-3.5-2zM13 16v-8h7v8l-3.5-2z" fill="none" stroke="currentColor" />
  </Icon>
);

export const SparkIcon = (props) => (
  <Icon {...props}>
    <path d="M12 2v5M12 17v5M2 12h5M17 12h5M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3" stroke="currentColor" />
  </Icon>
);

export const ShieldIcon = (props) => (
  <Icon {...props}>
    <path d="M12 3l8 3v6c0 5-3.6 8-8 9-4.4-1-8-4-8-9V6z" fill="none" stroke="currentColor" />
  </Icon>
);

export const ClockIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" />
    <path d="M12 7v6l4 2" stroke="currentColor" />
  </Icon>
);
