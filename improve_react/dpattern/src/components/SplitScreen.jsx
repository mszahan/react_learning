const SplitScreen = ({ left: Left, right: Right }) => {
  return (
    <div>
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
