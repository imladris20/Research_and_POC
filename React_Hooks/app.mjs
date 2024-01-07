import React from "./react.mjs";

const a = () => {
  const [count, setCount] = React.useState(1);
  const [text, setText] = React.useState("Mina");

  React.useEffect(() => {
    console.log("We all love TWICE");
  }, [count]);

  return {
    render: () => console.log({ count, text }),
    click: () => setCount(count + 1),
    type: (word) => setText(word),
  };
};

var App = React.render(a);
App.click();
var App = React.render(a);
App.type("Tzuyu");
var App = React.render(a);
App.click();
var App = React.render(a);
