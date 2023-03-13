import { IChild } from "interface";
import React from "react";
const PageLayout = ({ className, children }: IChild & { className?: string }) => {
  return (
    <>
      <div className={`max-w-6xl lg:px-4 mx-auto ${className}`}>{children}</div>
    </>
  );
};

export default PageLayout;
