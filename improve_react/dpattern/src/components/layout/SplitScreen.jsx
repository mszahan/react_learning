const SplitScreen = ({ children }) => {
  const [left, right] = children;
  return (
    <div className="flex gap-3">
      <div className="flex-2 bg-orange-600">{left}</div>
      <div className="flex-1 bg-cyan-700">{right}</div>
    </div>
  );
};

export default SplitScreen;
