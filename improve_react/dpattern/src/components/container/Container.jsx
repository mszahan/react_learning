import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserLoader } from "./UserLoader";
import { UserInfo } from "./UserInfo";

const Container = () => {
  return (
    <div className="container">
      <h1 className="text-2xl pb-2 text-cyan-700">The Container components</h1>
      <hr />

      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
      <UserLoader userId={"1"}>
        <UserInfo />
      </UserLoader>
    </div>
  );
};

export default Container;
