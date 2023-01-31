import { IChild } from "interface";
import React from "react";
const PageLayout = ({ children }: IChild) => {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4">{children}</div>
    </>
  );
};

export default PageLayout;
