import React, { useState } from "react";
import Category from "./components/Category";
import Product from "./components/Product";
import {CategoryContext} from './context'


const { Provider} = CategoryContext

function App() {
  const [data, setData] = useState("FAKE: electronics")
  return (
    <>
      <div className="flex flex-col">
      <Provider value={{ data, setData }}>
        <Category />
        <Product />
      </Provider>
      </div>
    </>
  );
}

export default App;
