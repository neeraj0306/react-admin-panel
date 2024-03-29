import React from "react";

const input = ({ className, ...props }) => {
  return (
    <>
      <input className={`px-4 py-5 ${className}`} {...props} />
    </>
  );
};

export default input;
