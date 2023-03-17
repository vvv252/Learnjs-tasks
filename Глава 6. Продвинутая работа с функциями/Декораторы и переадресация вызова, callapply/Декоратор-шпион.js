function spy(func) {

  function layout(...args) {
    layout.calls.push(args);
    return func.apply(this, args);
  }

  layout.calls = [];

  return layout;
}