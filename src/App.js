const Pet = ({name, animal, breed}) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ])
}
const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, { name: "gilda", animal: "dog", breed: "golden retriever"}),
      React.createElement(Pet, { name: "stella", animal: "dog", breed: "dachshund"}),
      React.createElement(Pet, { name: "taco", animal: "gecko", breed: "madagasdcar day gecko"})
    ]
  );
};

ReactDOM.render(
  React.createElement(App),
  document.getElementById("root")
);
