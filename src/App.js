import React from "react";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Slider from "./components/section/Slider";
import Image from "./components/section/Image";
import ImgText from "./components/section/ImgText";
import Card from "./components/section/Card";
import Banner from "./components/section/Banner";
import Text from "./components/section/Text";

function App() {
  return (
    <>
      <Header fonts="GmarketSans" />
      <Main>
        <Slider />
        <Text attr={["section", "GmarketSans", "container"]} />
        <Card attr={["section", "GmarketSans", "container"]} />
        <Image attr={["section", "GmarketSans", "container"]} />
        <Banner fonts="gmarket" />
        <ImgText attr={["section", "GmarketSans", "container"]} />
      </Main>
      <Footer attr={["section", "GmarketSans", "container", "gray"]} />
    </>
  );
}

export default App;
