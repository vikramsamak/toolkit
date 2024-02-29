import React from "react";

function AppHeader() {
  return (
    <div className="flex flex-col py-2 px-2 gap-4 w-full">
      <div className="text-center px-2 py-2">
        <h1 className="text-4xl font-mono tracking-widest">TASKKIT</h1>
      </div>
      <div className="text-center px-2 py-2">
        <p className="text-lg font-mono tracking-wider">
          All your tools in one place for maximum efficiency
        </p>
      </div>
    </div>
  );
}

export default AppHeader;
