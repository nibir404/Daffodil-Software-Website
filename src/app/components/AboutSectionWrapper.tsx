import { ReactNode } from 'react';

interface AboutSectionWrapperProps {
  children: ReactNode;
  className?: string;
}

export function AboutSectionWrapper({ children, className = '' }: AboutSectionWrapperProps) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
