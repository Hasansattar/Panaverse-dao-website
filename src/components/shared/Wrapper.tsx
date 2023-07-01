import React, { FC } from "react";
const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="max-w-screen-xl mx-auto px-4">{children}</div>;
};

export default Wrapper;
