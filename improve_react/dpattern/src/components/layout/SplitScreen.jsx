const SplitScreen = ({ children }) => {
  const [left, right] = children;
  return (
    <div className="flex gap-3">
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
};

export default SplitScreen;
