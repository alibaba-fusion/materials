import React from 'react';
import { Shell } from '@alifd/next';
import PageNav from './components/PageNav';
import Footer from './components/Footer';

declare global {
  interface Window {
    webpackJsonp: any[];
  }
}

export default function BasicLayout(props: {
  children: React.ReactNode;
  pathname: string;
}) {
  const { children, pathname } = props;

  return (
    <Shell
      type="brand"
      style={{
        minHeight: '100vh',
      }}
    >
      <Shell.Branding>
        Framework
      </Shell.Branding>

      <Shell.Navigation>
        <PageNav pathname={pathname} />
      </Shell.Navigation>

      <Shell.Content>{children}</Shell.Content>
      <Shell.Footer>
        <Footer />
      </Shell.Footer>
    </Shell>
  );
}
