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

export const ChartBarIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
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

export const ClipboardDocumentListIcon = (props) => (
  <Icon {...props}>
    <path d="M9 2h6a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
    <path d="M4 6h2m-2 4h2m-2 4h2m6-8h4m-4 4h4m-4 4h4" />
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
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.25c-2.59 1.9-3.72 5.03-3.49 8.06l-6.08 6.08a6 6 0 006.73 9.34l6.08-6.08z"
    />
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
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.53-2.475c0-1.11.31-2.14.852-3.071L12 11.459M12 11.459L6.152 5.61a4.126 4.126 0 00-6.012 1.48L.152 8.783A4.125 4.125 0 002.5 12.872l3.652.73M12 11.459L6.152 5.61m6.012 5.849L18.148 5.61M12 11.459L6.152 17.308m6.012-5.849L18.148 17.308"
    />
  </Icon>
);

export const ArrowPathIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.023 9.348h4.992v-.001a10.5 10.5 0 01-1.523 7.218 10.5 10.5 0 01-7.218 1.523c-2.361 0-4.6-.713-6.412-2.133-1.813-1.42-3.153-3.322-3.888-5.503M3.007 12.073c.636-2.181 2.076-4.083 3.888-5.503 1.812-1.42 4.051-2.133 6.412-2.133a10.5 10.5 0 017.218 1.523 10.5 10.5 0 011.523 7.218v-.001h-4.992"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 21v-6.75l-4.5 4.5 4.5 4.5v-6.75z"
    />
  </Icon>
);

// --- Core Values Icons (About Page) ---
export const PlanetIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664l.969 1.939a.75.75 0 11-1.06 1.06l-1.94-1.94a1.107 1.107 0 00-1.664-.57l-.048-.143a2.25 2.25 0 01-.886-1.161l-.766-.51a1.125 1.125 0 01-.216-1.49l.89-1.068a1.125 1.125 0 00-.864-.405v-.568a12.006 12.006 0 0110.5 0zm-10.5 0v.568c0 .334-.148.65-.405.864l-1.068.89c-.442.369-.535 1.01-.216 1.49l.51.766a2.25 2.25 0 001.161.886l.143.048a1.107 1.107 0 01.57 1.664l-.969 1.939a.75.75 0 101.06 1.06l1.94-1.94a1.107 1.107 0 011.664.57l.048.143a2.25 2.25 0 00.886 1.161l.766.51c.48.319 1.121.226 1.49-.216l.89-1.068c.257-.214.405-.53.405-.864v-.568a12.006 12.006 0 00-10.5 0z"
    />
  </Icon>
);

export const HeartIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
  </Icon>
);

export const GlobeIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0112 13.5c-2.998 0-5.74-1.1-7.843-2.918"
    />
  </Icon>
);

export const RibbonIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 3.104v5.714a2.25 2.25 0 01-.5 1.591L5.25 12.25v6.536A2.25 2.25 0 007.5 21h9a2.25 2.25 0 002.25-2.25V12.25l-3.999-1.791a2.25 2.25 0 01-.5-1.591V3.104m-7.5 0a2.25 2.25 0 013.75 0M9.75 3.104a2.25 2.25 0 00-3.75 0m7.5 0a2.25 2.25 0 013.75 0M1.5 9.75h21"
    />
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

export const GithubIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
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

export const TwitterIcon = (props) => (
  <Icon {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3 7.1 0 .8-.4 1.5-.9 2.2-1.1 1.4-2.6 2.3-4.2 2.7h-1.3c-1.2 0-2.3-.5-3.2-1.2.9-.1 1.8-.4 2.6-.9 1.5-.9 2.6-2.2 3.1-3.8.4-1.2.4-2.5 0-3.7-.4-1.3-1.1-2.4-2-3.3-1.3-1.3-3-2.1-4.7-2.2h-1.3c-1.2 0-2.3.5-3.2 1.2.9-.1 1.8-.4 2.6-.9 1.5-.9 2.6-2.2 3.1-3.8.4-1.2.4-2.5 0-3.7C15.4 3.1 14.7 2 13.8 1.1c-1.3-1.3-3-2.1-4.7-2.2H7.8c-1.2 0-2.3.5-3.2 1.2.9-.1 1.8-.4 2.6-.9 1.5-.9 2.6-2.2 3.1-3.8.4-1.2.4-2.5 0-3.7C9.4 3.1 8.7 2 7.8 1.1 6.5-.2 4.8-1 3.1-1.1H1.8c-1.2 0-2.3.5-3.2 1.2C-.3 1.2-1 2.3-1.4 3.5c-.4 1.2-.4 2.5 0 3.7.4 1.3 1.1 2.4 2 3.3 1.3 1.3 3 2.1 4.7 2.2h1.3c1.2 0 2.3-.5 3.2-1.2-.9.1-1.8.4-2.6.9-1.5.9-2.6 2.2-3.1 3.8-.4 1.2-.4 2.5 0 3.7.4 1.3 1.1 2.4 2 3.3 1.3 1.3 3 2.1 4.7 2.2h1.3c1.2 0 2.3-.5 3.2-1.2.9.1 1.8.4 2.6.9 1.5.9 2.6 2.2 3.1 3.8.4 1.2.4-2.5 0-3.7-.4-1.3-1.1-2.4-2-3.3-1.3-1.3-3-2.1-4.7-2.2h-1.3c-1.2 0-2.3.5-3.2-1.2.9.1 1.8.4 2.6.9 1.5.9 2.6 2.2 3.1 3.8.4 1.2.4-2.5 0-3.7C15.4 20.9 14.7 22 13.8 22.9c-1.3 1.3-3 2.1-4.7 2.2H7.8c-1.2 0-2.3-.5-3.2-1.2C3.7 22.8 3 21.7 2.6 20.5c-.4-1.2-.4-2.5 0-3.7.4-1.3 1.1-2.4 2-3.3 1.3-1.3 3-2.1 4.7-2.2h1.3c1.2 0 2.3.5 3.2-1.2L22 4z" />
  </Icon>
);

export const InstagramIcon = (props) => (
  <Icon {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </Icon>
);

export const LinkedInIcon = (props) => (
  <Icon {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </Icon>
);

export const JourneyArrowIcon = (props) => (
  <Icon {...props}>
    <path
      d="M50 50 Q150 30 250 50 Q350 70 450 50"
      fill="none"
      stroke="currentColor"
    />
    <path d="M470 50 l20 -10 l-10 20 l20 -10 z" fill="currentColor" />
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
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 13.5 10.5 6.75 13.5 9.75 20.25 3.75m0 0L17.5 2m2.75 1.75L18.5 6.5"
    />
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

export const StarIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.563.563 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
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
