import { chunk, createCornerValues } from "./chunk";

const generateWorld = size => {
  return createCornerValues(chunk(size));
};

export default generateWorld;
