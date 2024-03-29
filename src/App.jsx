import { useState } from "react";
import input from "./components/ui/input";

function App() {
  return (
    <>
      <div className=" border-solid border-gray-800">Hello World!</div>
      <input type="text" name="test" id="test" className={"bg-red-500"} />
    </>
  );
}

export default App;
