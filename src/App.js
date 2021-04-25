import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer/Footer.jsx";

const config = {
  isPlay: false,
  urlCandela: "http://51.255.123.116:10393/stream;",
}


const App = () => {
  const [config, setConfig] = useState({});
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setConfig(data)
      });
  },[setConfig]);


  // useEffect(() => {
  //   setTimeout(()=>{
  //     setPlaying(playing => true)
  //   },6000)
  // }, [setPlaying])

  return (
    <div className="App">
      <Header />
      <Footer className="footer" audio = {new Audio(config.urlCandela)} isRun = {playing} />
    </div>
  );
};

export default App;
