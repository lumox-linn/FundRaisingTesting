import RouterView from "./router/RouterView";
import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<div>Loading....</div>}>
          <RouterView/>
        </Suspense>
      </div>
    </BrowserRouter>>
    
  );
}

export default App;
