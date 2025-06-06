import React from "react";
import AppCard from "../components/AppCard";

export default function AppList() {
  const appMetaData = [
    {
      id: 1,
      name: "ToDo App",
      description: "This is the first app.",
      url: "https://lively-conkies-79e4a8.netlify.app/",
    },
    {
      id: 2,
      name: "APOD Project",
      description: "This is the second app.",
      url: "https://pines-rjs-apod.netlify.app/",
    },
  ];

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
