const transientState = {
  metalId: 0,
  sizeId: 0,
  styleId: 0,
};

export const setMetalId = (chosenMetal) => {
  transientState.metalId = chosenMetal;
  console.log(transientState);
};

export const setSizeId = (chosenSize) => {
  transientState.sizeId = chosenSize;
  console.log(transientState);
};

export const setStyleId = (chosenStyle) => {
  transientState.styleId = chosenStyle;
  console.log(transientState);
};
