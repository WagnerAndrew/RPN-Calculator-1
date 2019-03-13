export const map = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide
};

export function rpn(tokens) {
  let stack = [];

  for (let n of tokens) {
    if (map[n]) {
      let fn = map[n];
      let y = stack.pop();
      let x = stack.pop();

      stack.push(fn(x, y));
    } else {
      stack.push(Number(n));
    }
  }

  return head(stack);
}

export function add(x, y) {
  return x + y;
}

export function subtract(x, y) {
  return x - y;
}

export function multiply(x, y) {
  return x * y;
}

export function divide(x, y) {
  return parseInt(x / y);
}

export function head(list) {
  return list[0];
}
