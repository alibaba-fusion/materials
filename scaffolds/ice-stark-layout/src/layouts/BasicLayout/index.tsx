import React from 'react';
import { Shell } from '@alifd/next';
import PageNav from './components/PageNav';
import Footer from './components/Footer';

declare global {
  interface Window {
    webpackJsonp: any[];
  }
}

const { useEffect } = React;
export default function BasicLayout(props: {
  children: React.ReactNode;
  pathname: string;
  appLeave: { path: string };
}) {
  const { children, pathname, appLeave } = props;
  const leavePath = appLeave && appLeave.path;
  useEffect(() => {
    if (leavePath === '/angular' && window.webpackJsonp) {
      // remove webpackJsonp added by Angular app
      delete window.webpackJsonp;
    }
  }, [leavePath]);

  return (
    <Shell
      type="dark"
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
