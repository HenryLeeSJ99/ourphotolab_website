import "./App.css";
import Header from "./components/header/Header";
import Slideshow from "./components/slideshow/slider";
import Footer from "./components/footer/Footer";
import { Component } from "react";

export default function App() {
  // switch (window.location.pathname) {
  //   case "/":
  //     Component = <Slideshow />
  //     break
  //   case "/main":
  //     Component = <Slideshow />
  //     break
  //   case "/gallery":
  //     Component = <Slideshow />
  //     break
  // }

  return (
    <div className="App">
      <Header />
      <Slideshow />
      <Footer />
    </div>
  );
}
