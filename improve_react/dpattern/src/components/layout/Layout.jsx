import SplitScreen from "./SplitScreen";

const LeftComponent = ({ name }) => {
  return <h1>{name}</h1>;
};
const RightComponent = ({ message }) => {
  return <p>{message}</p>;
};

const Layout = () => {
  return (
    <div className="lay">
      <h1>The layout components</h1>
      <SplitScreen>
        <LeftComponent name={"Alex"} />
        <RightComponent message={"Hello there"} />
      </SplitScreen>
    </div>
  );
};

export default Layout;
