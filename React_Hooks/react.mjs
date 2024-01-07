const getReact = function () {
  let hooks = [];
  let index = 0;

  const useState = (initialState) => {
    const state = hooks[index] || initialState;
    const freezeIndex = index;
    const setState = (newState) => {
      hooks[freezeIndex] = newState;
    };

    index++;
    return [state, setState];
  };

  const render = (Component) => {
    index = 0;
    const c = Component();
    c.render();
    return c;
  };

  return { useState, render };
};

const React = getReact();

export default React;
