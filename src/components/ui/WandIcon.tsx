// components/WandIcon.tsx

import React from 'react';

interface WandIconProps extends React.SVGProps<SVGSVGElement> {}

const WandIcon: React.FC<WandIconProps> = (props) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"  // Use currentColor for stroke
      {...props} // Spread any additional props
    >
      <g>
        <path
          d="M15 9H13M13.6213 4.37866L11.5 6.49998M9 5V3M6.50004 6.50004L4.37872 4.37872M5 9H3M6.50004 11.5L4.37872 13.6213M9 15V13M20 20L12 12"
          stroke="currentColor"  // Use currentColor for stroke
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default WandIcon;
