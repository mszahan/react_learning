import axios from "axios";
import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserLoader } from "./UserLoader";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";
import { DataSource } from "./DataSource";

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

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

      <DataSource getDataFunc={getServerData("/users/1")} resourceName="user">
        <UserInfo />
      </DataSource>
    </div>
  );
};

export default Container;
