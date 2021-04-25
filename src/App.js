import React, {lazy,Suspense } from "react";
import Fallback from './container/FallBack/Fallback'

const Home = lazy(() => import('../src/components/Home/Home'));

function App() {
  return (
    <Suspense fallback={<Fallback/>}>
    <div style={{overflow:'hidden'}}>
      <Home />
    </div>
    </Suspense>
  );
}

export default App;
