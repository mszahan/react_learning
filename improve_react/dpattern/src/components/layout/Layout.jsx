import SplitScreen from "./SplitScreen";
import { Modal } from "./Modal";
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
      <h1 className="text-2xl pb-2 text-cyan-700">The layout components</h1>
      <hr />
      <h1 className="text-xl font-semibold my-3">
        The split screen components
      </h1>
      <SplitScreen>
        <LeftComponent name={"Alex is a girl"} />
        <RightComponent message={"Hello there"} />
      </SplitScreen>

      <h3 className="text-xl font-semibold my-3">The list component</h3>
      <h4 className="font-semibold mt-5">The small person list item</h4>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <h4 className="font-semibold mt-5">The Large person list item</h4>
      <div className="flex gap-5">
        <RegularList
          items={people}
          resourceName="person"
          itemComponent={LargePersonListItem}
        />
      </div>

      <h4 className="font-semibold mt-5">The large product list item</h4>
      <div className="flex gap-5">
        <NumberedList
          items={products}
          resourceName="products"
          itemComponent={LargeProductListItem}
        />
      </div>

      <h4 className="text-xl font-semibold my-3">The modal component</h4>
      <Modal>
        <LargeProductListItem products={products[0]} />
      </Modal>
    </div>
  );
};

export default Layout;
