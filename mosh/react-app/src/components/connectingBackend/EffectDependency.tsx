import { useState, useEffect } from "react";

const EffectDependency = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("fetching products in ", category);
    setProducts(["clothing", "household"]);
  }, [category]);
  return (
    <div className="dependency">
      <ul className="list-group">
        {products.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EffectDependency;
