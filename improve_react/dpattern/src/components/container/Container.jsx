import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserLoader } from "./UserLoader";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";

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

      <ResourceLoader resourceName={"user"} resourceUrl={"/users/1"}>
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceName={"product"} resourceUrl={"/products/12"}>
        <ProductInfo />
      </ResourceLoader>
    </div>
  );
};

export default Container;
