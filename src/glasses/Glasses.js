import React, { Component } from "react";
import "./Glasses.css";

export default class Glasses extends Component {
  glasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    glassImg: "./glassesImage/v1.png",
    name: "GUCCI G8850U",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  };

  changeGlass = (id) => {
    const glass = this.glasses.find((item) => item.id === id);
    this.setState({
      glassImg: glass.url,
      name: glass.name,
      desc: glass.desc,
    });
  };

  renderGlass = () => {
    const htmlArr = this.glasses.map((item) => {
      return (
        <div key={item.id} className="col-2 mb-3">
          <button
            style={{ background: "transparent", border: "none" }}
            onClick={() => {
              this.changeGlass(item.id);
            }}
          >
            <img src={item.url} />
          </button>
        </div>
      );
    });

    return htmlArr;
  };

  render() {
    return (
      <div className="content">
        <div className="title">
          <h1>TRY GLASSES APP ONLINE</h1>
        </div>
        <div className="model">
          <div className="model-left">
            <img className="female-model" src="./glassesImage/model.jpg" />
            <img className="glass" src={this.state.glassImg} />

            <div className="description">
              <h2>{this.state.name}</h2>
              <p>
                {this.state.desc}
              </p>
            </div>
          </div>
          <div className="model-right">
            <img src="./glassesImage/model.jpg" />
          </div>
        </div>
        <div className="container glasses">
          <div className="row">{this.renderGlass()}</div>
        </div>
      </div>
    );
  }
}
