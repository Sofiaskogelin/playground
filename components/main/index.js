import Start from "./Start";
import React from "react";
import About from "./About";

class Main extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.bgChanger);
  }

  bgChanger() {
    if (this.scrollY > this.innerHeight / 1.5) {
      document.body.classList.add("bg-active");
    } else {
      document.body.classList.remove("bg-active");
    }
    console.log(this.scrollY);
    console.log("working");
  }

  render() {
    return (
      <div>
        <Start />
        <About />
      </div>
    );
  }
}

export default Main;
