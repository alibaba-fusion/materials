import React from 'react';

export default function UserLayout({ children }: { children: React.ReactNode; pathname?: string }) {
  return (
    <div className="user-layout">
      {children}
    </div>
  );
}
