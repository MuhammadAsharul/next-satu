import React from "react";

export default function DashboardLayout({
  children,
  analytics,
  social,
  users,
  login,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  social: React.ReactNode;
  users: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLogin = false;
  return (
    <div>
      <div className="">{children}</div>
      {isLogin ? (
        <div className="flex gap-2">
          <div className="flex-col">
            <div className="">{users}</div>
            <div className="">{social}</div>
          </div>
          <div className="flex flex-1">{analytics}</div>
        </div>
      ) : (
        <div>{login}</div>
      )}
    </div>
  );
}
