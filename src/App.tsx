import React from "react";
import "./App.css";
import MainHeader from "./shared/components/navigation/MainHeader";
import Feed from "./feed/pages/Feed";

function App() {
  return (
    <>
      <MainHeader/>
      <main>
        <Feed />
      </main>
    </>
  );
}

export default App;
