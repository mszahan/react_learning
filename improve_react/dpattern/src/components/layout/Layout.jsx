import SplitScreen from "./SplitScreen";

const LeftComponent = () => {
  return <h1>Left sidebar</h1>;
};
const RightComponent = () => {
  return <h1>Right sidebar</h1>;
};

const Layout = () => {
  return (
    <div className="lay">
      <h1>The layout components</h1>
      <SplitScreen left={LeftComponent} right={RightComponent} />
    </div>
  );
};

export default Layout;
