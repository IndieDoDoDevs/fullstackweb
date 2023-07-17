import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="w-full h-screen">
      <div className="flex h-full">
        {/* SideBar */}
        <div className="w-52 h-full bg-black text-white">sidebar</div>
        <div className="flex flex-col flex-wrap w-full">
          {/* TopBar */}
          <div className="h-16 w-full bg-gray-300">Topbar</div>
          {/* Content */}
          <div className="w-full h-full flex-1">Content</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
