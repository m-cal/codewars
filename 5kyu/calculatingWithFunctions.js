function seven(op = undefined) {
  let base = 7;
  if (!op) {
    return 7;
  } else if (op) {
    op();
  }
}

function plus(num, base = base) {
  return base + num;
}

function minus() {}
function times() {}
function dividedBy() {}


/*

seven(plus(seven()));

*/







/*

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

*/