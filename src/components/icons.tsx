interface IconProps {
  className?: string;
}

export const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 8.75C12.5 10.1307 11.3807 11.25 10 11.25C8.61929 11.25 7.5 10.1307 7.5 8.75C7.5 7.36929 8.61929 6.25 10 6.25C11.3807 6.25 12.5 7.36929 12.5 8.75Z" stroke="#71717A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.25 8.75C16.25 14.7018 10 18.125 10 18.125C10 18.125 3.75 14.7018 3.75 8.75C3.75 5.29822 6.54822 2.5 10 2.5C13.4518 2.5 16.25 5.29822 16.25 8.75Z" stroke="#71717A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const LanguageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.75 16.5L12.125 7.125L16.5 16.5M9 14H15.25M1.5 3.68447C3.13797 3.48022 4.8067 3.375 6.5 3.375M6.5 3.375C7.43401 3.375 8.36054 3.40701 9.27856 3.47M6.5 3.375V1.5M9.27856 3.47C8.31361 7.88151 5.40723 11.5668 1.5 13.5852M9.27856 3.47C10.0249 3.5212 10.7655 3.59288 11.5 3.68447M7.67606 10.7635C6.32129 9.38493 5.23087 7.74575 4.48694 5.92805" stroke="#71717A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TimezoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 5V10H13.75M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#71717A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CompanyIcon: React.FC<IconProps> = ({ className }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 14H14.5M2.5 2V14M9.5 2V14M13.5 5V14M4.5 4.5H5M4.5 6.5H5M4.5 8.5H5M7 4.5H7.5M7 6.5H7.5M7 8.5H7.5M4.5 14V11.75C4.5 11.3358 4.83579 11 5.25 11H6.75C7.16421 11 7.5 11.3358 7.5 11.75V14M2 2H10M9.5 5H14M11.5 7.5H11.505V7.505H11.5V7.5ZM11.5 9.5H11.505V9.505H11.5V9.5ZM11.5 11.5H11.505V11.505H11.5V11.5Z" stroke="#0E0CFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

);

export const DetailsIcon: React.FC<IconProps> = ({ className }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_3006_2991)">
      <path d="M11.2411 2.99111L12.3661 1.86612C12.8543 1.37796 13.6457 1.37796 14.1339 1.86612C14.622 2.35427 14.622 3.14573 14.1339 3.63388L4.55479 13.213C4.20234 13.5654 3.76762 13.8245 3.28993 13.9668L1.5 14.5L2.03319 12.7101C2.17548 12.2324 2.43456 11.7977 2.78701 11.4452L11.2411 2.99111ZM11.2411 2.99111L13 4.74999" stroke="#0E0CFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_3006_2991">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>

);

export const ProfileIcon: React.FC<IconProps> = ({ className }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5002 4C10.5002 5.38071 9.38093 6.5 8.00022 6.5C6.61951 6.5 5.50022 5.38071 5.50022 4C5.50022 2.61929 6.61951 1.5 8.00022 1.5C9.38093 1.5 10.5002 2.61929 10.5002 4Z" stroke="#7730F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M3.00098 13.4122C3.04785 10.6913 5.26813 8.5 8.00022 8.5C10.7324 8.5 12.9527 10.6914 12.9995 13.4124C11.4776 14.1107 9.78448 14.5 8.00043 14.5C6.21622 14.5 4.52295 14.1106 3.00098 13.4122Z" stroke="#7730F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

);

export const TeamIcon: React.FC<IconProps> = ({ className }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 12.7517C10.5553 12.9133 11.1425 13 11.75 13C12.7358 13 13.6683 12.7718 14.4976 12.3652C14.4992 12.327 14.5 12.2886 14.5 12.25C14.5 10.7312 13.2688 9.5 11.75 9.5C10.8046 9.5 9.97068 9.97701 9.47572 10.7035M10 12.7517V12.75C10 12.0081 9.80989 11.3105 9.47572 10.7035M10 12.7517C9.99999 12.7755 9.99978 12.7992 9.99939 12.8229C8.75824 13.5702 7.30432 14 5.75 14C4.19568 14 2.74176 13.5702 1.50061 12.8229C1.50021 12.7986 1.5 12.7743 1.5 12.75C1.5 10.4028 3.40279 8.5 5.75 8.5C7.35528 8.5 8.75269 9.38999 9.47572 10.7035M8 4.25C8 5.49264 6.99264 6.5 5.75 6.5C4.50736 6.5 3.5 5.49264 3.5 4.25C3.5 3.00736 4.50736 2 5.75 2C6.99264 2 8 3.00736 8 4.25ZM13.5 5.75C13.5 6.7165 12.7165 7.5 11.75 7.5C10.7835 7.5 10 6.7165 10 5.75C10 4.7835 10.7835 4 11.75 4C12.7165 4 13.5 4.7835 13.5 5.75Z" stroke="#7730F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

);