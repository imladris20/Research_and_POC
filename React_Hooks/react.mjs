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

  const useEffect = (callback, dependency) => {
    const oldDep = hooks[index];
    let hasChanged = true;
    if (oldDep) {
      hasChanged = dependency.some((dep, i) => !Object.is(dep, oldDep[i]));
    }
    if (hasChanged) {
      callback();
    }
    hooks[index] = dependency;
    index++;
  };

  return { useState, render, useEffect };
};

const React = getReact();

export default React;
