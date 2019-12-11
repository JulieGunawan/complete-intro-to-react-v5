import React from 'react';
import { render } from 'react-dom';
import Pet from "./Pet"

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "gilda",
      animal: "dog",
      breed: "golden retriever"
    }),
    React.createElement(Pet, {
      name: "stella",
      animal: "dog",
      breed: "dachshund"
    }),
    React.createElement(Pet, {
      name: "taco",
      animal: "gecko",
      breed: "madagasdcar day gecko"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
