function WindowHeader({ windowName }) {
  return (
    <div className="flex w-full justify-center border-b border-input h-16 px-2 py-2">
      <div className="flex items-center">
        <p className="font-mono">{windowName}</p>
      </div>
    </div>
  );
}

export default WindowHeader;
