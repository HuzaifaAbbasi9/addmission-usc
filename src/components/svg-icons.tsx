import React from "react";

interface SvgIconsProps extends React.SVGProps<SVGSVGElement> {
  type: string;
}

const SvgIcons: React.FC<SvgIconsProps> = ({ type, ...rest }) => {
  switch (type) {
    case "search":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="#EDEDED"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 22L20 20"
            stroke="#EDEDED"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "profile":
      return (
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.17 18.1051C17.0708 18.0909 16.9433 18.0909 16.83 18.1051C14.3367 18.0201 12.3533 15.9801 12.3533 13.4726C12.3533 10.9084 14.4217 8.82593 17 8.82593C19.5642 8.82593 21.6467 10.9084 21.6467 13.4726C21.6325 15.9801 19.6633 18.0201 17.17 18.1051Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26.5483 27.455C24.0267 29.7641 20.6833 31.1666 17 31.1666C13.3167 31.1666 9.97333 29.7641 7.45166 27.455C7.59333 26.1233 8.44333 24.82 9.95916 23.8C13.8408 21.2216 20.1875 21.2216 24.0408 23.8C25.5567 24.82 26.4067 26.1233 26.5483 27.455Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 31.1666C24.824 31.1666 31.1666 24.824 31.1666 16.9999C31.1666 9.17588 24.824 2.83325 17 2.83325C9.17595 2.83325 2.83331 9.17588 2.83331 16.9999C2.83331 24.824 9.17595 31.1666 17 31.1666Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default SvgIcons;
