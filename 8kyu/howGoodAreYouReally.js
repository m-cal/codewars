function betterThanAverage(classPoints, yourPoints) {
  return (classPoints.reduce((x, y) => x + y) / classPoints.length) < yourPoints ? true : false;
}