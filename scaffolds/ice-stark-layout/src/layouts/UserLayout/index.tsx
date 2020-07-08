import React from 'react';

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="user-layout">
      {children}
    </div>
  );
}
