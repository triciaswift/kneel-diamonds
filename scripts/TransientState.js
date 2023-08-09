const transientState = {
  metalId: 0,
  sizeId: 0,
  styleId: 0,
};

export const setMetalId = (chosenMetal) => {
  transientState.metalId = chosenMetal;
};

export const setSizeId = (chosenSize) => {
  transientState.sizeId = chosenSize;
};

export const setStyleId = (chosenStyle) => {
  transientState.styleId = chosenStyle;
};

export const savePlaceOrder = async () => {
  /*
        Add the required keys to the object below that are
        needed for a POST operation.
    */
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };

  // Send the transient state to your API
  const response = await fetch("http://localhost:8088/orders", postOptions);
};
