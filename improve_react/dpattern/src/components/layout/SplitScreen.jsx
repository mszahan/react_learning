const SplitScreen = ({ children }) => {
  const [left, right] = children;
  return (
    <div className="flex gap-3">
      <div className="flex-2 bg-orange-700 p-3 text-white text-xl rounded">
        {left}
      </div>
      <div className="flex-1 bg-cyan-700 p-3 text-white rounded">{right}</div>
    </div>
  );
};

export default SplitScreen;
