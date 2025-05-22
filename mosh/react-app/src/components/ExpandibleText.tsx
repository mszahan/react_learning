import { useState } from "react";

interface Props {
  children: string;
  text_length?: number;
}

const ExpandibleText = ({ children, text_length = 20 }: Props) => {
  const [expand, setExpand] = useState(false);

  if (children.length <= text_length) {
    return <div className="container">{children}</div>;
  }
  if (!expand) {
    children = children.slice(0, text_length);
  }
  return (
    <div className="container">
      {children}
      <button className="btn btn-secondary" onClick={() => setExpand(!expand)}>
        {expand ? "less" : "more"}
      </button>
    </div>
  );
};

export default ExpandibleText;
