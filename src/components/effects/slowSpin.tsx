'use client';
import type React from 'react';

type spinnerProps = {
  outerStyle?: string;
  innerStyle?: string;
};

const SpinnerOutline: React.FC<spinnerProps> = ({ outerStyle, innerStyle }) => {
  return (
    <div
      className={`absolute w-28 h-28 flex items-center justify-center ${outerStyle}`}
    >
      <div
        className={`w-24 h-24 rounded-full animate-spin-slow  border-t-4 border-white ${innerStyle}`}
      />
    </div>
  );
};

export default SpinnerOutline;
