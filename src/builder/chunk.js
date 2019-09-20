const TERRAIN_VALUES = 10;

export const chunk = size => {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(new Array(size).fill(0));
  }
  return arr;
};

const getCorners = chunk => {
  const size = chunk.length - 1;
  return [[0, 0], [0, size], [size, size], [size, 0]];
};

const calculateSlope = (x, y, a, b) => {
  console.log(x, y, a, b);
  return (x - a) / (y - b);
};

const calcualteValueOnSlop = (m, x, b) => {
  console.log(m, x, b);
  const val = Math.round(Math.abs(m * x + b));
  if (val > TERRAIN_VALUES) {
    return TERRAIN_VALUES;
  } else if (val < 0) {
    return 0;
  }
  return val;
};

export const generateSlope = chunk => {
  const [nw, ne, se, sw] = getCorners(chunk);
  const nwv = { x: nw[0], y: nw[1], value: chunk[nw[0]][nw[1]] };
  const nev = { x: ne[0], y: ne[1], value: chunk[ne[0]][ne[1]] };
  const sev = { x: se[0], y: se[1], value: chunk[se[0]][se[1]] };
  const swv = { x: sw[0], y: sw[1], value: chunk[sw[0]][sw[1]] };

  const slope = calculateSlope(nwv.y, nwv.value, nev.y, nev.value);
  const val = calcualteValueOnSlop(slope, nwv.value, 2);
  console.log(val);
};

export const createCornerValues = chunk => {
  getCorners(chunk).forEach(
    corner =>
      (chunk[corner[0]][corner[1]] = Math.round(Math.random() * TERRAIN_VALUES))
  );
  generateSlope(chunk);
  return chunk;
};
