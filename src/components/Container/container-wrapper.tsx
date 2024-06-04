import React from 'react';

export function ContainerWrapper({ children }: { children: React.ReactNode }) {
  return <div className='md:max-w-xl w-full'>{children}</div>;
}
