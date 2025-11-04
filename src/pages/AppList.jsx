import React from "react";
import AppCard from "../components/AppCard";
import apps from "../assets/AppDetails";

export default function AppList() {
  const appMetaData = apps;

  const newData = apps.map((app) => {
    return <AppCard key={app.id} appMetaData={app} />;
  });

  return (
    <>
      <div className="appList">{newData}</div>
    </>
  );
}
