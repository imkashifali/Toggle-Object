import React,{useState} from 'react'
import Testing from "./component/testing";
import Effet from "./component/effet";

function App() {
  const [num, setNum] = useState(0);

  return (
    <div className="app">
      {num}
      {/* <Testing /> */}
      <Effet />
      <button onClick={()=> setNum(num+1)}>Increase</button>

    </div>
  );
}

export default App;
