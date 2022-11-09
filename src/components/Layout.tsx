import React, { ReactChild, ReactChildren } from "react";

function Layout({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <div className="flex flex-col h-screen bg-primary">{children}</div>;
}

export default Layout;
