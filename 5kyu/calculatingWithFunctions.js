function zero(op = undefined) {
  let base = 0;
  if (!op) {
    return 0;
  } else if (op) {
    return op(0);
  }
}

function one(op = undefined) {
  let base = 1;
  if (!op) {
    return 1;
  } else if (op) {
    return op(1);
  }
}

function two(op = undefined) {
  let base = 2;
  if (!op) {
    return 2;
  } else if (op) {
    return op(2);
  }
}

function three(op = undefined) {
  let base = 3;
  if (!op) {
    return 3;
  } else if (op) {
    return op(3);
  }
}

function four(op = undefined) {
  let base = 4;
  if (!op) {
    return 4;
  } else if (op) {
    return op(4);
  }
}

function five(op = undefined) {
  let base = 5;
  if (!op) {
    return 5;
  } else if (op) {
    return op(5);
  }
}

function six(op = undefined) {
  let base = 6;
  if (!op) {
    return 6;
  } else if (op) {
    return op(6);
  }
}

function seven(op = undefined) {
  let base = 7;
  if (!op) {
    return 7;
  } else if (op) {
    return op(7);
  }
}

function eight(op = undefined) {
  let base = 8;
  if (!op) {
    return 8;
  } else if (op) {
    return op(8);
  }
}

function nine(op = undefined) {
  let base = 9;
  if (!op) {
    return 9;
  } else if (op) {
    return op(9);
  }
}

function plus(num) {
  return function (a) {
    return a + num;
  }
}

function minus(num) {
  return function (a) {
    return a - num;
  }
}

function times(num) {
  return function (a) {
    return a * num;
  }
}

function dividedBy(num) {
  return function (a) {
    return Math.floor(a / num);
  }
}