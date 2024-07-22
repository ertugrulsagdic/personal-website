import React from 'react';

export function Menu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" {...props} >
      <path
        d="M85.5,55.5h-70c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5h70c2.8,0,5,2.2,5,5C90.5,53.3,88.3,55.5,85.5,55.5z   M85.5,35.5h-70c-2.8,0-5-2.2-5-5s2.2-5,5-5h70c2.8,0,5,2.2,5,5S88.3,35.5,85.5,35.5z M15.5,65.5h70c2.8,0,5,2.2,5,5s-2.2,5-5,5h-70  c-2.8,0-5-2.2-5-5S12.7,65.5,15.5,65.5z"
        fill='currentColor'
      />
    </svg>
  );
}

