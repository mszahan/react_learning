import SplitScreen from "./SplitScreen";
import { people, products } from "./data";
import { RegularList } from "./RegularList";
import { NumberedList } from "./NumberedList";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { LargePersonListItem } from "./people/LargePersonListItem";
import { LargeProductListItem } from "./product/LargeProductListItem";

const LeftComponent = ({ name }) => {
  return <h1>{name}</h1>;
};
const RightComponent = ({ message }) => {
  return <p>{message}</p>;
};

const Layout = () => {
  return (
    <div className="lay">
      <h1 className="text-2xl">The split screen components</h1>
      <SplitScreen>
        <LeftComponent name={"Alex is a girl"} />
        <RightComponent message={"Hello there"} />
      </SplitScreen>

      <h3 className="text-2xl mt-5">the List component</h3>
      <h4 className="text-xl font-semibold mt-5">The small person list Item</h4>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <h4 className="text-xl font-semibold mt-5">The Large person list Item</h4>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />

      <h4 className="text-xl font-semibold mt-5">The Large person list Item</h4>
      <NumberedList
        items={products}
        resourceName="products"
        itemComponent={LargeProductListItem}
      />
    </div>
  );
};

export default Layout;
