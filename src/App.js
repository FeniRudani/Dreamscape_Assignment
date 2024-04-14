import React from "react";
import Header from "./Containers/Header/Header";
import MidSetion from "./Containers/MidSection/MidSetion";
import Features from "./Containers/Features/Features";
import Advantage from "./Containers/Advantage/Advantage";
import Partner from "./Containers/Partners/Partner";
import Resources from "./Containers/Resources/Resources";
import Footer from "./Containers/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <MidSetion />
      <Features />
      <Advantage />
      <Resources />
      <Partner />
      <Footer />
    </div>
  );
};

export default App;
