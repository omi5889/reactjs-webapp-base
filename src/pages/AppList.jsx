import React from "react";
import AppCard from "../components/AppCard";
import apps from "../assets/AppDetails";

export default function AppList() {
  const appMetaData = apps;

  return (
    <>
      <div className="appList">
        {appMetaData.map((app) => (
          <AppCard key={app.id} appMetaData={app} />
        ))}
      </div>
    </>
  );
}
