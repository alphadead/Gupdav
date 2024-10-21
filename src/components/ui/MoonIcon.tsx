import React from 'react';

const MoonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25 25"
    width="800px"
    height="800px"
    {...props}  // This allows passing additional props like className, width, height
  >
    <g fillRule="evenodd">
      <g transform="translate(-260 -2599)">
        <g transform="translate(56 160)">
          <path d="M213.978454,2456.99569 C210.914867,2456.99569 208.250138,2455.26697 206.900236,2452.73453 C213.101568,2453.26066 218.261663,2448.1176 217.735531,2441.90024 C220.266974,2443.25014 221.995691,2445.91487 221.995691,2448.97845 C221.995691,2453.39896 218.398958,2456.99569 213.978454,2456.99569 M214.834294,2439 C218.520218,2445.91687 210.972992,2453.55028 204,2449.83429 C204.429924,2454.90419 208.683069,2459 213.978454,2459 C219.513354,2459 224,2454.51335 224,2448.97845 C224,2443.68006 219.901188,2439.42992 214.834294,2439"></path>
        </g>
      </g>
    </g>
  </svg>
);

export default MoonIcon