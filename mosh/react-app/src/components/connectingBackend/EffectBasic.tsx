import { useEffect, useRef } from "react";

const EffectBasic = () => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "Basic Effect";
  });

  return (
    <div className="effect">
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
};

export default EffectBasic;
