interface IconProps {
  className?: string;
}

export const LocationIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5 8.75C12.5 10.1307 11.3807 11.25 10 11.25C8.61929 11.25 7.5 10.1307 7.5 8.75C7.5 7.36929 8.61929 6.25 10 6.25C11.3807 6.25 12.5 7.36929 12.5 8.75Z"
      stroke="#71717A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.25 8.75C16.25 14.7018 10 18.125 10 18.125C10 18.125 3.75 14.7018 3.75 8.75C3.75 5.29822 6.54822 2.5 10 2.5C13.4518 2.5 16.25 5.29822 16.25 8.75Z"
      stroke="#71717A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LanguageIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.75 17.5L13.125 8.125L17.5 17.5M10 15H16.25M2.5 4.68447C4.13797 4.48022 5.8067 4.375 7.5 4.375M7.5 4.375C8.43401 4.375 9.36054 4.40701 10.2786 4.47M7.5 4.375V2.5M10.2786 4.47C9.31361 8.88151 6.40723 12.5668 2.5 14.5852M10.2786 4.47C11.0249 4.5212 11.7655 4.59288 12.5 4.68447M8.67606 11.7635C7.32129 10.3849 6.23087 8.74575 5.48694 6.92805"
      stroke="#71717A"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const TimezoneIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 5V10H13.75M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
      stroke="#71717A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 8.5L7 12.5L13 3.5"
      stroke="#49670D"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export const CompanyIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 14H14.5M2.5 2V14M9.5 2V14M13.5 5V14M4.5 4.5H5M4.5 6.5H5M4.5 8.5H5M7 4.5H7.5M7 6.5H7.5M7 8.5H7.5M4.5 14V11.75C4.5 11.3358 4.83579 11 5.25 11H6.75C7.16421 11 7.5 11.3358 7.5 11.75V14M2 2H10M9.5 5H14M11.5 7.5H11.505V7.505H11.5V7.5ZM11.5 9.5H11.505V9.505H11.5V9.5ZM11.5 11.5H11.505V11.505H11.5V11.5Z"
      stroke="#0E0CFF"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const DetailsIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_3006_2991)">
      <path
        d="M11.2411 2.99111L12.3661 1.86612C12.8543 1.37796 13.6457 1.37796 14.1339 1.86612C14.622 2.35427 14.622 3.14573 14.1339 3.63388L4.55479 13.213C4.20234 13.5654 3.76762 13.8245 3.28993 13.9668L1.5 14.5L2.03319 12.7101C2.17548 12.2324 2.43456 11.7977 2.78701 11.4452L11.2411 2.99111ZM11.2411 2.99111L13 4.74999"
        stroke="#0E0CFF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_3006_2991">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const ProfileIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5002 4C10.5002 5.38071 9.38093 6.5 8.00022 6.5C6.61951 6.5 5.50022 5.38071 5.50022 4C5.50022 2.61929 6.61951 1.5 8.00022 1.5C9.38093 1.5 10.5002 2.61929 10.5002 4Z"
      stroke="#7730F7"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.00098 13.4122C3.04785 10.6913 5.26813 8.5 8.00022 8.5C10.7324 8.5 12.9527 10.6914 12.9995 13.4124C11.4776 14.1107 9.78448 14.5 8.00043 14.5C6.21622 14.5 4.52295 14.1106 3.00098 13.4122Z"
      stroke="#7730F7"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const TeamIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 12.7517C10.5553 12.9133 11.1425 13 11.75 13C12.7358 13 13.6683 12.7718 14.4976 12.3652C14.4992 12.327 14.5 12.2886 14.5 12.25C14.5 10.7312 13.2688 9.5 11.75 9.5C10.8046 9.5 9.97068 9.97701 9.47572 10.7035M10 12.7517V12.75C10 12.0081 9.80989 11.3105 9.47572 10.7035M10 12.7517C9.99999 12.7755 9.99978 12.7992 9.99939 12.8229C8.75824 13.5702 7.30432 14 5.75 14C4.19568 14 2.74176 13.5702 1.50061 12.8229C1.50021 12.7986 1.5 12.7743 1.5 12.75C1.5 10.4028 3.40279 8.5 5.75 8.5C7.35528 8.5 8.75269 9.38999 9.47572 10.7035M8 4.25C8 5.49264 6.99264 6.5 5.75 6.5C4.50736 6.5 3.5 5.49264 3.5 4.25C3.5 3.00736 4.50736 2 5.75 2C6.99264 2 8 3.00736 8 4.25ZM13.5 5.75C13.5 6.7165 12.7165 7.5 11.75 7.5C10.7835 7.5 10 6.7165 10 5.75C10 4.7835 10.7835 4 11.75 4C12.7165 4 13.5 4.7835 13.5 5.75Z"
      stroke="#7730F7"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export const BackIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 13L2 8M2 8L7 3M2 8H14"
      stroke="#52525B"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const forwardIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 3L14 8M14 8L9 13M14 8H2"
      stroke="#52525B"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const LinkIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.9919 7.24035C11.3661 7.4191 11.7167 7.66343 12.0267 7.97335C13.4911 9.43782 13.4911 11.8122 12.0267 13.2766L8.27665 17.0267C6.81218 18.4911 4.43782 18.4911 2.97335 17.0267C1.50888 15.5622 1.50888 13.1878 2.97335 11.7234L4.43749 10.2592M15.5625 9.74079L17.0267 8.27665C18.4911 6.81218 18.4911 4.43782 17.0267 2.97335C15.5622 1.50888 13.1878 1.50888 11.7234 2.97335L7.97335 6.72335C6.50888 8.18782 6.50888 10.5622 7.97335 12.0267C8.28327 12.3366 8.63394 12.5809 9.00812 12.7597"
      stroke="#71717A"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export const MailIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.125 5.625V14.375C18.125 15.4105 17.2855 16.25 16.25 16.25H3.75C2.71447 16.25 1.875 15.4105 1.875 14.375V5.625M18.125 5.625C18.125 4.58947 17.2855 3.75 16.25 3.75H3.75C2.71447 3.75 1.875 4.58947 1.875 5.625M18.125 5.625V5.82726C18.125 6.47837 17.7872 7.08287 17.2327 7.42412L10.9827 11.2703C10.38 11.6411 9.61996 11.6411 9.01732 11.2703L2.76732 7.42412C2.21279 7.08287 1.875 6.47837 1.875 5.82726V5.625"
      stroke="#71717A"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
