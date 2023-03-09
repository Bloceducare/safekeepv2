import { IChild } from "interface";
import React from "react";
const PageLayout = ({ children }: IChild) => {
  return (
    <>
      <div className="max-w-6xl lg:px-4 mx-auto">{children}</div>
    </>
  );
};

export default PageLayout;
