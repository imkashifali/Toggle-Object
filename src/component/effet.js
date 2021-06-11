import React, { useEffect } from "react";

const Effet = () => {
  useEffect(() => {
    console.log("use effect running now", new Date());
  }, []);
  return <div></div>;
};

export default Effet;
