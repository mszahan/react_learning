const SplitScreen = ({ left: Left, right: Right }) => {
  return (
    <div className="flex gap-3">
      <div>
        <Left />
      </div>
      <div>
        <Right />
      </div>
    </div>
  );
};

export default SplitScreen;
