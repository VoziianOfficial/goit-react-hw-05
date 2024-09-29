import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Loading by Suspense</p>}>
        <Routes>
          <Route />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
