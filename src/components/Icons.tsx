// @ts-nocheck

// Suppressing the TS bug related to the <set> tag of an SVG element

import * as React from "react"

// svg(s) are transformed using the "react-svgr.com" website
// This is done for a better customization of each svg 


export const GithubIcon = ({ className, ...prop }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...prop}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const TwitterIcon = ({ className, ...prop }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 209"
    {...prop}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v209H0z" />
    <path
      fill="#55acee"
      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
    />
  </svg>
);

export const LinkedInIcon = ({ className, ...prop }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...prop}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const SunIcon = ({ className, ...prop }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...prop}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...prop }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...prop}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...prop }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1440}
    height={1440}
    viewBox="0 0 1080 1080"
    className={`w-full h-auto ${className}`}
    {...prop}

  >
    <path d="M543.5 223.8c-13.5 4.8-20.4 17.5-17.4 32 2.7 13.2 19.2 22.1 33.6 18.2 6.9-1.9 10.3-4.1 10.3-6.6 0-3.9-2.5-4.9-6.3-2.5-2.7 1.6-5.1 2.1-10.9 2.1-6.7 0-7.9-.3-11.5-2.9-4.4-3.2-8.1-8.7-7.5-11.4.3-1.5 1.3-1.6 8.5-1.2 4.5.2 13.9.7 21 1l12.7.5v-3.7c-.1-5.3-3.1-13.7-6.3-17.8-3.9-4.9-9.9-7.6-17.7-8.1-3.6-.2-7.4 0-8.5.4zm14.5 8.4c4.9 2.5 9 7.7 9 11.4v2.4h-15.2c-8.4 0-16-.5-16.8-1-1.3-.8-1.2-1.6 1-5.7 2.8-5.3 9-9.3 14.5-9.3 1.7 0 5.1 1 7.5 2.2zM481.5 229.4c-2.8 1.3-6.3 3.8-7.8 5.5l-2.7 3.3-1.5-3.6c-1.4-3.4-1.6-3.5-4.6-2.4l-3.1 1.1.6 6.1c.4 3.3 1.3 8.8 2.1 12.1.8 3.3 1.9 8.9 2.5 12.5 1.7 10.1 1.9 11.7 4.2 24.2l2.1 11.8h4.3c2.4 0 4.4-.4 4.4-.8 0-.5-.7-3.1-1.5-5.8-.8-2.7-1.5-6.5-1.5-8.4 0-1.9-.4-5.1-1-6.9-1.1-3.9-.7-4.9 1.2-3.3 2.1 1.7 10 4.2 13.5 4.2 10.3 0 21.8-9 24.1-19 1.7-7.4 0-16.9-4.3-22.9-6.7-9.6-20-12.9-31-7.7zm17.9 7c4.2 1.8 6.7 5 9.1 11.9l1.9 5.5-2.4 6c-3.6 8.9-11 12.7-21.3 10.8-4.6-.9-10.2-6.7-12.2-12.7-1.5-4.4-1.5-5.4-.1-10.2 1.6-5.4 5.2-9.8 9.6-11.6 3.7-1.4 11.6-1.3 15.4.3zM593.1 229.3c-.6.8-1.5 4.6-2.1 8.6-.6 4.1-1.3 7.8-1.6 8.3-.3.5-1.2 4.4-2 8.6-.7 4.2-1.9 10.4-2.6 13.8-1.3 7.2-.8 9.1 2.8 10 3.2.8 4-.2 5.4-7.6 5.1-26.2 8.1-31 19.3-31 4.8 0 6.7-1.3 6.7-4.7 0-2.1-.4-2.3-6.1-2.3-4.6 0-7.1.6-9.7 2.2l-3.5 2.2.6-3.2c.5-2.5.2-3.4-1.6-4.7-2.6-1.8-4.1-1.9-5.6-.2zM428.5 244.5c-.5.2-3.5 1.1-6.6 1.9-7 2-14.4 8.2-17.1 14.5-5.5 12.6.8 28.7 13.4 34.1 4.3 1.8 6.4 2.1 11.8 1.7 21.6-1.7 32.5-22.9 20.9-40.6-3.7-5.6-8.3-9-14.1-10.2-2.4-.6-5-1.1-5.8-1.3-.8-.3-1.9-.3-2.5-.1zm10.2 10.9c5.1 3.3 7.8 9 7.8 16.6 0 5.3-.5 7.1-2.4 9.9-2.4 3.4-11.2 8.1-15.2 8.1-2.3 0-9.4-3.5-11.9-5.8-5.7-5.5-7.2-16.8-3.1-23.5 4.9-8 16.9-10.6 24.8-5.3zM365.8 251.1c-2.5 1.4-2.2 3 1.5 8.6 1.7 2.6 3.8 5.9 4.4 7.3.7 1.4 1.9 3.4 2.5 4.5 5.1 8 8.5 13.6 14.8 24.5 11 18.8 10.6 18.3 14 16.5 1.6-.8 3.1-1.9 3.4-2.4.4-.5-1.1-3.7-3.1-7.1-2.1-3.4-4.7-7.8-5.9-9.8-1.1-2-3.4-5.8-5-8.4-1.6-2.6-6.4-10.7-10.8-18-10.5-17.8-11.2-18.4-15.8-15.7zM713.8 264.7c-2.4 3.2-9.1 12.1-15.1 19.8-5.9 7.7-11.1 14.4-11.5 15-.4.5-2.4 3.1-4.5 5.6-2 2.5-3.7 5.1-3.7 5.7 0 .6 2.8 3.2 6.3 5.8 25 19.1 27.4 20.4 38.7 20.4 12.7 0 23.6-7.2 30-19.6 2.1-4.2 2.5-6.2 2.4-13.9 0-7.4-.5-9.8-2.4-13.5-3.4-6.6-6.4-10.2-12.3-14.8-2.8-2.3-8.7-6.8-12.9-10.1-4.3-3.4-8.4-6.1-9.3-6.1-.8 0-3.4 2.6-5.7 5.7zm12.3 8.1c15.5 11.6 16.8 13 21.2 22.6 2.2 4.8 2.1 8.7-.2 15.4-3.7 10.7-13.2 17.5-24.3 17.5-7.3 0-14.2-2.8-20.6-8.5-1.9-1.6-5.1-4-7.3-5.3-2.1-1.4-3.9-3.2-3.9-3.9 0-.8 3.5-5.9 7.8-11.4 4.2-5.5 11-14.3 15.1-19.6 4.1-5.3 7.7-9.6 8-9.6.3.1 2.2 1.3 4.2 2.8zM642 283.7c-4.3 1.5-5.2 6.8-1.7 10.1 2.8 2.7 4.8 2.8 7.5.4 3.4-2.9 3.7-5.8.8-8.7-2.5-2.5-3.7-2.8-6.6-1.8zM349.8 289.5c-6.5 1.8-12.7 6.2-15.9 11.5-2.4 3.9-2.8 5.6-2.8 12.9-.1 9.1 1.1 12.3 7.3 18.9 6.8 7.3 18.4 9.5 27.9 5.3 12.5-5.4 23.4-24.1 14.2-24.1-2.1 0-2.9.9-4.9 5.3-1.5 3.4-3.9 6.5-6.5 8.6-3.6 2.9-5.2 3.4-10.9 3.8-5.6.4-7.3.1-10.2-1.8l-3.5-2.1 4-3.5c2.2-1.9 5.6-4.7 7.5-6.1 2-1.5 7.5-6 12.2-10.1 8.4-7.1 8.6-7.4 7.2-9.6-2.3-3.5-9-7.5-15-9.1-3-.8-5.6-1.4-5.7-1.3-.1 0-2.3.7-4.9 1.4zm14.7 9.6 2 2.1-5 4.5c-5.3 4.8-17.1 14.4-19.3 15.7-4 2.4-5.8-10.3-2.3-16 2.1-3.5 7.5-7.9 10.6-8.7 3.9-1.1 11.9.3 14 2.4zM311.6 319.9c-.9.9-1.6 2.7-1.6 3.8 0 1.2 4 10.2 9 20 4.9 9.8 9 18.3 9 19 0 .8-2 .6-6.7-.8-18.2-5.3-31-8.9-34-9.6-2.3-.5-6.2 2.8-6.3 5.4 0 1.2 5.9 3.3 9.2 3.3 1 0 3.2.6 5 1.4 3.4 1.5 17.9 5.8 28.2 8.3 3.3.8 6.7 1.8 7.7 2.4 1.3.7 2.3.2 4.3-2.2 1.4-1.7 2.6-3.7 2.6-4.4 0-1.7-22.6-47.2-23.9-47.9-.4-.3-1.6.3-2.5 1.3zM755.5 333.2c-9.1 4.6-15.5 14.1-15.5 22.8 0 12.4 11.7 27 22.6 28.2 2.6.3 2.9 0 2.9-2.7 0-2.6-.7-3.3-4.5-5.2-5.7-2.8-10.7-8.5-12.1-13.6-1.4-5.3-.3-13.1 2.3-15.4 2-1.8 2.1-1.7 5.5 2.2 1.8 2.2 5.5 6.7 8 10 2.6 3.3 6.3 7.9 8.2 10.1 2 2.3 4.3 5.3 5.3 6.5l1.6 2.4 4.4-4.6c7.5-8 9.6-17.6 5.8-26.4-3.1-7.2-5.7-10.3-11.3-13.5-4.4-2.5-6.2-3-12.2-2.9-5.1 0-8.1.6-11 2.1zm18.8 6.9c8.8 4.3 12.5 15.8 7.7 23.7-1.1 1.9-2.4 3.2-2.9 3-.9-.3-9.5-10.5-16.4-19.3l-4.7-6 3.3-1.7c4.3-2.3 7.8-2.2 13 .3zM279.6 374.8c-10.5.9-19.6 12.4-19.6 24.8 0 10.9 5.4 18.8 16.3 23.7 4.9 2.2 14.8 2.2 19.5 0 9.3-4.4 17.2-16.8 17.2-27.1 0-6.4-1-7.7-4.6-6.5-2.7.9-2.9 1.4-3.5 8-.8 8.3-1.5 9.8-6.8 14.6-4.1 3.7-10.6 5.5-15.5 4.3-2.9-.7-2.8-1.8.5-7.1 1.4-2.2 5.4-9.4 8.9-16 3.4-6.6 6.7-12.5 7.1-13.1 2.4-3-9.7-6.4-19.5-5.6zm7.3 6.8c3.1.6 4.1 2.9 2.2 4.9-.4.6-2.5 4.1-4.6 8-6 11-9.7 17.5-10 17.5-3.5 0-7.5-7-7.5-13 0-7.5 5.5-14.8 12.8-17 3.6-1.1 3.5-1.1 7.1-.4zM794.3 378.1c-1.8 1.2-3.8 3.7-4.7 6.1-1.4 3.5-1.5 4.9-.5 9.7.7 3.1 1.8 6.7 2.5 8.1 1.6 3.3 2.7 11.2 1.7 12.6-1.6 2.3-5.2 3.5-7.2 2.4-6.1-3.2-11.1-13.1-11.1-22 0-2.3-.5-3-3-3.5-4-.9-5 0-5 4.4 0 7.8 5.6 19.7 12 25.5 3.6 3.3 4.6 3.6 9.8 3.6 6.4 0 9.4-1.5 11.7-6 1.7-3.4 1.9-6.1.5-10.4-5.7-18.2-5.9-21.9-1.3-23.7 3.6-1.3 5.7-.4 9.7 4.3 2.4 2.8 4.1 6.2 5.3 10.9 1.7 6.8 1.8 6.9 5 6.9 3.1 0 3.3-.2 3.3-3.5 0-1.9-.9-5.8-2-8.6-6-15.2-17.5-22.4-26.7-16.8zM845.7 414.8c-2.3 2.5-2.1 5.8.3 8.2 5.6 5.6 12.6-2.3 7.3-8.3-2.1-2.2-5.6-2.2-7.6.1zM825.5 423.5c-1.6.8-7.3 3.1-12.5 5.1-28 10.6-27.7 10.4-26 14.8 1.2 3.2 3.4 3.3 9.8.7 4.6-1.9 15.6-6.2 29.7-11.6 9.4-3.7 9.8-4 7.9-7.6-1.6-3.3-4.1-3.6-8.9-1.4zM238.5 428.6c-6.8 3.3-11.9 8.6-15.5 15.8-3 6.2-7 18.5-7 21.6 0 1-.7 3.4-1.5 5.3-.8 2-1.5 5-1.5 6.6 0 2.7.4 3.1 4.3 4.1 9 2.4 15.4 4.1 20.5 5.5 2.8.8 7.6 2.2 10.5 3 2.8.8 7.9 2.2 11.2 3.1 3.3.9 7.6 2 9.5 2.4 1.9.4 4.3 1.1 5.2 1.5 2.1.8 4.2-2.9 5.6-10 .6-2.8 2.2-8.8 3.6-13.5 6.6-22-.4-38.8-19.4-46.2-7-2.8-19.1-2.4-25.5.8zm24.3 8.4c6.1 2.7 9.2 5.4 12.1 10.3 2.1 3.6 2.4 5.5 2.5 13.2 0 5.8-.6 10.6-1.6 13.5-.9 2.5-2.1 6.4-2.8 8.8-1.1 4.2-1.1 4.3-4.8 3.6-2-.3-5.5-1.2-7.7-1.9s-6.9-2.1-10.5-3c-3.6-1-9.4-2.6-12.9-3.6s-7.6-1.9-9.1-1.9c-1.4 0-3.4-.6-4.4-1.3-1.6-1.2-1.6-1.8.8-10.7 1.3-5.2 3.3-11.5 4.4-14 2.1-4.8 7.8-10.8 12.7-13.3 4.4-2.4 15.9-2.2 21.3.3zM814.4 450.9c-5 2.3-10.5 7.6-12.7 12.3-2.4 5.1-2.2 16 .4 21.8 1.1 2.5 3.7 6.1 5.7 7.9l3.7 3.5-2.5.7c-13.5 3.8-22.9-4.4-23-19.9 0-4.1.6-8.8 1.4-10.7l1.5-3.4-3.5-1.1c-2-.7-3.8-.9-4.1-.6-.4.3-1.2 3.3-1.9 6.6-2.1 10.2.5 23.6 6.1 31.3 3.7 5.3 7.3 6.7 17.1 6.7 4.9 0 10.5-.5 12.4-1.1 3.5-1.1 9.8-2.4 24.6-5.3 11.6-2.2 13.6-3.2 13.2-7-.3-2.9-.6-3.1-4-3-2.1.1-3.8 0-3.8-.2 0-.1.9-2.4 2.1-5.1 2-4.8 2.2-9.8.4-17.8-1-4.6-5.6-10.6-10.5-14-5.9-3.9-16.2-4.7-22.6-1.6zm21.6 11.6c7.2 7.1 7.7 18.6 1.1 25.8-8.5 9.1-22.7 6.1-28.2-5.8-2.4-5.1-2.4-9.2 0-14.7 3.3-7.6 7.4-9.9 16.9-9.5 5.7.3 6.5.6 10.2 4.2zM806.3 519.6c-1.9.8-1.6 6.1.3 6.8.9.3 7.3.6 14.2.7 14.6.1 20.7 1.7 24.4 6.4 2 2.5 2.3 4.1 2.3 10.7 0 7.1-.2 8-2.8 10.5l-2.7 2.8-19 .3-19 .4v8.8h18.3c19.7 0 23.6-.9 28.4-6.1 2.9-3.2 5.3-10.1 5.3-15.4 0-4.5-3-12.7-5.6-15.7-1.7-1.8-1.3-2.2 2.9-3.2 2.2-.5 2.7-1.2 2.7-3.6v-3h-14.7c-8.2 0-19.1-.2-24.3-.5-5.2-.3-10.1-.2-10.7.1zM263.4 535.2c-14.4 13.4-14.8 13.8-16.7 14.4-1.3.4-4-1.4-9.3-6.3-4.1-3.7-8.8-7.9-10.5-9.2l-2.9-2.4v4.5c0 4.4.1 4.6 13.7 17.9l13.7 13.4-4 .7c-3 .6-33.2 2.6-40.1 2.8-1.4 0-1.9 7.6-.5 8.3.4.3 4.3.1 8.7-.4 4.4-.4 19.5-1.3 33.5-1.9 27.7-1.2 28.4-1.4 27.8-7-.3-2.4-.6-2.5-7.9-2.8l-7.6-.3-4.8-4.9-4.9-4.9 5.5-4.8c3-2.6 8.2-7.5 11.7-10.9 5.8-5.7 6.2-6.3 5.6-9.5-.4-1.9-1-3.8-1.4-4.2-.4-.4-4.7 2.9-9.6 7.5zM267.7 585.7c-.4.3-.7 2-.7 3.7 0 2.3.8 3.6 2.8 5 6.8 4.5 9.2 15.2 5.1 22.5-4.1 7.3-14.4 11.6-21.9 9.1-5.6-1.8-8.6-4.4-11-9.1-2.5-4.7-2.6-10.7-.3-15.4 1.9-4.1 1-6.8-2.4-7.3-3.7-.5-6.3 5.3-6.3 13.9.1 10.7 3 16.2 12.6 23.6 3.4 2.6 4.4 2.8 12.3 2.8 7.6 0 9.2-.4 14.1-3 3.9-2.2 6.3-4.4 8.5-7.9 2.8-4.6 3-5.6 3-14.5s-.3-10-3.1-14.6c-1.8-3-4.6-5.9-7-7.2-4.3-2.5-4.8-2.6-5.7-1.6zM797 603.1c-2.7 4.9 2.1 10 7.4 7.9 6.7-2.5 4.8-10-2.4-10-3 0-4.2.5-5 2.1zM288 636.6c-1.4.8-8.1 4.1-15 7.3-17.2 8.1-20 11.1-20 21.7 0 3.9.8 7 2.6 10.7 2.7 5.5 11.9 15.7 14.1 15.7.8 0 1.9-1.1 2.5-2.5 1.1-2.4.8-3-3.8-7.8-5.1-5.3-8.4-11.1-8.4-14.8 0-3.2 2.7-7.5 6.1-10l3.2-2.2 1.8 2.4c1 1.3 1.9 2.8 1.9 3.4.1 1.4 4.1 9.2 7.2 14.1 8.1 12.7 26.1 7.8 26.1-7 0-7.7-5-16.6-11.2-20.3-2.5-1.4-4-2.8-3.3-3.1 2.3-.7 3.3-3.9 2-6.6-1.3-2.9-2.2-3.1-5.8-1zm1.1 13.8c4.8 2 7.6 5.3 9 10.7 1 3.7 1 5.3 0 7.7-2.3 5.5-9 6.3-13.3 1.6-1.8-2.1-8.8-15.8-8.8-17.3 0-1.4 5-4 7.6-4.1 1.2 0 3.7.6 5.5 1.4zM792.5 650.9c-3.3.9-7.4 2.5-9.1 3.3-4.7 2.5-11.3 10.3-14.5 17.3-2.7 5.6-3 7.1-2.7 14.6l.3 8.4h6l.6-7.5c.6-9 2.6-13.6 8.2-19.7 5.2-5.6 12.5-9.3 18.6-9.3 6.3 0 18.1 5.9 21.5 10.8 6.6 9.6 7.3 17.6 2.6 27.6-3.1 6.5-6.9 10.6-12.9 13.8-3.4 1.9-4 4.7-1.6 7.2 2 2 4.1 1.2 10.8-4.1 9.2-7.2 13.4-15.1 14.4-27.3 1.4-16.6-9.4-31-26.5-35.4-7.7-1.9-8.1-1.9-15.7.3zM309.5 681.1c-1.9 2-1.9 2 .7 4.2 5 4.2 6.1 8.8 2.9 12.9-2.5 3.2-23.9 18.1-25.2 17.6-.4-.2-2.6-2.7-4.9-5.6-3.9-5-4.3-5.2-6.3-3.9-3.1 2.1-3.1 3.2.2 6.9 4.8 5.5 4.8 7.8.1 11.1-3.8 2.7-3.9 2.9-2.4 5.2 2.3 3.6 4.4 3.8 8.2 1.1 2.7-1.9 4-2.3 5.4-1.5 1 .5 1.8 1.6 1.8 2.3 0 .8.6 1.9 1.3 2.5 1.1.8 1.9.5 3.7-1.3l2.2-2.5-2.1-2.9c-1.1-1.7-2.1-3.2-2.1-3.5 0-.5 7.7-5.9 18.3-12.8 6.7-4.5 11.4-9.7 12.1-13.4.9-4.4-1.8-10.8-6.4-15.3-3.9-3.7-5-3.9-7.5-1.1zM749.3 705c-5.2 2.3-11.5 8.6-14.4 14.2-4.6 9-2.3 21.2 5.5 29 11.7 11.7 29.4 9.9 39.7-4.2 8-10.9 7.2-22.5-2.2-32.1-8.3-8.5-19.1-11.1-28.6-6.9zm18.4 9.1c1.8 1.1 4.6 3.7 6.1 5.7 2.3 3 2.7 4.5 2.7 10.2 0 5.8-.4 7.1-2.9 10.4-1.6 2.2-4.9 4.7-7.5 5.9-4.1 1.8-5.2 1.9-10 .9-10.3-2.2-17.6-13-15.1-22.2 1.4-5.1 7.2-11.7 11.4-13 4.4-1.3 11.2-.4 15.3 2.1zM326.4 716c-1.1.4-3.6 2.4-5.5 4.4-6.2 6.6-5.7 14.8 1.5 27 6.2 10.5 8.8 16.5 8 19-1.6 5.2-6.5 8-12.3 7-5.4-1-16.4-12.4-18-18.7-.6-2.6-1.4-4.7-1.7-4.7-1.4 0-6.4 3.2-6.4 4.1 0 3.2 6.1 13.1 11.1 18.2 9.2 9.2 18.1 11.8 26.5 7.8 4.9-2.4 6.8-4.5 8.4-9.5 1.9-5.9.5-11.1-6.1-23-3.4-6-6.4-12.6-6.6-14.7-.5-3.3-.1-4.2 2.5-6.9 2.1-2 4-3 6.2-3 6.9 0 15.7 7.4 20 16.7 1.2 2.6 2.6 5.6 3.1 6.5.5 1 .9 2.5.9 3.3 0 1.9.4 1.9 4 0 2.5-1.3 2.7-1.8 2-4.7-2.5-10.5-12-22.6-21.2-27.2-5.3-2.7-12.2-3.3-16.4-1.6zM711.5 743.9c-9.8 2.6-17.6 9.1-19.5 16.3-1.7 6-1.9 6.2-4.7 3.7-2.2-2.2-2.6-2.2-5-.9-1.5.8-2.8 2-3 2.6-.2.5 1.8 3.8 4.4 7.2 2.7 3.3 9.5 12.5 15.3 20.2 5.8 7.8 12.3 16.5 14.5 19.3 2.2 2.9 4.8 6.5 5.8 8l1.8 2.8 3.2-2.2c1.8-1.3 3.4-2.4 3.6-2.5.4-.4-5.6-8.7-11.6-16.2-2.4-2.9-4.3-5.7-4.3-6.2s1.5-.6 3.3-.3c3.8.6 12.3-2.5 17.3-6.3 4-3.1 9.4-13.4 9.4-17.9 0-15.6-17.1-31-30.5-27.6zm10.1 9.7c7.9 3.7 12.6 13.1 11 21.7-1.2 6.3-10.6 13.7-17.5 13.7-4.2-.1-10.5-3.5-13.8-7.5-6.5-7.8-6.2-17.3.7-24.2 5.6-5.5 12.9-6.9 19.6-3.7zM392.3 769.2c-2.2 3.5-5.4 8.8-7.3 11.8-1.8 3-4.3 7.1-5.5 9-10.3 16-18.5 30-18.5 31.3 0 .8 1.2 2.5 2.7 3.7l2.7 2.1 5-8.1c2.8-4.4 6.9-11 9.1-14.6 2.2-3.6 5.4-8.6 7-11.2 7.4-11.5 15.5-25.1 15.5-26.1 0-1.6-3-4.1-4.9-4.1-1.1 0-3.3 2.4-5.8 6.2zM416.7 776.8c-1 1-1.7 2.6-1.7 3.5 0 .9-.4 1.8-.9 2.1-.4.3-2.7 4.5-5 9.3-2.3 4.9-4.6 9.5-5.1 10.3-.5.8-2.1 4-3.5 7s-3 6.2-3.5 7c-.5.8-2.7 5.2-5 9.7-5 10-5.1 13.8-.5 13.8 2.9 0 3.4-.7 18.2-30 8.4-16.5 15.2-30.5 15.3-31.1 0-1-4.1-3.4-5.9-3.4-.4 0-1.5.8-2.4 1.8zM650.6 779.2c-6.6 2.3-16.6 11-16.6 14.4 0 1.1 1.3 2.6 3 3.6 2.7 1.6 3 1.6 3 .1 0-.9 2-3.5 4.4-5.8 7.9-7.6 19.9-8.4 26.5-1.8 4.1 4.1 4.5 3.8-11.4 10.8-6 2.6-13.6 6.1-16.8 7.7-6.5 3.2-6.6 3.9-2.1 10.5 10 14.8 32.3 13.3 42.2-2.8 1.8-3 2.2-5.1 2.2-11.7 0-12.8-5.1-20.9-15.8-25.1-6.5-2.6-11-2.5-18.6.1zm27.2 25.2c.2 2.2-.4 5.6-1.3 7.7-4.5 10-19.5 12.8-26.9 5-3.3-3.5-2.9-4.6 2.9-7.1 8.1-3.5 16-7.1 18.5-8.5 4.4-2.4 6.5-1.5 6.8 2.9zM434.7 792.7c-1.3 4.3-4.1 13.2-6.2 19.8-2 6.6-4.3 13.7-5.1 15.8-1.4 3.7-1.3 3.8 1.2 4.7 4.7 1.8 6.2 1.3 7.3-2.8 2.7-9.7 7.3-22.7 9.2-25.8 2.2-3.7 8.3-7.4 12.1-7.4 1.3 0 4.5.8 7.1 1.8 9.2 3.5 10.8 10.1 5.8 25-4 12.1-6.1 19-6.1 19.7 0 .8 7.1 3.8 7.6 3.2.2-.2 1.8-4.8 3.5-10.3 7.7-25.1 8.2-28 5.3-33.7-2.4-4.6-7.7-9.1-13.2-11-5.8-2.1-9.7-2.1-15.2-.2l-4.2 1.5.5-3c.5-2.3.2-3.2-1.3-4-4.4-2.4-5.7-1.4-8.3 6.7zM567 802.8c-2.5 2-3 6.3-1 8.7 1.9 2.3 8.7 2 10-.4 1.6-3.1 1.2-5.6-1.3-7.9-2.8-2.7-4.8-2.8-7.7-.4zM526.6 810.7c-.7 7.9-2.4 19.4-2.8 19.9-.3.3-16.2-1-28-2.2l-5.8-.6v7.9l7.7.7c4.2.3 10.6.6 14.2.6 11.2 0 11.1-.1 11.1 9.4 0 7.4-1.1 15.1-2.3 16.2-.3.3-4 .1-8.3-.5-4.4-.5-12.6-1.1-18.4-1.3l-10.5-.3-.3 3.2c-.3 3.2-.2 3.3 3.2 3.3 1.9 0 8.2.7 13.8 1.5 5.7.8 14.6 1.6 19.8 1.7l9.5.3.6-6c.3-3.3 1.2-11.9 1.8-19 .7-7.2 1.9-18.7 2.7-25.6 1.9-17.2 2.2-15.9-3-15.9h-4.4l-.6 6.7z" />
  </svg>
);

export const LinkArrow = ({ className, ...prop }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...prop}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

export const EmailIcon = ({ className, ...prop }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...prop}
  >
    <path
      fill="currentColor"
      d="M20.33 3.67a1.45 1.45 0 0 0-1.47-.35L4.23 8.2A1.44 1.44 0 0 0 4 10.85l6.07 3 3 6.09a1.44 1.44 0 0 0 1.29.79h.1a1.43 1.43 0 0 0 1.26-1l4.95-14.59a1.41 1.41 0 0 0-.34-1.47ZM4.85 9.58l12.77-4.26-7.09 7.09-5.68-2.83Zm9.58 9.57-2.84-5.68 7.09-7.09-4.25 12.77Z"
    />
  </svg>
)

