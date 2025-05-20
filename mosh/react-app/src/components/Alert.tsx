import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return (
    <div className="alert alert-primary">
      <div>{children}</div>
    </div>
  );
};

export default Alert;
